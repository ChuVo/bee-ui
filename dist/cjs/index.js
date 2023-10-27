'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var beeButton = require('./bee-button-9e4aa367.js');
var beeTextbox = require('./bee-textbox-82974b4a.js');
require('vue');

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: beeButton.script,
    BeeTextbox: beeTextbox.script
});

const BeeUILibrary = {
    install(app) {
        // Auto import all components
        for (const componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

exports.BeeButton = beeButton.script;
exports.BeeTextbox = beeTextbox.script;
exports["default"] = BeeUILibrary;
