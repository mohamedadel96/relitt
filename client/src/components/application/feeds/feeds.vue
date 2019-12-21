<template>
  <section id="feeds">
    <create-post />
    <posts />
  </section>
</template>

<script>
import createPost from "./createPost";
import posts from "./posts";
export default {
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
