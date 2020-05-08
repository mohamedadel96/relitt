<template>
  <nav id="navbar" class="d-flex justify-content-between flex-wrap">
    <div class="py-3 col-lg-7 col-md-6 col-12 px-md-5 px-3">
      <img src="../../assets/img/logo.svg" alt="">
    </div>
    <div class="burger-btn" @click="hideNavItems = !hideNavItems">
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        style="enable-background:new 0 0 50 50;fill:#fff"
        xml:space="preserve"
      >
        <g>
          <rect y="3" width="50" height="6" />
          <rect y="17" width="50" height="6" />
          <rect y="31" width="50" height="6" />
        </g>
      </svg>
    </div>

    <div
      id="navItems"
      :class="[{'d-none': hideNavItems} ,'col-lg-5 col-md-6 col-12 pr-md-5 pr-0 px-1']"
    >
      <ul class="d-md-flex text-center justify-content-between pr-md-5 pr-0 px-1">
        <li>Home</li>
        <li>About</li>
        <li>Download</li>
        <li>
          <router-link class="text-white" to="/registration">Register</router-link>
        </li>
        <li>
          <router-link class="text-white" to="/registration/login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      hideNavItems: false
    };
  },
  created() {
    if (window.innerWidth < 767) this.hideNavItems = true;
  }
};
</script>

<style lang="scss">
#navbar {
  .burger-btn {
    display: none;
  }
  ul {
    li {
      list-style: none;
      color: $fontColor_white;
      padding: 10px;
      cursor: pointer;
      a {
        text-decoration: none;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  #navbar {
    background: $darkBlue;
    .burger-btn {
      display: block;
      position: absolute;
      width: 30px;
      padding: 5px;
      top: 13px;
      right: 10px;
    }
    #navItems {
      position: absolute;
      background: $darkBlue;
      z-index: 1;
      width: 100%;
      top: 63px;
      ul {
        li {
          &:hover {
            background: #222;
          }
        }
      }
    }
  }
}
</style>
