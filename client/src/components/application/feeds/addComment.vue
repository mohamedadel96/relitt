<template>
  <section id="addComment" ref="addComment" class="d-flex justify-content-center mt-1 mb-3">
    <div class="body col-12 px-1 rounded">
      <textarea-autosize
        placeholder="type your comment here..."
        class="rounded border col-12 px-2 py-1"
        v-model="form.body"
        :min-height="85"
        :max-height="400"
      />
      <button class="btn btn-primary btn-block" @click="addComment">comment</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["postId","i"],
  data() {
    return {
      form: {
        body: null
      }
    };
  },
  methods: {
    addComment() {

    let loader = this.$loading.show({
      container: this.$refs.addComment
    });
    this.$store
      .dispatch("ADDCOMMENT", {
        postId: this.$props.postId,
        form: this.form
      })
      .then(res => {
        this.form.body = null;
        this.$root.$emit('bv::toggle::collapse', `comment-${this.$props.i}`)
        this.$toasted.success(res);
        loader.hide()
      }).catch(message => {
          this.$toasted.error(message);
          this.$toasted.info("please type your comment again");
        }).finally(() => {
          loader.hide()
        })
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