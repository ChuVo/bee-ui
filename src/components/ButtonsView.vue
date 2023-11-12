<template>
  <div class="hello">
    <h1>Bee-ui-library <strong v-text="'buttons'" /></h1>

<!--    <div class="row">-->
<!--      <BeeTextbox-->
<!--          :placeholder="'Укажите название медиа хранилища'"-->
<!--          :name="'name'"-->
<!--          v-model="textBoxValue"-->
<!--          :clickEnter="clickEnter"-->
<!--      />-->
<!--      <span>Textbox value : {{ textBoxValue }}</span>-->
<!--    </div>-->

    <div class="row">
      <BeeButton
          :label="'small white left'"
          :variant="'outlined'"
          :icon="false"
          :textAlign="'left'"
          size="small"
          @click="showToast('Вы кликнули по кнопке small white left, это сообщение пропадет через 1400мс', 1445400)"
      />
      <BeeButton
          :label="'small yellow center'"
          :variant="'outlined'"
          :color="'yellow'"
          :icon="false"
          :textAlign="'center'"
          size="small"
          @click="showToast('Это сообщение об ошибке!  small yellow centerб , это сообщение пропадет через 500мс', 500, 'error')"
      />
      <BeeButton
          :label="'small gray right'"
          :variant="'outlined'"
          color="gray"
          :icon="true"
          size="small"
          :textAlign="'right'"
          @click="showToast('Это сообщение предупреждение! small gray right, это сообщение пропадет через  2000мс', 2000, 'warning')"
      />
      <BeeButton
          :label="'small yellow left'"
          :variant="'outlined'"
          color="gray"
          :icon="true"
          size="small"
          :textAlign="'left'"
          :disabled="true"
      />
    </div>

    <div class="row">
      <BeeButton
          :label="'white left'"
          :variant="'outlined'"
          :icon="true"
          :textAlign="'left'"
      />
      <BeeButton
          :label="'yellow center'"
          :variant="'outlined'"
          :color="'yellow'"
          :icon="true"
          :textAlign="'center'"
      />
      <BeeButton
          :label="'gray right'"
          :variant="'outlined'"
          color="gray"
          :icon="true"
          :textAlign="'right'"
      />
    </div>
    <div class="row">
      <BeeButton
          :label="'big white left'"
          :variant="'outlined'"
          :icon="false"
          :textAlign="'left'"
          size="big"
      />
      <BeeButton
          :label="'big yellow center'"
          :variant="'outlined'"
          :color="'yellow'"
          :icon="false"
          :textAlign="'center'"
          size="big"
      />
      <BeeButton
          :label="'big gray right'"
          :variant="'outlined'"
          color="gray"
          :icon="false"
          :textAlign="'right'"
          size="big"
      />
      <BeeButton
          :label="'big gray right'"
          :variant="'outlined'"
          color="gray"
          :icon="true"
          :textAlign="'left'"
          size="big"
      />
    </div>
    <div class="row">
      <BeeButton
          :label="''"
          :variant="'stroke'"
          :size="'small'"
          :icon="true"
      />
      <BeeButton
          :label="''"
          :variant="'stroke'"
          :icon="true"
      />
      <BeeButton
          :label="''"
          :variant="'stroke'"
          :size="'big'"
          :icon="true"
      />
    </div>
    <div class="row">
      <BeeButton
          :label="'Small stroke'"
          :color="'white'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :size="'small'"
          :icon="false"
      />
      <BeeButton
          :label="'Normal stroke'"
          :color="'yellow'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :icon="false"
      />
      <BeeButton
          :label="'Big stroke'"
          :color="'gray'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :size="'big'"
          :icon="false"
      />
    </div>
    <div class="row">
      <BeeButton
          :label="'Small stroke'"
          :color="'white'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :size="'small'"
          :icon="true"
      />
      <BeeButton
          :label="'Normal stroke'"
          :color="'yellow'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :icon="true"
      />
      <BeeButton
          :label="'Big stroke'"
          :color="'gray'"
          :disabled="false"
          :variant="'stroke'"
          :textAlign="'left'"
          :size="'big'"
          :icon="true"
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
import {BeeButton} from "@/components/button";
import {BeeTextbox} from "@/components/textbox";
import {BeeContextMenu} from "@/components/context-menu";

@Options({
  components: {
    BeeButton,
    BeeTextbox,
    BeeContextMenu
  },
  data: () => ({
    textBoxValue: 'Text box'
  }),
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
export default class ButtonsView extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

.row
  display: flex
  align-items: center

</style>
