'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _shortid = require('shortid');

var _constants = require('./constants');

var _socket = require('./socket');

function cookPayload(data, color) {
    return {
        data: data,
        color: color,
        id: (0, _shortid.generate)(),
        type: _constants.eventType.LOG,
        time: Date.now(),
        device: 'ios simulator 13.5'
    };
}

var log = function log() {
    for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
        data[_key] = arguments[_key];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data));
};

log.red = function () {
    for (var _len2 = arguments.length, data = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        data[_key2] = arguments[_key2];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.RED));
};

log.pink = function () {
    for (var _len3 = arguments.length, data = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        data[_key3] = arguments[_key3];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.PINK));
};

log.purple = function () {
    for (var _len4 = arguments.length, data = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        data[_key4] = arguments[_key4];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.PURPLE));
};

log.deep_purple = function () {
    for (var _len5 = arguments.length, data = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        data[_key5] = arguments[_key5];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.DEEP_PURPLE));
};

log.indigo = function () {
    for (var _len6 = arguments.length, data = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        data[_key6] = arguments[_key6];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.INDIGO));
};

log.blue = function () {
    for (var _len7 = arguments.length, data = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        data[_key7] = arguments[_key7];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.BLUE));
};

log.cyan = function () {
    for (var _len8 = arguments.length, data = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        data[_key8] = arguments[_key8];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.CYAN));
};

log.teal = function () {
    for (var _len9 = arguments.length, data = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        data[_key9] = arguments[_key9];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.TEAL));
};

log.green = function () {
    for (var _len10 = arguments.length, data = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        data[_key10] = arguments[_key10];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.GREEN));
};

log.lime = function () {
    for (var _len11 = arguments.length, data = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        data[_key11] = arguments[_key11];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.LIME));
};

log.yellow = function () {
    for (var _len12 = arguments.length, data = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        data[_key12] = arguments[_key12];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.YELLOW));
};

log.orange = function () {
    for (var _len13 = arguments.length, data = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        data[_key13] = arguments[_key13];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.ORANGE));
};

log.grey = function () {
    for (var _len14 = arguments.length, data = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        data[_key14] = arguments[_key14];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.GREY));
};

log.white = function () {
    for (var _len15 = arguments.length, data = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        data[_key15] = arguments[_key15];
    }

    _socket.socket.emit(_constants.socketEvents.DEBUG_LOG, cookPayload(data, _constants.colors.WHITE));
};

exports.default = log;