<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="row">
      <BeeTextbox
          :placeholder="'Укажите название медиа хранилища'"
          :name="'name'"
          v-model="textBoxValue"
          :clickEnter="clickEnter"
      />
      <span>Textbox value : {{ textBoxValue }}</span>
    </div>

    <div class="row">
      <BeeButton
          :label="'small white left'"
          :variant="'outlined'"
          :icon="false"
          :textAlign="'left'"
          size="small"
      />
      <BeeButton
          :label="'small yellow center'"
          :variant="'outlined'"
          :color="'yellow'"
          :icon="false"
          :textAlign="'center'"
          size="small"
      />
      <BeeButton
          :label="'small gray right'"
          :variant="'outlined'"
          color="gray"
          :icon="true"
          size="small"
          :textAlign="'right'"
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
    </div>


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
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import {BeeButton} from "@/components/button";

import {BeeTextbox} from "@/components/textbox";
import "@/styles/index.sass"

@Options({
  components: {
    BeeButton,
    BeeTextbox
  },
  props: {
    msg: String
  },
  data: () => ({
    textBoxValue: 'Text box'
  }),
  methods: {
    clickEnter (e: any) {
      console.log('enter', e)
    }
  },
  watch: {
    textBoxValue (val) {
      console.log('Textbox value was changed', val)
    }
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  margin: 40px 0 0
ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px

a
  color: #42b983

.row
  display: flex
  align-items: center


</style>
