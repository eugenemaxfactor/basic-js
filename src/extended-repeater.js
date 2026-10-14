const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', {
 *   repeatTimes: 3,
 *   separator: '**',
 *   addition: 'PLUS',
 *   additionRepeatTimes: 3,
 *   additionSeparator: '00'
 * })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? '+';
  const addition = options.addition === undefined
    ? ''
    : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? '|';

  let additionResult = '';
  for (let i = 0; i < additionRepeatTimes; i += 1) {
    additionResult += addition;

    if (i < additionRepeatTimes - 1) {
      additionResult += additionSeparator;
    }
  }

  const block = str + additionResult;
  let result = '';

  for (let i = 0; i < repeatTimes; i += 1) {
    result += block;

    if (i < repeatTimes - 1) {
      result += separator;
    }
  }

  return result;
}

module.exports = {
  repeater
};
