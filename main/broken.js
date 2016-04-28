module.exports = {
  answer() {
    return 42;
  },
  /* istanbul ignore next */
  ignoreAboveShorthand(name) {
    return `Hello ${name}`;
  },
  /* istanbul ignore next */ignoreInFrontShorthand(name) {
    return `Hello ${name}`;
  },
  /* istanbul ignore next */
  ignoreAboveLongHand: (name) => {
    /* istanbul ignore next */
    return `Hello ${name}`;
  },
  /* istanbul ignore next */ignoreInFrontLongHand: (name) => {
    /* istanbul ignore next */
    return `Hello ${name}`;
  }
};
