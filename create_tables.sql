CREATE TABLE "last_fetched_id" (
  "id" varchar(32) NOT NULL DEFAULT '',
  PRIMARY KEY ("id")
);

CREATE TABLE "apiban_banned_ips" (
  "ip" varchar(15) NOT NULL DEFAULT '',
  PRIMARY KEY ("ip")
);

INSERT INTO last_fetched_id(id) values('');

