const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let isPreviousDiscarded = false;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      if (i + 1 < arr.length) {
        i += 1;
        isPreviousDiscarded = true;
      }
      continue;
    }

    if (arr[i] === '--discard-prev') {
      if (!isPreviousDiscarded && result.length - 1 >= 0) {
        result.pop();
      }
      isPreviousDiscarded = false;
      continue;
    }

    if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
      isPreviousDiscarded = false;
      continue;
    }

    if (arr[i] === '--double-prev') {
      if (!isPreviousDiscarded && result.length - 1 >= 0) {
        result.push(result[result.length - 1]);
      }
      isPreviousDiscarded = false;
      continue;
    }

    result.push(arr[i]);
    isPreviousDiscarded = false;
  }

  return result;
}

module.exports = {
  transform
};
