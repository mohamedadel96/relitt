<template>
  <section id="eventComments" class="d-flex flex-wrap" v-if="comments">
    <div class="card col-lg-6 col-12 px-0" v-for="(comment , i) in comments" :key="i">
      <div class="d-flex border-bottom m-3">
        <div>
          <img :src="comment.user.image ? comment.user.image : require('../../../assets/img/default-avatar.jpg')" alt="user image" />
        </div>
        <div class="col-11 px-1">
          <div class="card-body px-2">
            <div class="d-flex justify-content-between">
              <p
                class="card-title m-0 d-inline-block"
              >{{comment.user.firstname}} {{comment.user.lastname}}</p>
              <!-- <p class="card-text m-0 font-12">stars</p> -->
            </div>
            <p class="card-text font-12 px-1 mb-1">{{comment.updated_at | moment("from", "now")}}</p>
            <div>
              <textarea-autosize
                placeholder="Type something here..."
                :disabled="editState !== i"
                :ref="'commentBody_' + i"
                :class="['comment-body col-12 px-2', {'editable': editState === i}]"
                :value="comment.body"
                :min-height="30"
                :max-height="350"
                @input="(e)=> form.body = e"
              />
              <div class="d-flex justify-content-end" v-if="comment.canEdit">
                <h5 v-show="editState !== i">
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-primary"
                    @click="editState = i"
                  >Edit</b-badge>
                  <b-badge
                    variant="light"
                    class="pointer px-3 font-weight-light text-danger"
                    @click="deleteComment(comment)"
                  >Delete</b-badge>
                </h5>
                <h5 v-show="editState === i">
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-danger"
                    @click="cancelEditMode(comment)"
                  >Cancel</b-badge>
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-success"
                    @click="editComment(comment.id)"
                  >Save</b-badge>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["comments"],
  data() {
    return {
      form: {
        body: ""
      },
      editState: null
    };
  },
  methods: {
    editComment(id) {
      try {
        this.$store
          .dispatch("EDITCOMMENT", {
            id: id,
            form: this.form
          })
          .then(res => {
            this.editState = false;
            this.$toasted.success(res);
          });
      } catch (error) {
        this.$toasted.error("error");
      }
    },
    deleteComment(comment) {
      try {
        this.$store.dispatch("DELETECOMMENT", comment).then(res => {
          this.$toasted.info(res);
        });
      } catch (error) {
        this.$toasted.error("error");
      }
    },
    cancelEditMode(comment) {
      this.editState = null;
      this.form.body = comment;
    }
  }
};
</script>

<style lang="scss" scoped>
#eventComments {
  max-height: 405px;
  overflow-y: auto;
  overflow-x: hidden;
  .card {
    border: none;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 15px;
    }
    .comment-body {
      border: none;
      outline: none;
      background: none;
      &.editable {
        border: 1px solid #ddd;
        border-radius: 7px;
      }
    }
  }
}
</style>
