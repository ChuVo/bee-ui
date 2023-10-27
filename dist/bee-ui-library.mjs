/*! BeeUI Library v0.0.1 */
import { defineComponent, openBlock, createElementBlock, mergeProps, createElementVNode, toDisplayString, createStaticVNode, withKeys } from 'vue';

var script$1 = defineComponent({
    name: 'BeeButton',
    inheritAttrs: false,
    props: {
        /**
         * label
         * @values Ok
         */
        label: {
            type: String,
            default: 'Ok'
        },
        /**
         * disabled status
         * @values true, false
         */
        disabled: {
            type: Boolean,
        },
        /**
         * Color of button
         * @values primary, secondary
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return [
                    'primary',
                    'secondary'
                ].indexOf(value) >= 0;
            }
        },
        /**
         * type of button
         * @values button, submit
         */
        type: {
            type: String,
            default: 'button',
            validator: (value) => {
                return [
                    'button',
                    'submit',
                    'reset'
                ].indexOf(value) >= 0;
            }
        },
        /**
         * Size of button
         * @values small, big
         */
        size: {
            type: String,
            default: 'normal',
            validator: (value) => {
                return [
                    'small',
                    'normal',
                    'big'
                ].indexOf(value) >= 0;
            }
        }
    },
    computed: {
        rootClasses() {
            return [
                'bee-button',
                'bee-button--' + this.size,
                'bee-button--' + this.variant,
            ];
        },
        computedDisabled() {
            if (this.disabled)
                return true;
            return null;
        }
    }
});

const _hoisted_1$1 = ["disabled"];
const _hoisted_2 = ["textContent"];
const _hoisted_3 = /*#__PURE__*/createStaticVNode("<svg width=\"24\" height=\"24\" viewBox=\"0 0 55 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" transform=\"rotate(-45)\"><g id=\"Button\"><ellipse id=\"Ellipse 9\" cx=\"27.7029\" cy=\"27.3525\" rx=\"26.8674\" ry=\"26.8674\" transform=\"rotate(90 27.7029 27.3525)\" fill=\"#FFC800\"></ellipse><g id=\"Group 717\"><path id=\"Vector\" d=\"M38.7042 38.0758L16.6992 16.0708\" stroke=\"#151515\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path id=\"Rectangle 119\" d=\"M38.7061 17.9392V38.0757H18.5695\" stroke=\"#151515\" stroke-width=\"2\"></path></g></g></svg>", 1);

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", mergeProps(_ctx.$attrs, {
    class: _ctx.rootClasses,
    disabled: _ctx.computedDisabled
  }), [
    createElementVNode("span", {
      textContent: toDisplayString(_ctx.label)
    }, null, 8 /* PROPS */, _hoisted_2),
    _hoisted_3
  ], 16 /* FULL_PROPS */, _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/components/button/bee-button.vue";

var script = defineComponent({
    name: 'BeeTextbox',
    inheritAttrs: false,
    props: {
        /**
         * name
         */
        name: {
            type: String,
            required: true
        },
        /**
         * error
         * @values true, false
         */
        error: {
            type: Boolean,
            default: false
        },
        /**
         * label
         */
        label: {
            type: String,
            default: 'text-box'
        },
        /**
         * readonly status
         * @values true, false
         */
        readonly: {
            default: false,
            type: Boolean,
        },
        /**
         * Color of button
         * @values primary, secondary
         */
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return [
                    'primary',
                    'secondary'
                ].indexOf(value) >= 0;
            }
        },
        /**
         * type of input
         * @values text, number
         */
        type: {
            type: String,
            default: 'text',
            validator: (value) => {
                return [
                    'text',
                    'number'
                ].indexOf(value) >= 0;
            }
        },
        /**
         * Size of button
         * @values small, big
         */
        size: {
            type: String,
            default: 'normal',
            validator: (value) => {
                return [
                    'small',
                    'normal',
                    'big'
                ].indexOf(value) >= 0;
            }
        },
        /**
         * placeholder of input
         * @values string
         */
        placeholder: {
            type: String,
            default: ''
        },
        /**
         * clickEnter
         * Callback by clicking Enter
         */
        clickEnter: {
            type: Function
        }
    },
    computed: {
        rootClasses() {
            return [
                'bee-textbox',
                'bee-textbox--' + this.size,
                this.error ? 'bee-textbox--error' : ''
            ];
        }
    },
    methods: {
        update(event) {
            this.$emit('update:modelValue', event.target.value);
        },
        onClickEnter(event) {
            if (this.clickEnter) {
                this.clickEnter(event);
            }
        }
    }
});

const _hoisted_1 = ["type", "readonly", "placeholder", "value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("input", mergeProps({
    class: _ctx.rootClasses,
    type: _ctx.type,
    readonly: _ctx.readonly,
    placeholder: _ctx.placeholder,
    value: _ctx.$attrs.modelValue,
    onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.update && _ctx.update(...args))),
    onBlur: _cache[1] || (_cache[1] = $event => (this.$emit('blur'))),
    onKeyup: _cache[2] || (_cache[2] = withKeys((...args) => (_ctx.onClickEnter && _ctx.onClickEnter(...args)), ["enter"]))
  }, _ctx.$attrs), null, 16 /* FULL_PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/components/textbox/bee-textbox.vue";

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BeeButton: script$1,
  BeeTextbox: script
});

const BeeUILibrary = {
    install(app) {
        // Auto import all components
        for (const componentKey in components) {
            app.use(components[componentKey]);
        }
    }
};

export { script$1 as BeeButton, script as BeeTextbox, BeeUILibrary as default };
