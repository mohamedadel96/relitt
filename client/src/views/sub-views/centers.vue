<template>
  <section id="centers">
    <div class="d-flex justify-content">
      <div class="col-md-3 px-4 mt-4 overflow-hidden">
        <div>here filter</div>
      </div>
      <div class="col-md-9">
        <div class="tabs d-flex mt-4 justify-content-center mr-5">
          <p class="mr-5">
            <router-link to="/app/events">Events</router-link>
          </p>
          <p class="mr-5">
            <router-link class="active" to="/app/centers">Centers</router-link>
          </p>
        </div>
        <div class="col-md-11 col-12 px-2">
          <center-cards />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import centerCards from "../../components/app/centerCards";
export default {
  components: {
    centerCards
  }
};
</script>

<style lang="scss" scoped>
#centers {
  .tabs {
    p {
      a {
        text-decoration: none;
        color: $gray;
        letter-spacing: 1px;
        &.active {
          border-bottom: 3px solid $blue;
          color: $blue;
          font-weight: bold;
        }
      }
    }
  }
}
</style>