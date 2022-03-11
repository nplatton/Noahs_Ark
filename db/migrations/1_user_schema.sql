DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR(10) NOT NULL,
  email VARCHAR
);
