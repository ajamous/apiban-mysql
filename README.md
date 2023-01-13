# APIban-MySQL

Apiban-mysql is a project that allows you to retrieve attacker IPs from APIBan API and store them in a MySQL database table for further analysis.
Learn more about APIBan and its capabilities at https://www.apiban.org

For those who prefer not to install Git or run this project in their production environment, an alternative option is to host it on a small virtual machine (VM) with providers such as Vultr. This setup enables you to save the identified bad actors' IPs to a managed MySQL database, which can be accessed via a secure TLS connection by your production systems. By using this method, you can still use the data collected by the project in your production systems without installing it directly on the production environment.

**Installation**

Download Project

```shell
git clone https://github.com/ajamous/apiban-mysql.git

```
Change Directory

```shell

cd apiban-mysql/

```

Install dependencies

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

https://user-images.githubusercontent.com/19316784/193254942-ccd670a7-feb1-4361-8746-136054965210.mov


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

<img width="1153" alt="Screenshot 2022-09-30 at 1 57 22 PM" src="https://user-images.githubusercontent.com/19316784/193255563-d2fb6ec0-d60b-4630-be5f-55fda0ef4bad.png">




**Contributing**

We welcome contributions to the apian-mysql project! If you're interested in helping to improve this project, here are a few ways to get started:


1. Fork the repository on GitHub and make your changes in a new branch.
2. Submit a pull request once you have made your changes. Please make sure to include a clear description of the changes you've made and the reasons for those changes.
3. Check for open issues or open a new issue to start a discussion about a bug or feature request.
4. Review code by looking at other pull requests and issues, this will help you understand the codebase and help in understanding what needs to be fixed or added.
5. Provide feedback on open pull requests, this will help the maintainer to understand what changes are needed, or if the changes meet the requirement.
6. Help out with documentation, you can help by contributing to the documentation in the GitHub wiki, this will help developers understand the project better and get started quickly.
7. Add new test cases, before submitting a pull request please make sure to test the code with new test cases and make sure it passes the test.

**Code of Conduct**

We want to make sure that the apian-mysql project is an inclusive and respectful environment for everyone. We have adopted the Contributor Covenant as our Code of Conduct. By participating in this project, you are expected to follow this code. Please report any behavior that you believe is not aligned with this code.



If you're interested in using Redis as a data store, you may like

- APIBan-Redis: https://github.com/jambonz/apiban-redis 

