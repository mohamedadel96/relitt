<template>
  <main>
    <section id="registration">
      <div id="reg-container" class="d-flex justify-content-center align-items-center">
        <div class="block col-lg-4 col-md-6 col-sm-8 col-11 mt-5 d-flex justify-content-center align-items-center">
          <div class="col-10">
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
  background-image: linear-gradient(
      rgba(240, 240, 240, 0.39),
      rgba(0, 0, 0, 0.801)
    ),
    url("https://backgrounddownload.com/wp-content/uploads/2018/09/underwater-city-background-8.jpg");
  height: 100vh;
  width: 100%;
  background-size: cover;
  margin: 0;
  #reg-container {
    height: 100%;
    .block {
      background: $transDarkBlue;
      height: 82%;
      border-radius: 10px;
    }
  }
}
</style>
