'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var beeButton = require('./bee-button-f3f62a32.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(beeButton.script.name, beeButton.script);
    }
};

exports.BeeButton = beeButton.script;
exports["default"] = index;
