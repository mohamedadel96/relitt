<template>
  <section id="navItems">
    <div
      v-b-modal.navItems
      class="menu-item d-flex align-items-center justify-content-center rounded-circle bg-light"
    >
      <img class="nav-list" src="../../../assets/icons/navbar2.svg" alt />
    </div>
    <b-modal id="navItems" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div @click="$bvModal.hide('navItems')">
        <router-link to="/app">
          <p class="py-3 mb-0 font-16 pointer text-center text-dark">Feeds</p>
        </router-link>
        <router-link to="/app/dashboard">
          <p
            class="py-3 mb-0 font-16 pointer text-center text-dark border-top border-bottom"
          >Dashboard</p>
        </router-link>
        <router-link to="/app/events">
          <p class="py-3 mb-0 font-16 pointer text-center text-dark">Explore</p>
        </router-link>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#navItems {
  .nav-list {
    height: 25px;
    width: 25px;
  }
  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
    outline: none;
  }
  .menu-item {
    outline: none;
  }
  .modal-content {
    border: none;
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }

  @media (max-width: 576px) {
    .modal-dialog {
      margin: 80px 10px 0 10px !important;
    }
  }
}
</style>