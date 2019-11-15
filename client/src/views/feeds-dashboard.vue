<template>
  <section id="feeds-dashboard" class="d-flex mt-4">
    <div class="col-3 d-md-block d-none px-4">
      <div class="px-1">
        <user-card />
        <div>
          <exp-card class="mt-4" />
          <exp-card class="mt-4" />
          <exp-card class="mt-4" />
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <router-view />
    </div>
    <div class="col-3 d-md-block d-none px-3">
      <div class="search-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">
        <friends-search />
      </div>
    </div>
  </section>
</template>

<script>
import userCard from "../components/app/userCard";
import expCard from "../components/app/expCard";
import friendsSearch from "../components/app/friendsSearch";

export default {
  components: {
    userCard,
    expCard,
    friendsSearch
  }
};
</script>

<style lang="scss" scoped>
#feeds-dashboard {
  .search-sec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
  }
}
</style>
