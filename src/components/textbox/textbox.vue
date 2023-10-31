<template>
  <input
    :class="rootClasses"
    :type="type"
    :readonly="readonly"
    :placeholder="placeholder"
    :value="$attrs.modelValue"
    @input="update"
    @blur="this.$emit('blur')"
    @keyup.enter="onClickEnter"
    v-bind="$attrs"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
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
      validator: (value: string) => {
        return [
          'primary',
          'secondary'
        ].indexOf(value) >= 0
      }
    },
    /**
     * type of input
     * @values text, number
     */
    type: {
      type: String,
      default: 'text',
      validator: (value: string) => {
        return [
          'text',
          'number'
        ].indexOf(value) >= 0
      }
    },
    /**
     * Size of button
     * @values small, big
     */
    size: {
      type: String,
      default: 'normal',
      validator: (value: string) => {
        return [
          'small',
          'normal',
          'big'
        ].indexOf(value) >= 0
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
      ]
    }
  },
  methods: {
    update (event: any) {
      this.$emit('update:modelValue', event.target.value)
    },

    onClickEnter (event: any) {
      if (this.clickEnter) {
        this.clickEnter(event)
      }
    }
  }
})
</script>
