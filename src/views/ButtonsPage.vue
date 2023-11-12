<template>
  <div class="page">
    <h1>Bee-ui-library <strong v-text="'buttons'" /></h1>

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
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <div class="row">
      <BeeButton
          v-for="button in normalBtnConf"
          :color="button.color"
          :icon="true"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in normalBtnConf"
          :color="button.color"
          :icon="false"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <div class="row">
      <BeeButton
          v-for="button in disabledBtnConf"
          :color="button.color"
          :disabled="true"
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
          v-for="button in strokeBtnConf"
          :disabled="true"
          :icon="true"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in strokeBtnConf"
          :color="'yellow'"
          :disabled="true"
          :icon="false"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>
    <div class="row">
      <BeeButton
          v-for="button in strokeBtnConf"
          :color="'gray'"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <div class="row">
      <BeeButton
          v-for="button in iconBtnConf"
          :color="'white'"
          :disabled="true"
          :icon="button.icon"
          :label="button.label"
          :textAlign="button.textAlign"
          :size="button.size"
          :variant="button.variant"
          @click="showToast(`Вы кликнули по кнопке ${button.label}, это сообщение пропадет через ${button.toastTime}`, button.toastTime)"
      />
    </div>

    <BeeContextMenu id="context-menu">
      <template v-slot:add-folder>Создать папку</template>
      <template v-slot:divider></template>
      <template v-slot:upload>Загрузить файл</template>
      <template v-slot:upload-link>Загрузить по ссылке</template>
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
    label: 'Small white left',
    size: 'small',
    textAlign: 'left',
    toastTime: 1500,
    variant: 'outlined',
  },
  {
    label: 'Small yellow center',
    variant: 'outlined',
    icon: true,
    textAlign: 'center',
    size: 'small',
    color: 'yellow',
    toastTime: 2000
  },
  {
    label: 'Small gray right',
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
    label: 'Normal white left',
    size: 'normal',
    textAlign: 'left',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'yellow',
    icon: false,
    label: 'Normal yellow center',
    size: 'normal',
    textAlign: 'center',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'gray',
    icon: false,
    label: 'Normal gray right',
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
    label: 'Normal yellow center',
    size: 'normal',
    textAlign: 'center',
    toastTime: 1000,
    variant: 'outlined',
  },
  {
    color: 'white',
    icon: false,
    label: 'small white left',
    size: 'small',
    textAlign: 'left',
    toastTime: 1000,
    variant: 'outlined',
  }
]

const strokeBtnConf = [
  {
    color: 'yellow',
    icon: false,
    label: 'Normal yellow center',
    size: 'normal',
    textAlign: 'center',
    toastTime: 1500,
    variant: 'stroke',
  },
  {
    color: 'white',
    icon: true,
    label: 'small white left',
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
    label: '',
    size: 'big',
    toastTime: 1000,
    variant: 'stroke',
  },
  {
    color: 'yellow',
    icon: true,
    label: '',
    size: 'normal',
    toastTime: 1500,
    variant: 'stroke',
  },
  {
    color: 'white',
    icon: true,
    label: '',
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
