<template>
  <header>
    <nav-bar />
    <div class="content d-flex align-items-center justify-content-between container">
      <div class="col-md-7 col-12">
        <h1 class="text-white">Please be open for water</h1>
        <p class="text-white">your journey shall began now!</p>
        <div>
          <router-link to="/registration">
            <button class="reg-btn text-white py-3 rounded font-weight-bold col-md-4 col-5">Register</button>
          </router-link>

          <router-link to="/registration/login">
            <button
              class="log-btn py-3 btn btn-light rounded font-weight-bold col-md-4 col-5 mx-4"
            >Login</button>
          </router-link>
        </div>
        <div class="d-flex mt-3">
          <div
            class="mr-3"
            style="background: white; height: 50px; width: 50px; border-radius: 50%; line-height: 50px; text-align: center;"
          >
            <a href="#">
              <img
                src="../../assets/img/Image 4.png"
                alt="andriod download"
                class="mx-auto"
                style="height:26px ; width:26px"
              />
            </a>
          </div>
          <div
            style="background: #3B5999; height: 50px; width: 50px; border-radius: 50%; line-height: 50px; text-align: center;"
          >
            <a href="#">
              <img
                src="../../assets/img/Mask Group 12.png"
                alt="andriod download"
                class="mx-auto"
                style="height:26px ; width:26px"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="d-none d-md-block">
        <img class="mobile" src="../../assets/img/mobile.png" alt />
      </div>
    </div>
    <div class="text-white d-flex justify-content-center">
      <div class="mr-3">
        <a href="#">
          <img src="../../assets/img/Image 15.png" alt="andriod download" class="mx-auto" />
        </a>
      </div>
      <div>
        <a href="#">
          <img src="../../assets/img/Image 16.png" alt="ios download" class="mx-auto" />
        </a>
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
  background-image: radial-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.6)
    ),
    url("../../assets/img/home-background.png");
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

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
      letter-spacing: 1px;
      color: white;
      transition: 0.4s;

      &.reg-btn {
        background: $darkBlue;
        border: 1px solid $darkBlue;

        &:hover {
          background: $transDarkBlue;
        }
      }

      &.log-btn {
        background: none;

        &:hover {
          background: $darkBlue;
          border: 1px solid $darkBlue;
        }
      }
    }
  }

  .mobile {
    height: 100%;
    width: 100%;
  }
}
</style>
