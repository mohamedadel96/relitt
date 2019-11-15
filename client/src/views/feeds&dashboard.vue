<template>
  <section class="d-flex mt-4">
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
    <div class="col-3 d-md-block d-none">card</div>
  </section>
</template>

<script>
import userCard from "../components/app/userCard";
import expCard from "../components/app/expCard";

export default {
  components: {
    userCard,
    expCard
  }
};
</script>

<style lang="scss" scoped>
</style>