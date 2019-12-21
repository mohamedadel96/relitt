<template>
  <section id="comments" v-if="comment">
    <div class="card">
      <div class="d-flex">
        <div>
          <img :src="comment.user.image" class="card-img" alt="user image" />
        </div>
        <div class="col-11 px-1">
          <div class="card-body px-2">
            <div class="d-flex justify-content-between">
              <p
                class="card-title m-0 d-inline-block"
              >{{comment.user.firstname}} {{comment.user.lastname}}</p>
              <!-- <p class="card-text m-0 fontXS">stars</p> -->
            </div>
            <p class="card-text fontXS px-1 mb-1">{{comment.updated_at | moment("from", "now")}}</p>
            <p class="card-text px-1">{{comment.body}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["comment"]
};
</script>

<style lang="scss" scoped>
#comments {
  .card {
    border: none;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 15px;
    }
  }
}
</style>
