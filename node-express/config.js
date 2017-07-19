'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  // address of mongodb
  db: process.env.MONGOURI || 'mongodb://localhost:27017/test',
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  // environment
  env: process.env.NODE_ENV || 'development',
  // port on which to listen
  port: process.env.PORT || 5000,
  // path to root directory of this app
  root: _path2.default.normalize(__dirname)
};