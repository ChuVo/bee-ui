<template>
  <nav>
    <router-link to="/">Buttons</router-link> |
    <router-link to="/text-fields">Text fields</router-link>
  </nav>
  <router-view/>
  <BeeToast />
</template>

<script>
import "@/styles/index.sass"
import {BeeToast} from "@/components";

export default {
  name: 'App',
  components: {
    BeeToast
  }
}

</script>

<style lang="sass">

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  background: #151515
  height: 100vh
  color: #b6bbbb

nav
  padding: 30px

  a
    font-weight: bold
    color: #2c3e50

    &.router-link-exact-active
      color: #42b983

</style>
