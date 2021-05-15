const users = [
  {
    id: 1,
    name: 'Sandro',
    email: 'sandro@email.com'
  },
  {
    id: 2,
    name: 'Diego',
    email: 'diego@rocketseat.com'
  }
];

module.exports = {
  Query: {
    users: () => users,
    user: (_, { id }) => users[id - 1]
  },

  Mutation: {
    createUser: (_, { name, email }) => users[users.push({ id: users.length + 1, name, email }) - 1]
  }
};
