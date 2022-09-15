DROP DATABASE IF EXISTS posts_dev;
CREATE DATABASE posts_dev;

\c posts_dev;

CREATE TABLE posts (
post_id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
image TEXT,
caption TEXT
); 