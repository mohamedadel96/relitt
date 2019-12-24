<template>
  <div id="addActivity">
    <img class="ml-2 pointer" v-b-modal.addActivity src="../../../assets/icons/navPlus.svg" alt />
    <b-modal id="addActivity" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#addActivity {
    img {
        outline: none
    }

    .modal-dialog {
        margin: 76px 10px 0 auto
    }
    .modal-content {
        border: none
    }
}
</style>