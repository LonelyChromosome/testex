const fs = require("fs/promises");
const path = require("path");

const DB_FILE = path.join(__dirname, "..", "data", "db.json");

async function readDatabase() {
  const raw = await fs.readFile(DB_FILE, "utf8");
  return JSON.parse(raw);
}

async function writeDatabase(data) {
  await fs.writeFile(DB_FILE, JSON.stringify(data, null, 2), "utf8");
}

async function getAll() {
  const db = await readDatabase();
  return db.students;
}

async function findById(id) {
  const db = await readDatabase();
  return db.students.find(
    (student) => String(student.id) === String(id)
  ) || null;
}

async function search(keyword) {
  const db = await readDatabase();
  const normalized = String(keyword).toLowerCase();

  return db.students.filter((student) =>
    student.name.toLowerCase().includes(normalized)
  );
}

async function create(name, email) {
  const db = await readDatabase();
  const nextId =
    db.students.reduce(
      (max, student) => Math.max(max, Number(student.id) || 0),
      0
    ) + 1;

  db.students.push({
    id: nextId,
    name: String(name || ""),
    email: String(email || "")
  });

  await writeDatabase(db);
}

module.exports = {
  getAll,
  findById,
  search,
  create
};
