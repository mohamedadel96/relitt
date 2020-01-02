<template>
  <section id="editPersonalInfo">
    <slot></slot>
    <b-modal
      id="editPersonalInfo"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >edit personal</b-modal>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#editPersonalInfo {
  .modal-dialog {
    margin: 80px auto 0 10px;
    position: relative;
  }
  .modal-content {
    border: none;
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>