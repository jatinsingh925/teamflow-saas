// src/modules/users/user.service.js

const userRepository = require("./user.repository");

const createUser = async (userData) => {
  const existingUser =
    await userRepository.findUserByEmail(
      userData.email
    );

  if (existingUser) {
    throw new Error("Email already exists");
  }

  return userRepository.createUser(userData);
};

module.exports = {
  createUser,
};