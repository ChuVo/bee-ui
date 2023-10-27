'use strict';

var vue = require('vue');

var script = vue.defineComponent({
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

const _hoisted_1 = ["disabled"];
const _hoisted_2 = ["textContent"];
const _hoisted_3 = /*#__PURE__*/vue.createStaticVNode("<svg width=\"24\" height=\"24\" viewBox=\"0 0 55 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" transform=\"rotate(-45)\"><g id=\"Button\"><ellipse id=\"Ellipse 9\" cx=\"27.7029\" cy=\"27.3525\" rx=\"26.8674\" ry=\"26.8674\" transform=\"rotate(90 27.7029 27.3525)\" fill=\"#FFC800\"></ellipse><g id=\"Group 717\"><path id=\"Vector\" d=\"M38.7042 38.0758L16.6992 16.0708\" stroke=\"#151515\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path id=\"Rectangle 119\" d=\"M38.7061 17.9392V38.0757H18.5695\" stroke=\"#151515\" stroke-width=\"2\"></path></g></g></svg>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", vue.mergeProps(_ctx.$attrs, {
    class: _ctx.rootClasses,
    disabled: _ctx.computedDisabled
  }), [
    vue.createElementVNode("span", {
      textContent: vue.toDisplayString(_ctx.label)
    }, null, 8 /* PROPS */, _hoisted_2),
    _hoisted_3
  ], 16 /* FULL_PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/components/button/bee-button.vue";

exports.script = script;
