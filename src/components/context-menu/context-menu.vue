<template>
  <div :id="id" class="context-menu" @click="lurk" :style="{ left, top, display }">
    <div class="context-menu__items">
      <template v-for="name in Object.keys($slots)">
        <div v-if="name.startsWith('divider')" class="context-menu__divider" />
        <div v-else class="context-menu__item" :class="name" >
          <slot :name="name"></slot>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
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
  mounted () {
    const elem: any = document.getElementById(this.id)
    this.parent = elem.parentNode
    elem.parentNode.addEventListener('contextmenu', this.show)
    document.addEventListener('click', this.lurk)
  },
  unmounted () {
    const elem: any = document.getElementById(this.id)
    document.removeEventListener('click', this.lurk)
    if (!elem) return
    elem.parentNode.removeEventListener('contextmenu', this.show)
  },
  methods: {
    show (event: any) {
      if (this.visible) {
        return
      }

      let el: any, offsetLeft = 0, offsetTop = 0

      // Looking for closest relatively positioned element
      for (el = this.parent; el && getComputedStyle(el).position === 'static'; el = el.parentElement) { /* foo */ }
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
    hide () {
      this.visible = false
    },
    fitMenu () {
      const body = document.body.getBoundingClientRect(),
          items = this.$el.firstChild.getBoundingClientRect()

      if (items.right > body.right) {
        let left = this.left.split('px')[0]
        this.left = (Number(left) - 200) + 'px'
      }
      if (body.height < items.bottom) {
        let top = this.top.split('px')[0]
        this.top = (Number(top) - 200) + 'px'
      }
    },
    lurk (e: any) {
      if (!this.visible) return

      const className = e.target.className
      if (!className) {
        this.hide()
      } else if (className.startsWith('context-menu') ) {
        return
      } else {
        this.hide()
      }
    }
  },
  computed: {
    display () {
      return this.visible ? 'block' : 'none'
    }
  }
})
</script>
