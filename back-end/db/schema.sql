DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
image TEXT,
caption TEXT
); 

DROP DATABASE IF EXISTS questions_dev;
CREATE DATABASE questions_dev;

\c questions_dev;

CREATE TABLE questions (
id SERIAL PRIMARY KEY,
username TEXT NOT NULL,
question TEXT
); 


