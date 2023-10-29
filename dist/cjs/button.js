'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var beeButton = require('./bee-button-7d7c9863.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(beeButton.script.name, beeButton.script);
    }
};

exports.BeeButton = beeButton.script;
exports["default"] = index;
