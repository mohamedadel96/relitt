<template>
  <div id="review">
    <div class="col-12 px-4 text-center mb-lg-3 rate">
      <div>
        <p class="fontXL font-weight-bold text-center">icon stars</p>
      </div>
      <div class="props d-flex justify-content-between">
        <div class="prop col-4 px-0">
          <p class="fontMD font-weight-bold mb-0 head">High</p>
          <p class="font-12 text-secondary mb-0">price</p>
        </div>
        <div class="prop col-4 px-0">
          <p class="fontMD font-weight-bold mb-0 head">Good</p>
          <p class="font-12 text-secondary mb-0">Quality</p>
        </div>
        <div class="prop col-4 px-0">
          <p class="fontMD font-weight-bold mb-0 head">Perfect</p>
          <p class="font-12 text-secondary mb-0">price</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    center() {
      return this.$store.getters.center;
    }
  }
};
</script>

<style lang="scss">
#review {
  .props {
    .prop {
      border-right: 2px solid #eee;

      &:last-of-type {
        border: none;
      }

      .fontMD {
        color: $blue;
      }
    }
  }

  .rate {
    margin-bottom: 3rem !important;
  }
}
</style>
