\c ;

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT,
    caption TEXT
);