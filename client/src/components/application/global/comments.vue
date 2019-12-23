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
            <div>
              <textarea-autosize
                placeholder="Type something here..."
                :disabled="!editState"
                ref="commentBody"
                :class="['comment-body col-12 px-2', {'editable': editState}]"
                v-model="form.body"
                :min-height="30"
                :max-height="350"
                @input="(e)=> this.form.body = e"
              />
              <div class="d-flex justify-content-end" v-if="comment.canEdit">
                <h5 v-show="!editState">
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-primary"
                    @click="openEditMode"
                  >Edit</b-badge>
                  <b-badge
                    variant="light"
                    class="pointer px-3 font-weight-light text-danger"
                    @click="deleteComment"
                  >Delete</b-badge>
                </h5>
                <h5 v-show="editState">
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-danger"
                    @click="cancleEditMode"
                  >Cancle</b-badge>
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-weight-light text-success"
                    @click="editComment"
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
  props: ["comment"],
  data() {
    return {
      form: {
        body: ""
      },
      editState: false
    };
  },
  watch: {
    comment: {
      immediate: true,
      handler(val) {
        this.form.body = val.body;
      }
    }
  },
  methods: {
    editComment() {
      try {
        this.$store
          .dispatch("EDITCOMMENT", {
            comment: this.$props.comment,
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
    deleteComment() {
      try {
        this.$store.dispatch("DELETECOMMENT", this.$props.comment).then(res => {
          this.$toasted.info(res);
        });
      } catch (error) {
        this.$toasted.error("error");
      }
    },
    openEditMode() {
      this.editState = true;
      setTimeout(() => {
        this.$refs.commentBody.$el.focus();
      }, 100);
    },
    cancleEditMode() {
      this.editState = false;
      this.form.body = this.$props.comment.body;
    }
  }
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
