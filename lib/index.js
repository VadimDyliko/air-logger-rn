'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = exports.log = undefined;

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _socket = require('./socket');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = exports.log = _logger2.default;
var init = exports.init = _socket2.default;