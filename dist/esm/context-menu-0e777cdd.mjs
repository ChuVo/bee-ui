import { defineComponent, openBlock, createElementBlock, normalizeStyle, createElementVNode, Fragment, renderList, normalizeClass, renderSlot } from 'vue';

var script = defineComponent({
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
  return (openBlock(), createElementBlock("div", {
    id: _ctx.id,
    class: "context-menu",
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.lurk && _ctx.lurk(...args))),
    style: normalizeStyle({ left: _ctx.left, top: _ctx.top, display: _ctx.display })
  }, [
    createElementVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.$slots), (name) => {
        return (openBlock(), createElementBlock(Fragment, null, [
          (name.startsWith('divider'))
            ? (openBlock(), createElementBlock("div", _hoisted_3))
            : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(["context-menu__item", name])
              }, [
                renderSlot(_ctx.$slots, name)
              ], 2 /* CLASS */))
        ], 64 /* STABLE_FRAGMENT */))
      }), 256 /* UNKEYED_FRAGMENT */))
    ])
  ], 12 /* STYLE, PROPS */, _hoisted_1))
}

script.render = render;
script.__file = "src/components/context-menu/context-menu.vue";

export { script as s };
