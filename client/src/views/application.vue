<template>
  <section id="app">
    <nav-bar />
    <router-view />
  </section>
</template>

<script>
import navBar from "../components/application/global/navbar";
export default {
  components: {
    navBar
  },
  created() {
    this.$store.dispatch("PROFILE");
    this.$store.dispatch("SUGESTEDFOLLWERS");
    this.$store.dispatch("MYEVENT");
  }
};
</script> 

<style lang="scss">
#app {
  min-height: 100vh;
  background: #fafafa;
  padding-top: 72px;
}
</style>