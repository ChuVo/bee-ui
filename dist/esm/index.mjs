import { s as script } from './bee-button-8bf1f9d3.mjs';
export { s as BeeButton } from './bee-button-8bf1f9d3.mjs';
import { s as script$1 } from './bee-textbox-28eebc83.mjs';
export { s as BeeTextbox } from './bee-textbox-28eebc83.mjs';
import 'vue';

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: script,
    BeeTextbox: script$1
});

const BeeUILibrary = {
    install(app) {
        // Auto import all components
        for (const componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

export { BeeUILibrary as default };
