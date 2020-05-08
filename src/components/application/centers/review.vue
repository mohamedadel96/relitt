<template>
  <div id="review">
    <div class="col-12 px-0 py-3 text-center mb-lg-3 rate">
      <div class="mb-3">
        <div class="d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <img class="mt-1 mr-3" src="../../../assets/icons/list.svg" alt />
            <p class="mb-0 font-weight-bold font-14">Review</p>
          </div>
          <div>
            <star-rating
              class="mb-1"
              active-color="#FFB900"
              :increment="0.1"
              :star-size="16"
              read-only
              :rating="elementData.avg_rate"
            />
          </div>
        </div>
      </div>
      <div class="props d-flex justify-content-between">
        <div class="prop col-4 px-0">
          <p
            class="font-18 font-weight-bold mb-0 head"
          >{{elementData.avg_price < 2 ? 'Low' : elementData.avg_price < 4 ? 'Medium' : 'High'}}</p>
          <p class="font-14 font-weight-bold text-secondary mb-0">price</p>
        </div>
        <div class="prop col-4 px-0">
          <p
            class="font-18 font-weight-bold mb-0 head"
          >{{elementData.avg_quality < 2 ? 'Low' : elementData.avg_quality < 4 ? 'Medium' : 'High'}}</p>
          <p class="font-14 font-weight-bold text-secondary mb-0">Quality</p>
        </div>
        <div class="prop col-4 px-0">
          <p
            class="font-18 font-weight-bold mb-0 head"
          >{{elementData.avg_rate < 2 ? 'Low' : elementData.avg_rate < 4 ? 'Medium' : 'High'}}</p>
          <p class="font-14 font-weight-bold text-secondary mb-0">General</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    elementData: {
      type: [Object, Array],
      required: true
    }
  },
  computed: {
    // center() {
    //   return this.$store.getters.center;
    // }
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

      .font-18 {
        color: $blue;
      }
    }
  }

  .rate {
    margin-bottom: 3rem !important;
  }
}
</style>
