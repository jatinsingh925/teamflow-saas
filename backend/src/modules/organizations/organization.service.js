const organizationRepository = require("./organization.repository");

const createOrganization = async (organizationData) => {
  const existingOrganization =
    await organizationRepository.findOrganizationBySlug(
      organizationData.slug
    );

  if (existingOrganization) {
    throw new Error("Organization slug already exists");
  }

  const organization =
    await organizationRepository.createOrganization(
      organizationData
    );

  return organization;
};

module.exports = {
  createOrganization,
};