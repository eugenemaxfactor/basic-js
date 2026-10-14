const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const parts = email.split('@');
  const length = parts.length;
  const domain = parts[length - 1];
  return domain;
}

module.exports = {
  getEmailDomain
};
