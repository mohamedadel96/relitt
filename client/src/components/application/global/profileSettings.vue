<template>
  <section id="profileSettings">
    <slot></slot>
    <b-modal
      id="profileSettings"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >profile setting</b-modal>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#profileSettings {
  @media (min-width: 576px) {
    .modal-dialog {
      margin: 80px 10px 0 auto;
      position: relative;
    }
    .modal-content {
      border: none;
      &::after {
        content: "";
        width: 15px;
        height: 15px;
        display: block;
        position: absolute;
        top: -7.5px;
        right: 74px;
        background: white;
        transform: rotate(45deg);
        z-index: 1;
      }
    }
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>