const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const parts = n.split('-');
  if (parts.length !== 6) {
    return false;
  }

  const validChars = '0123456789ABCDEF';

  for (let i = 0; i < parts.length; i += 1) {
    if (parts[i].length !== 2) {
      return false;
    }
    for (let j = 0; j < parts[i].length; j += 1) {
      if (!validChars.includes(parts[i][j])) {
        return false;
      }
    }
    return true;
  }
}

module.exports = {
  isMAC48Address
};
