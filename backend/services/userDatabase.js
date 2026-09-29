const db = require("../config/db");

async function findByCredentials(username, password) {
  const sql = "SELECT * FROM user WHERE user_name = ? AND password = ?";
  const rows = await db.query(sql, [username]);
  return rows[0] || null;
}

module.exports = {
  findByCredentials
};
