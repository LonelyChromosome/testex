const users = [
  { id: 1, username: "admin", password: "demo123", name: "Admin" },
  { id: 2, username: "dao", password: "webnc-demo", name: "Dao" }
];

async function query(sql, params = []) {
  const placeholderCount = (String(sql).match(/\?/g) || []).length;

  if (placeholderCount !== params.length) {
    throw new Error(
      `SQL parameter mismatch: expected ${placeholderCount}, received ${params.length}`
    );
  }

  if (!String(sql).includes("FROM users")) {
    throw new Error("Table does not exist");
  }

  return users.filter((user) => {
    return user.username === params[0] && user.password === params[2];
  });
}

module.exports = {
  query
};
