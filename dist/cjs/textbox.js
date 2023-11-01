'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var textbox = require('./textbox-d6994a34.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(textbox.script.name, textbox.script);
    }
};

exports.BeeTextbox = textbox.script;
exports["default"] = index;
