<template>
  <section class="d-flex">
      <div class="col-3 d-md-block d-none">
        <div class="px-1">
          <user-card/>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <router-view/>
      </div>
      <div class="col-3 d-md-block d-none">
        card
      </div>
  </section>
</template>

<script>
import userCard from '../components/app/userCard'
export default {
  components: {
    userCard
  }
}
</script>

<style lang="scss" scoped>
  .col-3 {
    background: red
  }
</style>