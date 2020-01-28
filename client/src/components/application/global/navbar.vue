<template>
  <nav
    id="appNav"
    class="col-12 px-0 py-3 border-bottom position-fixed d-flex justify-content-between align-items-center"
  >
    <div class="px-md-4 col-md-3 col-5">
      <img src="../../../assets/img/icon/logo.svg" />
    </div>

    <div class="col-6 d-md-flex d-none justify-content-center">
      <ul class="nav-list d-flex justify-content-between col-lg-6 col-12 my-0">
        <li :class="[$route.name === 'app' ? 'active' : '', 'font-20']">
          <router-link to="/app">Feeds</router-link>
        </li>
        <li :class="['mx-4',$route.name === 'dashboard' ? 'active' : '' , 'font-20']">
          <router-link to="/app/dashboard">Dashboard</router-link>
        </li>
        <li
          :class="[($route.name === 'events' || $route.name === 'centers') ? 'active' : '', 'font-20']"
        >
          <router-link to="/app/events">Explore</router-link>
        </li>
      </ul>
    </div>

    <div class="col-md-3 col-7 block_3 d-flex justify-content-end px-4">
      <notifications>
        <img class="pointer" v-b-modal.notifications src="../../../assets/icons/ring.svg" alt />
      </notifications>
      <profile-settings v-if="profile" :image="profile.image" />

      <activity>
        <img
          class="mx-2 pointer"
          v-b-modal.addActivity
          src="../../../assets/icons/nav-plus.svg"
          alt
        />
      </activity>

      <nav-items class="d-md-none d-block" />
    </div>
  </nav>
</template>

<script>
import activity from "./activity";
import profileSettings from "./profileSettings";
import notifications from "./notifications";
import navItems from "./navItems";
export default {
  components: {
    activity,
    profileSettings,
    notifications,
    navItems
  },
  data() {
    return {};
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  },
  methods: {
    async logout() {
      try {
        let res = await this.$store.dispatch("LOGOUT");
        if (res !== "done") return; //will return error in popup
        document.location.reload(true);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss">
#appNav {
  top: 0;
  z-index: 3;
  background: $background_white;
  box-shadow: 1px 1px 2px #eee;

  .nav-list {
    li {
      list-style: none;
      cursor: pointer;
      opacity: 0.7;

      &.active {
        opacity: 0.9;
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: #000;
      }
    }
  }

  .block_3 {
    div {
      height: 40px;
      width: 40px;

      .avatar {
        width: 60px;
        height: 60px;
      }
      .test {
        left: -80px;
      }
    }
  }
}
</style>
