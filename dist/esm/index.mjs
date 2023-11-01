import { s as script } from './button-44208085.mjs';
export { s as BeeButton } from './button-44208085.mjs';
import { s as script$1 } from './textbox-7eb82083.mjs';
export { s as BeeTextbox } from './textbox-7eb82083.mjs';
import { BeeToast as script$2 } from './toast.mjs';
export { BeeToast } from './toast.mjs';
import { s as script$3 } from './context-menu-0e777cdd.mjs';
export { s as BeeContextMenu } from './context-menu-0e777cdd.mjs';
import 'vue';

var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: script,
    BeeTextbox: script$1,
    BeeToast: script$2,
    BeeContextMenu: script$3
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
