<template>
  <section id="dashboard">
    <div class="search rounded py-1 d-flex justify-content-between align-items-center">
      <select class="py-2 px-4 mr-4" v-model="hide">
        <option value="free" selected>free diving</option>
        <option value="all">all</option>
      </select>
    </div>

    <div class="chartSec mt-3 p-2" v-show="hide=='all'" > 
      <chart class="chart" />
    </div>

    <div class="posts mt-3" v-if="expCard">
      <exp-card
        :value="expCard.avg_duration"
        :minValue="expCard.avg_duration_diving"
        :maxValue="expCard.avg_duration_scuba"
        measure="min"
        title="Average duration under water"
        class="mt-4"
      />
      <exp-card
        :value="expCard.max_depth"
        :minValue="expCard.max_depth_diving"
        :maxValue="expCard.max_depth_scuba"
        measure="m"
        title="Max Depth"
        class="mt-4"
      />
      <exp-card
        :value="expCard.dive_count"
        :minValue="expCard.dive_count_diving"
        :maxValue="expCard.dive_count_scuba"
        measure="dive"
        title="Number of Dives"
        class="mt-4"
      />
    </div>
  </section>
</template>

<script>
import expCard from "./expCard";
import chart from "./chart";
export default {
  data() {
    return {
      hide:null
    }
  },
  components: {
    chart,
    expCard
  },
  computed: {
    expCard() {
      return this.$store.getters.expCard;
    }
  }
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

  .chartSec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
    .chart {
      height: 300px;
      overflow: hidden;
    }
  }
}
</style>