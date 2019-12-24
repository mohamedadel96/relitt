<template>
  <nav id="appNav" class="py-3 border-bottom d-flex justify-content-between align-items-center">
    <div class="px-4 col-3">
      <img src="../../../assets/img/icon/logo.svg" />
    </div>

    <div class="col-6 d-flex justify-content-center">
      <ul class="nav-list d-flex justify-content-between col-6 my-0">
        <li :class="[$route.name === 'app' ? 'active' : '', 'fontLG']">
          <router-link to="/app">Feeds</router-link>
        </li>
        <li :class="[$route.name === 'dashboard' ? 'active' : '' , 'fontLG']">
          <router-link to="/app/dashboard">Dashboard</router-link>
        </li>
        <li
          :class="[($route.name === 'events' || $route.name === 'centers') ? 'active' : '', 'fontLG']"
        >
          <router-link to="/app/events">Explore</router-link>
        </li>
      </ul>
    </div>

    <div class="col-3 block_3 d-flex justify-content-end px-4">
      <img src="../../../assets/icons/ring.svg" alt />
      <div class="mx-3">
        <b-dropdown size="lg" variant="link" right toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <div
              class="d-flex justify-content-center align-items-center border rounded-circle overflow-hidden"
            >
              <img
                class="avatar"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 "
                alt="avatar"
              />
            </div>
          </template>
          <b-dropdown-item>action</b-dropdown-item>
          <b-dropdown-item>logout</b-dropdown-item>
        </b-dropdown>
      </div>
      <add-activity />
    </div>
  </nav>
</template>

<script>
import addActivity from "./addActivity";
export default {
  components: {
    addActivity
  },
  data() {
    return {};
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
