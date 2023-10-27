<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <BeeButton
      :label="'Ok'"
      :variant="'primary'"
    />

    <BeeTextbox
      :placeholder="'Укажите название медиа хранилища'"
      :name="'name'"
      v-model="name"
      :clickEnter="clickEnter"
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
    name: 'Vanz'
  }),
  methods: {
    clickEnter (e: any) {
      console.log('enter', e)
    }
  },
  watch: {
    name (val) {
      console.log('name was changed', val)
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

</style>
