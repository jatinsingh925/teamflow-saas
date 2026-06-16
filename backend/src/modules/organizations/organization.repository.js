const Organization = require("./organization.model");

const createOrganization = async (organizationData) => {
  return Organization.create(organizationData);
};

const findOrganizationBySlug = async (slug) => {
  return Organization.findOne({ slug });
};

const findOrganizationById = async (organizationId) => {
  return Organization.findById(organizationId);
};
const findOrganizationWithOwner = async (
  organizationId
) => {
  return Organization.findById(
    organizationId
  ).populate(
    "ownerId",
    "firstName lastName email"
  );
};
module.exports = {
  createOrganization,
  findOrganizationBySlug,
  findOrganizationById,
  findOrganizationWithOwner,
};