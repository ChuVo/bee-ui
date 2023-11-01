'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var button = require('./button-ec5b0e87.js');
var textbox = require('./textbox-d6994a34.js');
var toast = require('./toast.js');
var contextMenu = require('./context-menu-77670d5f.js');
require('vue');

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: button.script,
    BeeTextbox: textbox.script,
    BeeToast: toast.BeeToast,
    BeeContextMenu: contextMenu.script
});

const BeeUILibrary = {
    install(app) {
        // Auto import all components
        for (const componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

exports.BeeButton = button.script;
exports.BeeTextbox = textbox.script;
exports.BeeToast = toast.BeeToast;
exports.BeeContextMenu = contextMenu.script;
exports["default"] = BeeUILibrary;
