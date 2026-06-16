// src/modules/users/user.repository.js

const User = require("./user.model");

const createUser = async (userData) => {
  return User.create(userData);
};

const findUserByEmail = async (email) => {
  return User.findOne({ email });
};

const findUserById = async (userId) => {
  return User.findById(userId);
};

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
};