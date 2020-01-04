<template>
  <section id="feeds">
    <create-post v-show="!myActivity" @clearPostData="postData = null" :postData="postData" />
    <button v-show="myActivity" class="btn btn-primary btn-block">Create activity</button>
    <posts @editPost="postData = $event" />
  </section>
</template>

<script>
import createPost from "./createPost";
import posts from "./posts";
export default {
  data() {
    return {
      postData: null
    };
  },
  components: {
    createPost,
    posts
  },
  computed: {
    myActivity() {
      return this.$store.getters.myActivity;
    }
  }
};
</script>

<style lang="scss" scoped>
#feeds {
  position: relative;
  z-index: 1;
}
</style>
