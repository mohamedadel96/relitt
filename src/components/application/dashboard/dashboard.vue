<template>
  <section id="dashboard">
    <div v-if="dashboard">
      <nav />
      <cards />
      <expCards />
    </div>
  </section>
</template>

<script>
import nav from "./component/dashboardNavbar";
import cards from "./component/cards";
import expCards from "./component/expCards";

export default {
  data() {
    return {
      hide: "free"
    };
  },
  components: {
    nav,
    cards,
    expCards
  },
  computed: {
    dashboard() {
      return this.$store.getters.dashboard;
    }
  },
  created() {
    this.$store.dispatch("DASHBOARD");
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