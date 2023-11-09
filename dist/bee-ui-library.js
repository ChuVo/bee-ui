/*! BeeUI Library v0.0.7 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["Bee-ui-library"] = {}, global.Vue));
})(this, (function (exports, vue) { 'use strict';

  var script$3 = vue.defineComponent({
      name: 'BeeButton',
      inheritAttrs: false,
      props: {
          label: {
              type: String,
              default: 'BeeButton'
          },
          /**
           * disabled status
           * @values true, false
           */
          disabled: {
              type: Boolean,
          },
          color: {
              type: String,
              default: 'white',
              validator: (value) => {
                  return [
                      'white',
                      'yellow',
                      'gray'
                  ].indexOf(value) >= 0;
              }
          },
          /**
           * variant of button
           * @values button, stroke
           */
          variant: {
              type: String,
              default: 'outlined',
              validator: (value) => {
                  return [
                      'outlined',
                      'stroke'
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
          },
          /**
           * TextAlign on button
           * @values left, center, right
           */
          textAlign: {
              type: String,
              default: 'center',
              validator: (value) => {
                  return [
                      'left',
                      'center',
                      'right'
                  ].indexOf(value) >= 0;
              }
          },
          /**
           * icon status
           * @values true, false
           */
          icon: {
              default: false,
              type: Boolean,
          },
      },
      computed: {
          rootClasses() {
              return [
                  'bee-button',
                  'bee-button--' + this.variant,
                  'bee-button--' + this.color,
                  'bee-button--' + this.size,
                  'bee-button--' + this.textAlign,
                  this.disabled ? 'disabled' : ''
              ];
          },
          computedDisabled() {
              if (this.disabled)
                  return true;
              return null;
          }
      }
  });

  const _hoisted_1$3 = ["disabled"];
  const _hoisted_2$2 = ["textContent"];
  const _hoisted_3$2 = {
    key: 1,
    width: "24",
    height: "24",
    viewBox: "0 0 55 55",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    transform: "rotate(-45)"
  };
  const _hoisted_4 = /*#__PURE__*/vue.createStaticVNode("<g id=\"Button\"><ellipse id=\"Ellipse 9\" cx=\"27.7029\" cy=\"27.3525\" rx=\"26.8674\" ry=\"26.8674\" transform=\"rotate(90 27.7029 27.3525)\" fill=\"#FFC800\"></ellipse><g id=\"Group 717\"><path id=\"Vector\" d=\"M38.7042 38.0758L16.6992 16.0708\" stroke=\"#151515\" stroke-width=\"2\" stroke-linejoin=\"round\"></path><path id=\"Rectangle 119\" d=\"M38.7061 17.9392V38.0757H18.5695\" stroke=\"#151515\" stroke-width=\"2\"></path></g></g>", 1);
  const _hoisted_5 = [
    _hoisted_4
  ];

  function render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("button", vue.mergeProps(_ctx.$attrs, {
      class: _ctx.rootClasses,
      disabled: _ctx.computedDisabled
    }), [
      (_ctx.label.length)
        ? (vue.openBlock(), vue.createElementBlock("span", {
            key: 0,
            textContent: vue.toDisplayString(_ctx.label)
          }, null, 8 /* PROPS */, _hoisted_2$2))
        : vue.createCommentVNode("v-if", true),
      (_ctx.icon)
        ? (vue.openBlock(), vue.createElementBlock("svg", _hoisted_3$2, [..._hoisted_5]))
        : vue.createCommentVNode("v-if", true)
    ], 16 /* FULL_PROPS */, _hoisted_1$3))
  }

  script$3.render = render$3;
  script$3.__file = "src/components/button/button.vue";

  var script$2 = vue.defineComponent({
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

  const _hoisted_1$2 = ["type", "readonly", "placeholder", "value"];

  function render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("input", vue.mergeProps({
      class: _ctx.rootClasses,
      type: _ctx.type,
      readonly: _ctx.readonly,
      placeholder: _ctx.placeholder,
      value: _ctx.$attrs.modelValue,
      onInput: _cache[0] || (_cache[0] = (...args) => (_ctx.update && _ctx.update(...args))),
      onBlur: _cache[1] || (_cache[1] = $event => (this.$emit('blur'))),
      onKeyup: _cache[2] || (_cache[2] = vue.withKeys((...args) => (_ctx.onClickEnter && _ctx.onClickEnter(...args)), ["enter"]))
    }, _ctx.$attrs), null, 16 /* FULL_PROPS */, _hoisted_1$2))
  }

  script$2.render = render$2;
  script$2.__file = "src/components/textbox/textbox.vue";

  var script$1 = {
    name: 'BeeToast',
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

  const _hoisted_1$1 = { class: "bee-toasts" };
  const _hoisted_2$1 = ["onClick"];
  const _hoisted_3$1 = ["textContent"];

  function render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
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
              class: vue.normalizeClass(["bee-toasts__item", toast.variant])
            }, [
              vue.createElementVNode("div", {
                class: "bee-toasts__close",
                onClick: $event => ($options.close(toast))
              }, null, 8 /* PROPS */, _hoisted_2$1),
              vue.createElementVNode("span", {
                textContent: vue.toDisplayString(toast.text)
              }, null, 8 /* PROPS */, _hoisted_3$1)
            ], 2 /* CLASS */))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      })
    ]))
  }

  script$1.render = render$1;
  script$1.__file = "src/components/toast/toast.vue";

  const dataToast = vue.ref([]);
  const model = {
      text: '',
      lifetime: 1500
  };
  let index = 0;
  ({
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
  });

  var script = vue.defineComponent({
      name: "ContextMenu",
      props: {
          id: {
              required: true,
              type: String
          }
      },
      data: () => ({
          left: '0',
          top: '0',
          visible: false,
          parent: Object,
          direction: 'down'
      }),
      mounted() {
          const elem = document.getElementById(this.id);
          this.parent = elem.parentNode;
          elem.parentNode.addEventListener('contextmenu', this.show);
          document.addEventListener('click', this.lurk);
      },
      unmounted() {
          const elem = document.getElementById(this.id);
          document.removeEventListener('click', this.lurk);
          if (!elem)
              return;
          elem.parentNode.removeEventListener('contextmenu', this.show);
      },
      methods: {
          show(event) {
              if (this.visible) {
                  return;
              }
              let el, offsetLeft = 0, offsetTop = 0;
              // Looking for closest relatively positioned element
              for (el = this.parent; el && getComputedStyle(el).position === 'static'; el = el.parentElement) { /* foo */ }
              if (el) {
                  const rect = el.getBoundingClientRect();
                  offsetLeft = rect.left;
                  offsetTop = rect.top;
              }
              this.visible = true;
              this.left = `${event.clientX - offsetLeft}px`;
              this.top = `${event.clientY - offsetTop}px`;
              event.preventDefault();
              this.$emit('show', event);
              this.$nextTick(() => {
                  this.fitMenu();
              });
          },
          hide() {
              this.visible = false;
          },
          fitMenu() {
              const body = document.body.getBoundingClientRect(), items = this.$el.firstChild.getBoundingClientRect();
              if (items.right > body.right) {
                  let left = this.left.split('px')[0];
                  this.left = (Number(left) - 200) + 'px';
              }
              if (body.height < items.bottom) {
                  let top = this.top.split('px')[0];
                  this.top = (Number(top) - 200) + 'px';
              }
          },
          lurk(e) {
              if (!this.visible)
                  return;
              const className = e.target.className;
              if (!className) {
                  this.hide();
              }
              else if (className.startsWith('context-menu')) {
                  return;
              }
              else {
                  this.hide();
              }
          }
      },
      computed: {
          display() {
              return this.visible ? 'block' : 'none';
          }
      }
  });

  const _hoisted_1 = ["id"];
  const _hoisted_2 = { class: "context-menu__items" };
  const _hoisted_3 = {
    key: 0,
    class: "context-menu__divider"
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return (vue.openBlock(), vue.createElementBlock("div", {
      id: _ctx.id,
      class: "context-menu",
      onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.lurk && _ctx.lurk(...args))),
      style: vue.normalizeStyle({ left: _ctx.left, top: _ctx.top, display: _ctx.display })
    }, [
      vue.createElementVNode("div", _hoisted_2, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(Object.keys(_ctx.$slots), (name) => {
          return (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
            (name.startsWith('divider'))
              ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_3))
              : (vue.openBlock(), vue.createElementBlock("div", {
                  key: 1,
                  class: vue.normalizeClass(["context-menu__item", name])
                }, [
                  vue.renderSlot(_ctx.$slots, name)
                ], 2 /* CLASS */))
          ], 64 /* STABLE_FRAGMENT */))
        }), 256 /* UNKEYED_FRAGMENT */))
      ])
    ], 12 /* STYLE, PROPS */, _hoisted_1))
  }

  script.render = render;
  script.__file = "src/components/context-menu/context-menu.vue";

  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BeeButton: script$3,
    BeeTextbox: script$2,
    BeeToast: script$1,
    BeeContextMenu: script
  });

  const BeeUILibrary = {
      install(app) {
          // Auto import all components
          for (const componentKey in components) {
              app.use(components[componentKey]);
          }
      }
  };

  exports.BeeButton = script$3;
  exports.BeeContextMenu = script;
  exports.BeeTextbox = script$2;
  exports.BeeToast = script$1;
  exports["default"] = BeeUILibrary;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
