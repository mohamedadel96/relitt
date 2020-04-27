<template>
  <div id="comment" v-if="elementData.reviews">
    <div class="d-flex flex-wrap justify-content-between ml-2">
      <div class="card col-md-5" v-for="(element , i ) in elementData.reviews" :key="i">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img :src="element.user.image" class="card-img" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <h5
                  class="card-title m-0 d-inline-block"
                >{{element.user.firstname}} {{element.user.lastname}}</h5>
                <p class="card-text m-0 d-lg-inline-flex justify-content-end fontXS">stars</p>
              </div>
              <p class="card-text fontXS">{{element.created_at | moment("from", "now") }}</p>
              <p class="card-text">{{ element.comment}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    elementData: {
      type: [Object, Array],
      required: true
    }
  }

  // computed: {
  //   data() {
  //     return this.$store.getters.center;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
#comment {
  .rate {
    margin-bottom: 3rem !important;
  }

  .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 19px;
  }

  .card {
    border: none;
    border-top: 1px solid #ddd;
  }

  .head {
    font-weight: bold !important;
    color: #7052d5 !important;
  }
}
</style>