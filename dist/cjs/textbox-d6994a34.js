'use strict';

var vue = require('vue');

var script = vue.defineComponent({
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
  return (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
    class: _ctx.rootClasses,
    type: _ctx.type,
    readonly: _ctx.readonly,
    placeholder: _ctx.placeholder,
    value: _ctx.$attrs.modelValue,
    onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.update && _ctx.update(...args))),
    onBlur: _cache[1] || (_cache[1] = $event => (this.$emit('blur'))),
    onKeyup: _cache[2] || (_cache[2] = vue.withKeys((...args) => (_ctx.onClickEnter && _ctx.onClickEnter(...args)), ["enter"]))
  }, _ctx.$attrs), null, 16 /* FULL_PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/components/textbox/textbox.vue";

exports.script = script;
