const users = [
  { id: 1, username: 'admin', password: '123456', name: 'Admin' }
];

exports.query = async (sql, params = []) => {
  const placeholderCount = (sql.match(/\?/g) || []).length;

  if (placeholderCount !== params.length) {
    throw new Error(
      `SQL parameter mismatch: expected ${placeholderCount}, received ${params.length}`
    );
  }

  if (sql.includes('FROM users')) {
    return users.filter(user => (
      user.username === params[0] &&
      user.password === params[1]
    ));
  }

  return [];
};
