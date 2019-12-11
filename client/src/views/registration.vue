<template>
  <main>
    <section id="registration">
      <div class="px-4 py-2 d-flex justify-content-between">
        <div class="pt-1">
          <router-link to="/">
            <img src="../assets/icons/logo.svg" />
          </router-link>
        </div>
        <div>
          <router-link
            to="/registration/signup"
            v-if="$route.name === 'login' || $route.name === 'changePassword'"
          >
            <button class="btn btn-custom rounded mx-3 px-5 fontSM font-weight-bold">signup</button>
          </router-link>

          <router-link
            to="/registration/login"
            v-if="$route.name === 'signup' || $route.name === 'resetPassword' || $route.name === 'code'"
          >
            <button class="btn btn-custom rounded mx-3 px-5 fontSM font-weight-bold">login</button>
          </router-link>
        </div>
      </div>
      <div id="reg-container" class="d-flex justify-content-center align-items-center mx-md-4 mx-2">
        <div
          class="block col-xl-4 col-lg-5 col-md-7 col-sm-8 col-12 mt-5 pt-4 px-2 d-flex justify-content-center"
        >
          <div class="col-xl-9 col-lg-10 col-md-10 col-11 pt-4 px-0">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#registration {
  position: relative;
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.6)
    ),
    url("../assets/img/reg-background.jpg");
  background-size: cover;
  min-height: 100vh;
  width: 100%;
  background-size: cover;
  margin: 0;
  #reg-container {
    .block {
      background: $transDarkBlue;
      border-radius: 10px;
    }
  }
  .btn-custom {
    background: $transDarkBlue;
    color: $fontColor_white;
    box-shadow: 2px 2px 5px #555;
  }

  button {
    border-radius: 10px !important;
  }
}
</style>
