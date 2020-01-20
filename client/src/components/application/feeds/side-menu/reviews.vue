<template>
  <section id="reviews" v-if="myReviews">
    <slot></slot>
    <b-modal id="reviews" hide-backdrop content-class="shadow" size="lg" hide-header hide-footer>
      <p class="font-18 mb-4 font-weight-bold text-center">My reviews</p>
      <div v-for="(review, i) in myReviews" :key="i">
        <p class="mb-0">{{review.center.name}}</p>
        <star-rating
          class="mb-1"
          active-color="#FFB900"
          :star-size="16"
          :show-rating="false"
          read-only
          :rating="review.general_rate"
        />
        <read-more
          more-str="read more..."
          :text="review.comment"
          less-str="read less"
          :max-chars="200"
          class="description font-14 ة"
        ></read-more>
        <p class="font-12 text-secondary">{{review.updated_at | moment("from", "now") }}</p>
        <hr class="col-8 mx-0 my-1" v-if="myReviews.length -1 !== i" />
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  computed: {
    myReviews() {
      return this.$store.getters.myReviews;
    }
  },
  created() {
    this.$store.dispatch("MYREVIEWS");
  }
};
</script>

<style lang="scss">
#reviews {
  .modal-dialog {
    margin: 80px auto;
    position: relative;
  }
  .modal-content {
    border: none;
  }

  .description {
    p {
      margin-bottom: 0;
    }
  }
}
</style>