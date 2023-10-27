'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var beeTextbox = require('./bee-textbox-82974b4a.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(beeTextbox.script.name, beeTextbox.script);
    }
};

exports.BeeTextbox = beeTextbox.script;
exports["default"] = index;
