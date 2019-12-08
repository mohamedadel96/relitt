<template>
  <section id="app">
    <nav-bar />
    <router-view />
  </section>
</template>

<script>
import navBar from "../components/application/navbar";
export default {
  components: {
    navBar
  },
  mounted() {
    this.$store.dispatch("USERCARD");
    this.$store.dispatch("DASHBOARD");
    this.$store.dispatch("MYEVENT");
  }
};
</script> 

<style lang="scss">
#app {
  background: #fafafa;
}
</style>