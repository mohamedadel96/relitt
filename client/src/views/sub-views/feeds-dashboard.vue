<template>
  <section id="feeds-dashboard" class="d-flex mt-4">
    <div class="col-md-3 d-md-block d-none px-4">
      <div class="px-1">
        <user-card />
        <div>
          <exp-card :avg="expCard.avg_duration"  :diving="expCard.avg_duration_diving" :scuba="expCard.avg_duration_scuba" :measure="'min'" txt="Average duration under water" class="mt-4" />
          <exp-card :avg="expCard.max_depth" :diving='expCard.max_depth_diving' :scuba='expCard.max_depth_scuba' :measure="'m'" txt="Max Depth" class="mt-4" />
          <exp-card :avg="expCard.dive_count" :diving='expCard.dive_count_diving' :scuba='expCard.dive_count_scuba' :measure="'dive'" txt="Number of Dives" class="mt-4" />
          
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <router-view />
    </div>
    <div class="col-md-3 d-md-block d-none px-3">
      <div class="search-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">Nu
        <friends-search />
      </div>
    </div>
  </section>
</template>

<script>
import userCard from "../../components/app/userCard";
import expCard from "../../components/app/expCard";
import friendsSearch from "../../components/app/friendsSearch";

export default {

    components: {
    userCard,
    expCard,
    friendsSearch
  },
  computed: {
    expCard(){
      return this.$store.getters.expCard
    }
  },
 mounted(){
    this.$store.dispatch('FEED', null, {root:true})
    this.$store.dispatch('EXPCARD', null, {root:true})

  },
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
