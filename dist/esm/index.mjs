import { s as script } from './bee-button-c2b59751.mjs';
export { s as BeeButton } from './bee-button-c2b59751.mjs';
import { s as script$1 } from './bee-textbox-28eebc83.mjs';
export { s as BeeTextbox } from './bee-textbox-28eebc83.mjs';
import index from './toast.mjs';
export { default as Toast } from './toast.mjs';
import 'vue';

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: script,
    BeeTextbox: script$1,
    Toast: index
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
