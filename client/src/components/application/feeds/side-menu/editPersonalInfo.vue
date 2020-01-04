<template>
  <section id="editPersonalInfo">
    <slot></slot>
    <b-modal id="editPersonalInfo" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p>Edit personal info</p>
      <div class="">
        <img :src="user.image" alt="personal image" />
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.userCard;
    }
  }
};
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