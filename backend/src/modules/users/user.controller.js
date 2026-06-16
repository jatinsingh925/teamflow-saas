// src/modules/users/user.controller.js

const userService = require("./user.service");

const createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(
      req.body
    );

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};