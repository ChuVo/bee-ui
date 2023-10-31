<template>
  <div class="bee-toasts">
    <transition-group
      appear
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutUp"
      :duration="{ enter: 400, leave: 400 }"
    >
      <div
        v-for="(toast, index) in toasts"
        :key="toast.name + '_' + index"
        class="bee-toasts__item"
        :class="toast.variant"
      >
        <div class="bee-toasts__close" @click="close(toast)" />
        <span v-text="toast.text" />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'BeeToast',
  computed: {
    toasts () {
      return this.$toast.toasts.value
    }
  },
  methods: {
    close (toast) {
      this.$toast.hide(toast)
    }
  }
}
</script>
