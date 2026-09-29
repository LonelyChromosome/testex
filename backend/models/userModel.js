const db = require("../config/db");

async function findByCredentials(username, password) {
  const rows = await db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username]
  );
  return rows[0] || null;
}

module.exports = {
  findByCredentials
};
