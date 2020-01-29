<template>
  <section id="comments" v-if="comments">
    <div class="card" v-for="(comment , i) in comments" :key="i">
      <div class="d-flex">
        <div>
          <img
            :src="comment.user.image ? comment.user.image : require('../../../assets/img/default-avatar.jpg')"
            class="card-img"
            alt="user image"
          />
        </div>
        <div class="col-11 px-1">
          <div class="card-body px-2">
            <div class="d-flex justify-content-between">
              <p
                class="card-title d-inline-block"
              >{{comment.user.firstname}} {{comment.user.lastname}}</p>
              <div v-if="comment.canEdit">
                <b-dropdown
                  size="lg"
                  variant="link"
                  right
                  offset="-20"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template v-slot:button-content>
                    <span>
                      <img
                        class="pointer mb-0"
                        src="../../../assets/icons/3dots.svg"
                        style="width:24px ; height:24px"
                        alt="options"
                      />
                    </span>
                  </template>
                  <b-dropdown-item @click="editState = i">Edit Comment</b-dropdown-item>
                  <b-dropdown-item @click="deleteComment(comment)">Delete Comment</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <div>
              <textarea-autosize
                placeholder="Type something here..."
                :disabled="editState !== i"
                :ref="'commentBody_' + i"
                :class="['comment-body col-11 px-2 bg-light border rounded', {'editable': editState === i}]"
                :value="comment.body"
                :min-height="30"
                :max-height="350"
                @input="(e)=> form.body = e"
              />
              <div class="d-flex justify-content-end" v-if="comment.canEdit">
                <p v-show="editState === i">
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-14 font-weight-light text-danger"
                    @click="cancelEditMode(comment)"
                  >Cancel</b-badge>
                  <b-badge
                    variant="light"
                    class="pointer px-3 mx-2 font-14 font-weight-light text-success"
                    @click="editComment(comment.id)"
                  >Save</b-badge>
                </p>
              </div>
            </div>
            <p class="card-text col-11 font-12 px-1 mb-1 text-right">{{comment.updated_at | moment("from", "now")}}</p>
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
#comments {
  max-height: 465px;
  overflow-y: auto;
  overflow-x: hidden;
  .card {
    border: none;

    .card-img {
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
