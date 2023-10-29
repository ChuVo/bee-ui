<template>
  <div class="home">
    <ButtonsView msg="Bee-ui library"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ButtonsView from '@/components/ButtonsView.vue';

@Options({
  components: {
    ButtonsView,
  },
})
export default class HomeView extends Vue {}
</script>
