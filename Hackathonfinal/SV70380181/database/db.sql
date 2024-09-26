-- to create a new database
CREATE DATABASE customersdb;

-- to use database
use customersdb;

-- creating a new table
CREATE TABLE usuarios (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL,
);

-- to show all tables
show tables;

-- to describe table
describe usuarios;
