const students = [
  { id: 1, name: "Dao", email: "dao@example.com" },
  { id: 2, name: "Duong", email: "duong@example.com" },
  { id: 3, name: "Khanh", email: "khanh@example.com" }
];

const users = [
  { id: 1, username: "admin", password: "demo123", name: "Admin" }
];

function assertParams(sql, params) {
  const count = (String(sql).match(/\?/g) || []).length;
  if (count !== params.length) {
    throw new Error(
      `SQL parameter mismatch: expected ${count}, received ${params.length}`
    );
  }
}

async function query(sql, params = []) {
  assertParams(sql, params);

  if (sql === "SELECT * FROM students") {
    return students.slice();
  }

  if (sql === "SELECT * FROM students WHERE id = ?") {
    return students.filter((s) => String(s.id) === String(params[0]));
  }

  if (sql === "SELECT * FROM students WHERE name LIKE ?") {
    const keyword = String(params[0] || "")
      .replaceAll("%", "")
      .toLowerCase();
    return students.filter((s) =>
      String(s.name).toLowerCase().includes(keyword)
    );
  }

  if (sql === "INSERT INTO students (name, email) VALUES (?, ?)") {
    const student = {
      id: students.reduce((m, s) => Math.max(m, Number(s.id) || 0), 0) + 1,
      name: String(params[0] || ""),
      email: String(params[1] || "")
    };
    students.push(student);
    return { insertId: student.id, affectedRows: 1 };
  }

  if (sql === "UPDATE students SET name = ?, email = ? WHERE id = ?") {
    const student = students.find(
      (s) => String(s.id) === String(params[2])
    );
    if (!student) return { affectedRows: 0 };
    student.name = String(params[0] || "");
    student.email = String(params[1] || "");
    return { affectedRows: 1 };
  }

  if (sql === "DELETE FROM students WHERE id = ?") {
    const index = students.findIndex(
      (s) => String(s.id) === String(params[0])
    );
    if (index < 0) return { affectedRows: 0 };
    students.splice(index, 1);
    return { affectedRows: 1 };
  }

  if (sql === "SELECT * FROM users WHERE username = ? AND password = ?") {
    return users.filter(
      (u) => u.username === params[0] && u.password === params[1]
    );
  }

  throw new Error("Unsupported SQL: " + sql);
}

module.exports = {
  query
};
