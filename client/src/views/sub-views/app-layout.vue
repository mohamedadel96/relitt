<template>
  <section id="app-layout" class="d-flex justify-content-end mt-3 position-relative">
    <div class="left-side col-md-3 d-md-block d-none px-4 position-fixed">
      <div class="px-1">
        <user-card />
        <side-menu/>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <router-view />
    </div>
    <div class="col-md-3 d-md-block d-none px-3">
     <div class="search-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">
        <friends-search />
      </div>
      <myEvent />
    </div>
  </section>
</template>

<script>
import userCard from "../../components/application/feeds/userCard";
import sideMenu from "../../components/application/feeds/side-menu/sideMenu";
import expCard from "../../components/application/dashboard/expCard";
import friendsSearch from "../../components/application/feeds/friendsSearch";
import myEvent from "../../components/application/events/myEvent";


export default {
  components: {
    userCard,
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
    left: 0
  }
  .search-sec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
  }
}
</style>
