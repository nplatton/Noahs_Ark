const db = require("../dbConfig/init");

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.passwordDigest = data.password_digest;
  }

  // Find user by username
  static findByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        const userData = await db.query(
          `SELECT * FROM users
        WHERE users.username=$1;`,
          [username]
        );
        if (!userData.rows.length) {
          throw new Error("No user with given username");
        }
        const user = new User(userData.rows[0]);
        res(user);
      } catch (err) {
        rej(err);
      }
    });
  }

  // Find user by email
  static findByEmail(email) {
    return new Promise(async (res, rej) => {
      try {
        const userData = await db.query(
          `
          SELECT * FROM users
          WHERE users.email=$1;`,
          [email]
        );
        if (!userData.rows.length) {
          throw new Error("No user with given email");
        }
        const user = new User(userData.rows[0]);
        res(user);
      } catch (err) {
        rej(err);
      }
    });
  }

  // Create new user
  static create(data) {
    return new Promise(async (res, rej) => {
      try {
        const userData = await db.query(
          `
          INSERT INTO users (username, email)
          VALUES
          ($1, $2)
          RETURNING *;`,
          [data.username, data.email]
        );
        const newUser = new User(userData.rows[0]);
        await newUser.addPassword(data.password);
        res("User created!");
      } catch (err) {
        rej(err);
      }
    });
  }

  getPassword() {
    return new Promise(async (res, rej) => {
      try {
        const pswrdData = await db.query(
          `
          SELECT password_digest FROM passwords
          WHERE user_id=$1;`,
          [this.id]
        );
        const pswrd = pswrdData.rows[0].password_digest;
        res(pswrd);
      } catch (err) {
        rej(err);
      }
    });
  }

  addPassword(password) {
    return new Promise(async (res, rej) => {
      try {
        await db.query(
          `
            INSERT INTO passwords (password_digest, user_id)
            VALUES
            ($1, $2);`,
          [password, this.id]
        );
        res("Password added");
      } catch (err) {
        rej(err);
      }
    });
  }
}

module.exports = User;
