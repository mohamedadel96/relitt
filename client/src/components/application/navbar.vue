<template>
  <nav class="py-3 border-bottom d-flex justify-content-between align-items-center">
    <div class="px-4 col-3">
      <img src="../../assets/img/icon/logo.svg">
    </div> 

    <div class="col-6 d-flex justify-content-center">
      <ul class="d-flex justify-content-between col-6 my-0">
        <li :class="$route.name === 'app' ? 'active' : ''">
          <router-link to="/app">Feeds</router-link>
        </li>
        <li :class="$route.name === 'dashboard' ? 'active' : ''">
          <router-link to="/app/dashboard">Dashboard</router-link>
        </li>
        <li :class="($route.name === 'events' || $route.name === 'centers') ? 'active' : ''">
          <router-link to="/app/events">Explore</router-link>
        </li>
      </ul>
    </div>

    <div class="col-3 block_3 d-flex justify-content-end px-3">
      <img src="../../assets/img/icon/ring.svg" alt />
      <div
        class="d-flex justify-content-center align-items-center border rounded-circle mx-2 overflow-hidden"
      >
          <img
          class="avatar "
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80 "
          alt="avatar"
          @click="logout()"
          />
          </div>    
            <div class="position-absolute " v-if="isOpen">
              <ul class=" zindex-dropdown bg-white ">
                <span class="">Dropdown item text</span>
                <li class="" href="#">Action</li>
                <li class="" href="#">Another action</li>
                <li class="" href="#">Something else here</li>
              </ul>
            </div>  
      <svg
        class="ml-2"
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
              >
        <g transform="translate(-1220 -1705)">
          <circle cx="20" cy="20" r="20" transform="translate(1220 1705)" fill="#f5f6f8" />
          <path
            d="M7.08-6.12V-10.1H4.94v3.98H.96v2.14H4.94V0H7.08V-3.98h3.98V-6.12Z"
            transform="translate(1234.04 1730.1)"
            fill="#80878d"
          />
        </g>
      </svg>
    </div>


  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen)
    },
    async logout() {
          try {
            let res = await this.$store.dispatch("LOGOUT" );
            if (res !== "done") return; //will return error in popup
            document.location.reload(true);
          } catch (error) {
            console.log(error);
          }
        }  
    }
};
</script>

<style lang="scss" scoped>
nav {
  background: $background_white;
  box-shadow: 1px 1px 2px #eee;

  li {
    list-style: none;
    cursor: pointer;
    font-size: $fontLG;
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

  .block_3 {
    div {
      height: 40px;
      width: 40px;

      .avatar {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
