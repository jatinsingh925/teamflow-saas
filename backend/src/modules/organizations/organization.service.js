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

const getOrganizationById = async (
  organizationId
) => {
  return organizationRepository
    .findOrganizationWithOwner(
      organizationId
    );
};

module.exports = {
  createOrganization,
  getOrganizationById,
};