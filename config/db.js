const users = [
  { id: 1, username: 'admin', password: '123456', name: 'Admin' }
];

exports.query = async (sql, params = []) => {
  const count = (sql.match(/\?/g) || []).length;
  if (count !== params.length) {
    throw new Error(`SQL parameter mismatch: expected ${count}, received ${params.length}`);
  }

  if (sql.includes('FROM users')) {
    return users.filter(u => u.username === params[0] && u.password === params[1]);
  }

  return [];
};
