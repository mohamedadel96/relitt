<template>
  <section id="addComment" class="d-flex justify-content-center mx-4 mt-3">
    <div class="body col-12 px-3 py-3 rounded">
        <textarea-autosize
          placeholder="Type something here..."
          class="border-0 col-12 px-0"
          rows="3"
          :min-height="30"
          :max-height="350"
          v-model="form.body"
        />
      <button class="btn btn-primary btn-block" @click="addComment">comment</button>
    </div>
  </section>
</template>

<script>
export default {
  props: ["eventId"],
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
          .dispatch("ADDEVENTCOMMENT", {
            eventId: this.$props.eventId,
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
    box-shadow: 1px 1px 5px #eee;
    textarea {
      outline: none;
    }
  }
}
</style>