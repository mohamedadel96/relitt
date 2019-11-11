<template>
  <main>
    <section id="registration">
      <div class="px-4 py-2 d-flex justify-content-between">
        <h3>logo</h3>
        <div>
          <button class="btn btn-custom rounded mx-3 px-4" v-if="$route.name === 'login'">signup</button>
          <button class="btn btn-custom rounded mx-3 px-4" v-if="$route.name === 'signup'">login</button>
        </div>
      </div>
      <div id="reg-container" class="d-flex justify-content-center align-items-center">
        <div class="block col-xl-4 col-lg-5 col-md-6 col-sm-8 col-11 mt-5 pt-5 px-0 d-flex justify-content-center">
          <div class="col-xl-9 col-lg-10 col-md-10 col-11 pt-3">
            <router-view />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
#registration {
  position: relative;
  background-image: linear-gradient(
      rgba(240, 240, 240, 0.39),
      rgba(0, 0, 0, 0.801)
    ),
    url("https://backgrounddownload.com/wp-content/uploads/2018/09/underwater-city-background-8.jpg");
  min-height: 100vh;
  // padding-bottom: 60px;
  width: 100%;
  background-size: cover;
  margin: 0;
  #reg-container {
    .block {
      background: $transDarkBlue;
      min-height: 83vh;
      border-radius: 10px;
    }
  }
  .btn-custom {
    background: $transDarkBlue;
    color: $fontColor_white;
    box-shadow: 2px 2px 5px #555;
  }
}
</style>
