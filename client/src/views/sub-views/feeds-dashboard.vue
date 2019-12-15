<template>
  <section id="feeds-dashboard" class="d-flex mt-4">
    <div class="col-md-3 d-md-block d-none px-4" v-if="dashboard">
      <div class="px-1">
        <user-card />
        <div>
          <exp-card
            title="Average duration under water"
            :value="dashboard.avg_duration"
            :minValue="dashboard.avg_duration_diving"
            :maxValue="dashboard.avg_duration_scuba"
            measure="min"
            class="mt-4"
          />
          <exp-card
            title="Max Depth"
            :value="dashboard.max_depth"
            :minValue="dashboard.max_depth_diving"
            :maxValue="dashboard.max_depth_scuba"
            measure="m"
            class="mt-4"
          />
          <exp-card
            title="Number of Dives"
            :value="dashboard.dive_count"
            :minValue="dashboard.dive_count_diving"
            :maxValue="dashboard.dive_count_scuba"
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
      <!-- <div class="search-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">
        <friends-search />
      </div>-->
      <myEvent />
    </div>
  </section>
</template>

<script>
import userCard from "../../components/application/feeds-dashboard/userCard";
import expCard from "../../components/application/feeds-dashboard/expCard";
import friendsSearch from "../../components/application/feeds-dashboard/friendsSearch";
import myEvent from "../../components/application/events/myEvent";

export default {
  components: {
    userCard,
    expCard,
    friendsSearch,
    myEvent
  },
  computed: {
    dashboard() {
      return this.$store.getters.dashboard;
    }
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
