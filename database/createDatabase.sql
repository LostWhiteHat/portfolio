CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE projects(
    PID INT PRIMARY KEY AUTO_INCREMENT,
    language varchar(15) NOT NULL,
    title varchar(255) UNIQUE NOT NULL,
    description varchar(255) NOT NULL,
    link varchar(255) NOT NULL
);