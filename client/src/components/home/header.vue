<template>
  <header>
      <nav-bar/>
      <div class="content d-flex align-items-center container">
          <div class="col-md-6 col-12">
              <h1 class="text-white">Please be open for water</h1>
              <p class="text-white">your journey shall began now</p>
              <div>
                  <button>Register</button>
                  <button>Login</button>
              </div>
              <div></div>
          </div>
      </div>
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
        height: 100vh;
        .content {
            height: 86vh;
        }
    }
</style>
