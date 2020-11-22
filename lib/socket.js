'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.socket = undefined;
exports.default = socketInit;

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var socket = exports.socket = null;
function socketInit() {
    var port = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultPort;

    if (typeof port !== 'number') return;
    exports.socket = socket = (0, _socket2.default)('' + _constants.defaultProtocol + _constants.defaultPath + ':' + port);
}