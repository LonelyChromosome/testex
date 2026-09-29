const db = require("../config/db");

async function getAll() {
  return db.query("SELECT * FROM student");
}

async function findById(id) {
  const rows = await db.query(
    "SELECT * FROM students WHERE student_id = ?",
    [id]
  );
  return rows[0] || null;
}

async function search(keyword) {
  return db.query(
    "SELECT * FROM students WHERE full_name LIKE ?",
    ["%" + keyword + "%"]
  );
}

async function create(name, email) {
  return db.query(
    "INSERT INTO students (name, email) VALUES (?, ?)",
    [name, email]
  );
}

async function update(id, name, email) {
  return db.query(
    "UPDATE students SET name = ?, email = ? WHERE id = ?",
    [name, email, id]
  );
}

async function remove(id) {
  return db.query(
    "DELETE FROM students WHERE id = ?",
    [id]
  );
}

module.exports = {
  getAll,
  findById,
  search,
  create,
  update,
  remove
};
