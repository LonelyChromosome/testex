const fs = require("fs/promises");
const path = require("path");

const DB_FILE = path.join(__dirname, "..", "data", "db.json");

async function authenticate(username, password) {
  const raw = await fs.readFile(DB_FILE, "utf8");
  const db = JSON.parse(raw);

  return db.users.find(
    (user) =>
      user.username === username &&
      user.password === username
  ) || null;
}

module.exports = {
  authenticate
};
