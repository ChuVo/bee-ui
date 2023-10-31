'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = {
  name: 'BeeToast',

  props: {
    /**
     * Opacity of toast
     * @values from 0 to 1
     */
    opacity: {
      type: Number,
      default: 1
    }
  },
  computed: {
    toasts () {
      return this.$toast.toasts.value
    }
  },
  methods: {
    close (toast) {
      this.$toast.hide(toast);
    }
  }
};

const _hoisted_1 = { class: "bee-toasts" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["textContent"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createVNode(vue.TransitionGroup, {
      appear: "",
      "enter-active-class": "animated fadeInRight",
      "leave-active-class": "animated fadeOutUp",
      duration: { enter: 400, leave: 400 }
    }, {
      default: vue.withCtx(() => [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.toasts, (toast, index) => {
          return (vue.openBlock(), vue.createElementBlock("div", {
            key: toast.name + '_' + index,
            class: vue.normalizeClass(["bee-toasts__item", toast.variant]),
            style: vue.normalizeStyle({ opacity: $props.opacity })
          }, [
            vue.createElementVNode("div", {
              class: "bee-toasts__close",
              onClick: $event => ($options.close(toast))
            }, null, 8 /* PROPS */, _hoisted_2),
            vue.createElementVNode("span", {
              textContent: vue.toDisplayString(toast.text)
            }, null, 8 /* PROPS */, _hoisted_3)
          ], 6 /* CLASS, STYLE */))
        }), 128 /* KEYED_FRAGMENT */))
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script.render = render;
script.__file = "src/components/toast/toast.vue";

const dataToast = vue.ref([]);
const model = {
    text: '',
    lifetime: 1500
};
let index = 0;
const api = {
    toasts: vue.ref(dataToast.value),
    show(toast) {
        toast = Object.assign({}, model, {
            index: index++
        }, toast);
        dataToast.value.push(toast);
        if (toast.lifetime) {
            setTimeout(() => {
                this.hide(toast);
            }, toast.lifetime);
        }
        return dataToast;
    },
    hide(toast) {
        if (!toast) {
            return dataToast.value.splice(0, 1);
        }
        const index = dataToast.value.findIndex(t => t.index === toast.index);
        if (index >= 0) {
            return dataToast.value.splice(index, 1);
        }
    }
};
var index$1 = {
    install(Vue, options) {
        Vue.component(script.name, script);
        options = Object.assign(model, options);
        options.name = options.name || 'toast';
        /**
         * variant of toast
         * @values susses, error, warning
         */
        options.variant = options.variant || '';
        Vue.component(options.name);
        Vue.config.globalProperties.$toast = api;
    }
};

exports.BeeToast = script;
exports["default"] = index$1;
