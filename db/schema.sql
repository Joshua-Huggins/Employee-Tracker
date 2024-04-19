DROP DATABASE IF EXISTS employeedb;

CREATE DATABASE employeedb;

\c employeedb;

CREATE TABLE department (
    id SERIAL,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id SERIAL,
    title VARCHAR(30) NULL,
    salary NUMERIC(12, 2) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id SERIAL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id)
);