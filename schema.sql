DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE todos (
  id int AUTO_INCREMENT NOT NULL,
  todo varchar(30) NOT NULL,
  iscompleted boolean NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);

m