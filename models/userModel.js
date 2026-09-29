const db = require('../config/db');

exports.findByCredentials = async (username, password) => {
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const rows = await db.query(sql, [username]);
  return rows[0] || null;
};
