# Apiban-mysql

Fetch attackers IPs from APIBan and save them to MySQL database table.


https://user-images.githubusercontent.com/19316784/193254942-ccd670a7-feb1-4361-8746-136054965210.mov



**Download Project**
```shell
git clone https://github.com/ajamous/apiban-mysql.git

```
**Change Directory**

```shell

cd apiban-mysql/

```

**Install dependencies**

```shell
npm install 
```

**Created required tables in your mysql db**

```sql

CREATE TABLE "last_fetched_id" (
  "id" varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY ("id")
);

CREATE TABLE "apiban_banned_ips" (
  "ip" varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY ("ip")
);

INSERT INTO last_fetched_id(id) values('');


```

**Enter APIBan API key and DB Credentials** 

```shell

vi sync.js 

```

```js
/* validate environment */
const APIBAN_API_KEY = "XXXXXXXXXXXXXXXXX"
const APIBAN_MYSQL_SERVER = "replace_with_mysql_ip_or_host"
const APIBAN_MYSQL_PORT = 3306
const APIBAN_MYSQL_DATABASE = "replace_with_db_name"
const APIBAN_MYSQL_USER = "replace_with_mysql_user"
const APIBAN_MYSQL_PASSWORD = "replace_with_mysql_password"

```


**Run the script**

```shell
node sync.js
```

Sample output

```js

$ node sync.js 

getting ips list...
starting from ID: undefined
fetched 250 ips, next ID 1663924065
fetched 250 ips, next ID 1663954967
fetched 250 ips, next ID 1663970136
fetched 250 ips, next ID 1663991432
fetched 250 ips, next ID 1664018643
fetched 250 ips, next ID 1664039285
fetched 250 ips, next ID 1664058709
fetched 250 ips, next ID 1664082297
fetched 250 ips, next ID 1664111965
fetched 250 ips, next ID 1664130848
fetched 250 ips, next ID 1664160433
fetched 250 ips, next ID 1664198153
fetched 250 ips, next ID 1664229896
fetched 250 ips, next ID 1664259993
fetched 250 ips, next ID 1664287578
fetched 250 ips, next ID 1664321167
fetched 250 ips, next ID 1664330768
fetched 250 ips, next ID 1664351231
fetched 250 ips, next ID 1664373761
fetched 250 ips, next ID 1664386920
saving ips list into DB...
done.
```

When there is no more IPs to add

```shell
$ node sync.js

getting ips list...
starting from ID: 1664386920
no new banned IPs since last sync, exiting...
```

Check your MySQL DB table for updates:


<img width="1213" alt="Screenshot 2022-09-28 at 4 25 07 PM" src="https://user-images.githubusercontent.com/19316784/192790331-f495f182-b1a0-4774-a9da-0085f9461095.png">


**You may also like**

- APIBan-Redis: https://github.com/jambonz/apiban-redis 

