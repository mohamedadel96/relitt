<template>
  <section id="feeds-dashboard" class="d-flex mt-4">
    <div class="col-md-3 d-md-block d-none px-4" v-if="expCard">
      <div class="px-1">
        <user-card />
        <div>
          <exp-card
            title="Average duration under water"
            :value="expCard.avg_duration"
            :minValue="expCard.avg_duration_diving"
            :maxValue="expCard.avg_duration_scuba"
            measure="min"
            class="mt-4"
          />
          <exp-card
            title="Max Depth"
            :value="expCard.max_depth"
            :minValue="expCard.max_depth_diving"
            :maxValue="expCard.max_depth_scuba"
            measure="m"
            class="mt-4"
          />
          <exp-card
            title="Number of Dives"
            :value="expCard.dive_count"
            :minValue="expCard.dive_count_diving"
            :maxValue="expCard.dive_count_scuba"
            measure="dives"
            class="mt-4"
          />          
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12">
      <router-view />
    </div>
    <div class="col-md-3 d-md-block d-none px-3">
      <div class="search-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">
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
  mounted() {
    this.$store.dispatch("FEED");
    this.$store.dispatch("EXPCARD");
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
