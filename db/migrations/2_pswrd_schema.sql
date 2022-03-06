DROP TABLE IF EXISTS passwords;

CREATE TABLE passwords (
  id serial PRIMARY KEY,
  password_digest VARCHAR NOT NULL,
  user_id INT NOT NULL
);
