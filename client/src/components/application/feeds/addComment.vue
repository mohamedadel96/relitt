<template>
  <section id="addComment" class="d-flex justify-content-center mt-1 mb-3">
    <div class="body col-12 px-1 rounded">
      <textarea
        class="rounded border col-12 px-2 py-1"
        placeholder="type your comment here"
        rows="3"
        v-model="form.body"
      ></textarea>
      <button class="btn btn-primary btn-block" @click="addComment">comment</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["postId"],
  data() {
    return {
      form: {
        body: null
      }
    };
  },
  methods: {
    addComment() {
      try {
        this.$store
          .dispatch("ADDCOMMENT", {
            postId: this.$props.postId,
            form: this.form
          })
          .then(res => {
            this.form.body = null;
            this.$toasted.success(res);
          });
      } catch (error) {
        this.$toasted.error("error, please try again");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#addComment {
  .body {
    textarea {
      outline: none;
    }
  }
}
</style>