<template>
  <section>
    <app-header />
    <app-features />
    <hr class="col-7 border" />
    <app-blogs />
    <apps-section />
  </section>
</template>

<script>
import appHeader from "../components/home/header";
import appFeatures from "../components/home/feateures";
import appBlogs from "../components/home/blogs";
import appsSection from "../components/home/appsSection";

export default {
  components: {
    appHeader,
    appFeatures,
    appBlogs,
    appsSection
  }
};
</script>

<style lang="scss">
</style>
