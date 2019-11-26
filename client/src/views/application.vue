<template>
  <section id="app">
    <nav-bar />
    <router-view />
  </section>
</template>

<script>
import navBar from "../components/app/navbar";
export default {
  components: {
    navBar
  },
  mounted() {
    this.$store.dispatch("USERCARD");
    this.$store.dispatch("EXPCARD");
  }
};
</script> 

<style>
#app {
  background: #fafafa;
  height: 1000vh;
}
</style>