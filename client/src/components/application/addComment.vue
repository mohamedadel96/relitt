<template>
  <section id="addComment" class="d-flex justify-content-center mx-4 mt-3">
    <div class="body col-12 px-3 py-3 rounded">
      <textarea class="border-0 col-12 px-0" placeholder="type your comment here" rows="3"></textarea>
      <button class="btn btn-primary btn-block">com ment</button>
    </div>
  </section>
</template>

<script>
export default {};
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