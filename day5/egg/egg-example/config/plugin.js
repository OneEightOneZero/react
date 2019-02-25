'use strict';

// config/plugin.js
const path = require('path');

/** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.mongo = {
  enable: true,
  path: path.join(__dirname, '../utils/mongod.js'),
};
