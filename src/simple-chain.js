const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (
      position < 1 ||
      position > this.chain.length ||
      typeof position !== 'number'
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const links = this.chain.map((value) => `( ${value} )`);
    const result = links.join('~~');

    this.chain = [];

    return result;
  },
};

module.exports = {
  chainMaker,
};
