<template>
  <div class="page">
    <h1>Bee-ui-library <strong v-text="'buttons'" /></h1>

    <h2>Small Buttons</h2>
    <div class="row">
      <BeeButton
          v-for="button in smallBtnConf"
          :color="button.color"
          :icon="button.icon"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in smallBtnConf"
          :color="button.color"
          :icon="false"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <h2>Normal Buttons</h2>
    <div class="row">
      <BeeButton
          v-for="button in normalBtnConf"
          :color="button.color"
          :icon="true"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in normalBtnConf"
          :color="button.color"
          :icon="false"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <div class="row">
      <BeeButton
          v-for="button in disabledBtnConf"
          :color="button.color"
          :disabled="true"
          :icon="button.icon"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <h2>Stroke Buttons</h2>
    <div class="row">
      <BeeButton
          v-for="button in strokeBtnConf"
          :color="button.color"
          :disabled="true"
          :icon="true"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in strokeBtnConf"
          :color="button.color"
          :disabled="false"
          :icon="false"
          :label="'normal ' + button.color + ' ' + button.textAlign"
          :textAlign="button.textAlign"
          :size="'normal'"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${'normal ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in strokeBtnConf"
          :label="button.size + ' ' + button.color + ' ' + button.textAlign"
          :disabled="true"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <h2>Icon Buttons</h2>
    <div class="row">
      <BeeButton
          v-for="button in iconBtnConf"
          :color="button.color"
          :disabled="true"
          :icon="button.icon"
          :label="''"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.size + ' ' + button.color + ' ' + button.textAlign}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <BeeContextMenu id="context-menu" :execute="(event) => onExecute(event)">
      <template v-slot:add-folder>Создать папку</template>
      <template v-slot:divider />
      <template v-slot:edit>Переименовать</template>
    </BeeContextMenu>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {BeeButton, BeeContextMenu, BeeTextbox} from "@/components";

const smallBtnConf = [
  {
    color: 'white',
    icon: true,
    size: 'small',
    textAlign: 'left',
    toastTime: 1500,
    variant: 'outlined',
  },
  {
    variant: 'outlined',
    icon: true,
    textAlign: 'center',
    size: 'small',
    color: 'yellow',
    toastTime: 2000
  },
  {
    variant: 'outlined',
    icon: true,
    textAlign: 'right',
    size: 'small',
    color: 'gray',
    toastTime: 2500
  }
]

const normalBtnConf = [
  {
    color: 'white',
    icon: true,
    size: 'normal',
    textAlign: 'left',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'yellow',
    icon: false,
    size: 'normal',
    textAlign: 'center',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'gray',
    icon: false,
    size: 'normal',
    textAlign: 'right',
    toastTime: 1000,
    variant: 'outlined',
  }
]

const disabledBtnConf = [
  {
    color: 'yellow',
    icon: false,
    size: 'normal',
    textAlign: 'center',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'white',
    icon: false,
    size: 'small',
    textAlign: 'left',
    toastTime: 1000,
    variant: 'outlined',
  }
]

const strokeBtnConf = [
  {
    color: 'white',
    size: 'small',
    textAlign: 'center',
    toastTime: 1500,
    variant: 'stroke',
  },
  {
    color: 'yellow',
    size: 'small',
    textAlign: 'left',
    toastTime: 2000,
    variant: 'stroke',
  },
  {
    color: 'gray',
    size: 'small',
    textAlign: 'left',
    toastTime: 2000,
    variant: 'stroke',
  }
]

const iconBtnConf = [
  {
    color: 'gray',
    icon: true,
    size: 'big',
    toastTime: 1000,
    variant: 'stroke',
  },
  {
    color: 'yellow',
    icon: true,
    size: 'normal',
    toastTime: 1500,
    variant: 'stroke',
  },
  {
    color: 'white',
    icon: true,
    size: 'small',
    toastTime: 2000,
    variant: 'stroke',
  }
]

@Options({
  components: {
    BeeButton,
    BeeTextbox,
    BeeContextMenu
  },
  data () {
    return {
      smallBtnConf,
      normalBtnConf,
      disabledBtnConf,
      strokeBtnConf,
      iconBtnConf
    }
  },
  methods: {
    clickEnter (e: any) {
      console.log('enter', e)
    },
    showToast (text: string, time: number = 2000, variant: string = '') {
      this.$toast.show({
        text,
        variant,
        lifetime: time
      })
    },
    onExecute (params: any) {
      const {command, event} = params

      switch (command) {
        case "add-folder":
          this.$toast.show({
            text: "Click add folder",
            lifetime: 1000
          })
          break
        case "edit":
          this.$toast.show({
            text: "Click edit",
            lifetime: 2000
          })
          break
      }
    }
  },
  watch: {
    textBoxValue (val) {
      console.log('Text was changed', val)
    }
  }
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="sass">
.row
  display: flex
  align-items: center
</style>
