const bcrypt = require("bcryptjs");

const userRepository = require("../users/user.repository");
const organizationRepository = require("../organizations/organization.repository");

const { generateToken } = require("./auth.utils");

const register = async (registerData) => {
  const {
    firstName,
    lastName,
    email,
    password,
    organizationName,
  } = registerData;

  const existingUser =
    await userRepository.findUserByEmail(email);

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(
    password,
    10
  );

  const user = await userRepository.createUser({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  });

  const organization =
    await organizationRepository.createOrganization({
      name: organizationName,
      slug: organizationName
        .toLowerCase()
        .replace(/\s+/g, "-"),
      ownerId: user._id,
    });

  const token = generateToken({
    userId: user._id,
    email: user.email,
  });
// Remove password before sending response
const userResponse = user.toObject();
delete userResponse.password;

  return {
  token,
  user: userResponse,
  organization,
};
};

module.exports = {
  register,
};