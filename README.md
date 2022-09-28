# apiban-mysql
Fetch banned IPs from APIBan and save them to MySQL DB table



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

getting ips list...
saving ips list into DB...

```

Check your MySQL DB table for updates:


<img width="1213" alt="Screenshot 2022-09-28 at 4 25 07 PM" src="https://user-images.githubusercontent.com/19316784/192790331-f495f182-b1a0-4774-a9da-0085f9461095.png">


