DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(50) NOT NULL,
  devoured boolean not null default 0,
  primary key (id)
);