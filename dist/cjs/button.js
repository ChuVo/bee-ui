'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var button = require('./button-ec5b0e87.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(button.script.name, button.script);
    }
};

exports.BeeButton = button.script;
exports["default"] = index;
