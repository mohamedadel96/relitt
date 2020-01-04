<template>
  <section id="app-layout" class="d-flex justify-content-end mt-3 position-relative">
    <div class="col-md-3 d-md-block d-none px-4">
      <div class="px-1">
        <profile />
        <side-menu />
      </div>
    </div>
    <div class="col-md-6 col-12">
      <router-view />
    </div>
    <div class="col-md-3 d-md-block d-none px-3">
      <friends-search />
      <myEvent />
    </div>
  </section>
</template>

<script>
import profile from "../../components/application/feeds/profile";
import sideMenu from "../../components/application/feeds/side-menu/sideMenu";
import expCard from "../../components/application/dashboard/expCard";
import friendsSearch from "../../components/application/feeds/friendsSearch";
import myEvent from "../../components/application/events/myEvent";

export default {
  components: {
    profile,
    sideMenu,
    expCard,
    friendsSearch,
    myEvent
  }
};
</script>

<style lang="scss" scoped>
#app-layout {
  .left-side {
    left: 0;
  }
}
</style>
