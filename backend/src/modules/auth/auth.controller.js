const authService = require("./auth.service");

const register = async (
  req,
  res,
  next
) => {
  try {
    const result =
      await authService.register(req.body);

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
};