<template>
  <div :id="id" class="bee-context-menu" @click="lurk" :style="{ left, top, display }">
    <div class="bee-context-menu__items">
      <template v-for="name in Object.keys($slots)">
        <div v-if="name.startsWith('divider')" class="bee-context-menu__divider"/>
        <div
          v-else
          class="bee-context-menu__item"
          :class="name"
          @click="(event) => onClick(event, name)"
        >
          <slot :name="name"></slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import any = jasmine.any;

export default defineComponent({
  name: "ContextMenu",
  props: {
    id: {
      required: true,
      type: String
    },
    execute: {
      require: true,
      type: Function
    }
  },
  data: () => ({
    left: '0',
    top: '0',
    visible: false,
    parent: null,
    direction: 'down'
  }),
  mounted() {
    const elem: any = document.getElementById(this.id)
    this.parent = elem.parentNode
    elem.parentNode.addEventListener('contextmenu', this.show)
    document.addEventListener('click', this.lurk)
  },
  unmounted() {
    const elem: any = document.getElementById(this.id)
    if (!elem) return

    elem.parentNode.removeEventListener('contextmenu', this.show)
    document.removeEventListener('click', this.lurk)
  },
  methods: {
    show(event: any) {
      if (this.visible) {
        return
      }

      let el: any, offsetLeft = 0, offsetTop = 0

      // Looking for closest relatively positioned element
      for (el = this.parent; el && getComputedStyle(el).position === 'static'; el = el.parentElement) { /* foo */
      }
      if (el) {
        const rect = el.getBoundingClientRect()
        offsetLeft = rect.left
        offsetTop = rect.top
      }

      this.visible = true
      this.left = `${event.clientX - offsetLeft}px`
      this.top = `${event.clientY - offsetTop}px`
      event.preventDefault()
      this.$emit('show', event)

      this.$nextTick(() => {
        this.fitMenu()
      })
    },
    hide() {
      if (this.visible) {
        this.$emit('hide')
      }

      this.visible = false
    },
    fitMenu() {
      const body = document.body.getBoundingClientRect(),
        items = this.$el.firstChild.getBoundingClientRect()

      if (items.right > body.right) {
        let left: any = this.left.split('px')
        left = left[0] - 200
        this.left = left + 'px'
      }
      if (body.height < items.bottom) {
        let top: any = this.top.split('px')
        top = top[0] - 200
        this.top = top + 'px'
      }
    },
    lurk(e: any) {
      if (!this.visible) return

      const className = e.target.className
      if (!className) {
        this.hide()
      } else if (className.startsWith('context-menu')) {
        return
      } else {
        this.hide()
      }
    },
    onClick(event: any, command: string) {
      if (!this.execute) return;
      this.execute({event, command})
      this.hide()
    }
  },
  computed: {
    display() {
      return this.visible ? 'block' : 'none'
    }
  }
})
</script>
