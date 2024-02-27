const fn1 = () => { console.log("exports.js 1"); }
const fn2 = () => { console.log("exports.js 2"); }

exports.fn1 = fn1;
exports.fn2 = fn2;

const firstName = "daniel";
const lastName = "kleiman";

module.exports = firstName;
exports.lastName = lastName;

/*
module.exports = {
  fn1,
  fn2
};

// also can write like
module.exports.fn1 = fn1;
module.exports.fn2 = fn2;

// we don't need to use the reserved word module

exports.fn1 = fn1;
exports.fn2 = fn2;

exports = { fn1, fn2 } // will not work
*/