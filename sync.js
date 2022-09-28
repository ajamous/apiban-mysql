#!/usr/bin/env node
const assert = require('assert');
const util = require('util')
const bent = require('bent');
const get = bent('https://apiban.org', 'GET', 'json', 200);
const mysql = require('mysql2')

/* validate environment */
const APIBAN_API_KEY = "XXXXXXXXXXXXXXXXX"
const APIBAN_MYSQL_SERVER = "replace_with_mysql_ip_or_host"
const APIBAN_MYSQL_PORT = 3306
const APIBAN_MYSQL_DATABASE = "replace_with_db_name"
const APIBAN_MYSQL_USER = "replace_with_mysql_user"
const APIBAN_MYSQL_PASSWORD = "replace_with_mysql_password"



const dbconf = {
  host: APIBAN_MYSQL_SERVER,
  port: APIBAN_MYSQL_PORT,
  user: APIBAN_MYSQL_USER,
  password: APIBAN_MYSQL_PASSWORD,
  database: APIBAN_MYSQL_DATABASE  //,
//  debug: true
}

function makeDb( config ) {
        const connection = mysql.createConnection( config )
        return {
                query( sql, args ) {
                        return util.promisify( connection.query )
                                .call( connection, sql, args )
                                .catch( err => {
                                                console.log('MySQL ERR', err)
                                                process.exit()
                                        })
                },
                close() {
                        return util.promisify( connection.end ).call( connection )
                }
        }
}

const db = makeDb( dbconf )


const getBlacklist = async() => {
  let id;
  let ips = [];
  do {
    try {
      const url = `/api/${APIBAN_API_KEY}/banned${id ? ('/' + id) : ''}`;
      const response = await get(url);
      //console.log("response:", response)
      ips = [...ips, ...response.ipaddress];
      id = response.ID;
      //console.log(`fetched ${response.ipaddress.length} ips, next ID ${id}`);
    } catch (err) {
      if (ips.length) return ips;
      console.error('Failed to get blacklist from apiban', err);
      throw err;
    }
  } while (id && id !== 'none');
  return ips;
};

async function sync() {
	console.log("getting ips list...")
	let ips = await getBlacklist()
	let ip
	let sql = "REPLACE INTO apiban_banned_ips(ip) VALUES(?)"
        console.log("saving ips list into DB...")
	for(let i = 0; i < ips.length; i++) {
		ip = ips[i]
		await db.query(sql,ip)
		//console.log("checking ip",ip)
	}
	//console.log(ips)
	console.log("done.")
	process.exit()
}

sync()
