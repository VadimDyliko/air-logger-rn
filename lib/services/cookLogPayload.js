'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cookLogPayload;

var _deviceDetectorJs = require('device-detector-js');

var _deviceDetectorJs2 = _interopRequireDefault(_deviceDetectorJs);

var _shortid = require('shortid');

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceDetector = new _deviceDetectorJs2.default();
var device = deviceDetector.parse(_constants.userAgent);

function cookLogPayload(data, color) {
    return {
        data: data,
        color: color,
        id: (0, _shortid.generate)(),
        type: _constants.eventType.LOG,
        time: Date.now(),
        device: device
    };
}