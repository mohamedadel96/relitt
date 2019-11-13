<template>
  <section>
    <app-header />
    <app-features />
    <hr class="col-7" />
  </section>
</template>

<script>
import appHeader from "../components/home/header";
import appFeatures from "../components/home/feateures";

export default {
  components: {
    appHeader,
    appFeatures
  }
};
</script>

<style lang="scss" scoped>
hr {
  border: 1px solid #ddd;
}
</style>
