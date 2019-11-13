<template>
  <header>
    <nav-bar />
    <div class="content d-flex align-items-center justify-content-between container">
      <div class="col-md-7 col-12">
        <h1 class="text-white">Please be open for water</h1>
        <p class="text-white">your journey shall began now!</p>
        <div>
          <button class="py-3 rounded col-md-4 col-5">
            <router-link class="text-white" to="/registration/signup">Register</router-link>
          </button>
          <button class="py-3 btn btn-light rounded col-md-4 col-5 mx-4">
            <router-link class="text-white" to="/registration/signup">Login</router-link>
          </button>
        </div>
      </div>
      <div class="col-md-4 d-none d-md-block">
        <!-- <div class="mobile"></div> -->
      </div>
    </div>
  </header>
</template>

<script>
import navBar from "./_navbar";
export default {
  components: {
    navBar
  }
};
</script>

<style lang="scss" scoped>
header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.39), #165566d2),
    url("https://www.eloundamare.com/img/Backgrounds/Experiences/all/Scuba-Diving.jpg");
  height: 100vh;

  .content {
    height: 86vh;

    h1 {
      letter-spacing: 2px;
      word-spacing: 1px;
      font-weight: bold;
    }

    p {
      font-size: 35px;
      opacity: 0.6;
      letter-spacing: 1px;
      word-spacing: 2px;
    }

    button {
      color: white;
      transition: 0.4s;

      &:first-of-type {
        background: $darkBlue;
        border: 1px solid $darkBlue;

        &:hover {
          background: $transDarkBlue;
        }
      }

      &:last-of-type {
        background: none;
        border: 1px solid $background_white;

        &:hover {
          background: $background_white;
          color: $darkBlue;
        }
      }
    }
  }

  .mobile {
    // height: 450px;
    height: 75vh;
    border: 1px solid #ddd;
  }
}
</style>
