<template>
  <section id="dashboard">
    <div class="search rounded py-1 d-flex justify-content-between align-items-center">
      <select class="py-2 px-4 mr-4">
        <option value>free diving</option>
      </select>
    </div>

    <div class="posts mt-3"> 
          <exp-card :avg="expCard.avg_duration"  :diving="expCard.avg_duration_diving" :scuba="expCard.avg_duration_scuba" :measure="'min'" txt="Average duration under water" class="mt-4" />
          <exp-card :avg="expCard.max_depth" :diving='expCard.max_depth_diving' :scuba='expCard.max_depth_scuba' :measure="'m'" txt="Max Depth" class="mt-4" />
          <exp-card :avg="expCard.dive_count" :diving='expCard.dive_count_diving' :scuba='expCard.dive_count_scuba' :measure="'dive'" txt="Number of Dives" class="mt-4" />
    </div>
  </section>
</template>

<script>
import expCard from "./expCard";
export default {
  components: {
    expCard
  },
  computed: {
    expCard(){
      return this.$store.getters.expCard
    }}
};
</script>

<style lang="scss" scoped>
#dashboard {
  .search {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
    select {
      width: 100%;
      background: none;
      border: none;
      outline: none;
    }
  }
}
</style>