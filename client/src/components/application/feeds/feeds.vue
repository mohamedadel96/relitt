<template>
  <section id="feeds">
    <create-post @clearPostData="postData = null" :postData="postData" />
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
  }
};
</script>

<style lang="scss" scoped>
#feeds {
  position: relative;
  z-index: 1;
}
</style>
