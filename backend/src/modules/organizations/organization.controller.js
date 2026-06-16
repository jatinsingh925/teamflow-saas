const organizationService = require(
  "./organization.service"
);

const createOrganization = async (
  req,
  res,
  next
) => {
  try {
    const organization =
      await organizationService.createOrganization(
        req.body
      );

    return res.status(201).json({
      success: true,
      data: organization,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createOrganization,
};