'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cookPayload;

var _shortid = require('shortid');

var _constants = require('../constants');

var _deviceDetectorJs = require('device-detector-js');

var _deviceDetectorJs2 = _interopRequireDefault(_deviceDetectorJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deviceDetector = new _deviceDetectorJs2.default();
var userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36';
var device = deviceDetector.parse(userAgent);

function cookPayload(data, color) {
    return {
        data: data,
        color: color,
        id: (0, _shortid.generate)(),
        type: _constants.eventType.LOG,
        time: Date.now(),
        device: device
    };
}