'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socketEvents = exports.socketEvents = {
    DEBUG_LOG: 'debugLog'
};

var eventType = exports.eventType = {
    LOG: 'LOG'
};

var colors = exports.colors = {
    RED: 'RED',
    PINK: 'PINK',
    PURPLE: 'PURPLE',
    DEEP_PURPLE: 'DEEP_PURPLE',
    INDIGO: 'INDIGO',
    BLUE: 'BLUE',
    CYAN: 'CYAN',
    TEAL: 'TEAL',
    GREEN: 'GREEN',
    LIME: 'LIME',
    YELLOW: 'YELLOW',
    ORANGE: 'ORANGE',
    GREY: 'GREY',
    WHITE: 'WHITE'
};

var defaultPort = exports.defaultPort = 4000;
var defaultProtocol = exports.defaultProtocol = 'http://';
var defaultPath = exports.defaultPath = 'localhost';

var userAgent = exports.userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36';