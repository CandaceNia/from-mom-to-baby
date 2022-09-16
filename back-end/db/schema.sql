DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
image TEXT,
caption TEXT
); 