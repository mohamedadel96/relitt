<template>
  <header>
      <nav-bar/>
  </header>
</template>

<script>
import navBar from './navbar'
export default {
    components: {
        navBar
    }
};
</script>

<style lang="scss">
    header {
        background-image: linear-gradient(rgba(0, 0, 0, 0.39), #165566d2),
        url('https://www.eloundamare.com/img/Backgrounds/Experiences/all/Scuba-Diving.jpg');
        height: 100vh
    }
</style>
