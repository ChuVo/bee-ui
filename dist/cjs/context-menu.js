'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var contextMenu = require('./context-menu-77670d5f.js');
require('vue');

var index = {
    install(Vue) {
        Vue.component(contextMenu.script.name, contextMenu.script);
    }
};

exports.BeeContextMenu = contextMenu.script;
exports["default"] = index;
