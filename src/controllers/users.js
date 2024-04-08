const User = require("../models/user");

const getUsers = (request, response) => {
  //Get all users
};

const getUser = (request, response) => {
  const { user_id } = request.params;
  response.status(200);
  response.send(`User with id: ${user_id}`);
};

const createUser = (request, response) => {
  //Create new user
  // response.status(201);
  // response.send(request.body);
  return User.create({ ...request.body }).then((user) => {
    response.status(201).send(user);
  });
};

const updateUser = (request, response) => {
  //Update user
};

const deleteUser = (request, response) => {
  //Delete user
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
