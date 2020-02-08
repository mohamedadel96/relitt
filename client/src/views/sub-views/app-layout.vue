<template>
  <section id="app-layout" class="d-flex justify-content-between mt-3 position-relative">
    <div class="col-lg-3 col-md-4 d-md-block d-none px-4">
      <div class="sec-l pr-lg-4">
        <profile />
        <side-menu />
      </div>
    </div>
    <div class="col-lg-6 col-md-8 col-12 px-3">
      <router-view />
    </div>
    <div class="col-lg-3 d-lg-block d-none px-2">
      <friends-search />
      <friends-modal />
      <myEvent />
      <side-footer />
    </div>
  </section>
</template>

<script>
import profile from "../../components/application/feeds/profile";
import sideMenu from "../../components/application/feeds/side-menu/sideMenu";
import expCard from "../../components/application/dashboard/expCard";
import friendsSearch from "../../components/application/feeds/friendsSearch";
import friendsModal from "../../components/application/feeds/friendsModal";
import myEvent from "../../components/application/events/myEvent";
import sideFooter from "../../components/application/feeds/sideFooter";

export default {
  components: {
    profile,
    sideMenu,
    expCard,
    friendsSearch,
    myEvent,
    friendsModal,
    sideFooter
  }
};
</script>

<style lang="scss" scoped>
#app-layout {
  .sec-l {
    @media screen and (max-width: 1170px) {
      padding-right: 0 !important;
    }
  }
}
</style>
