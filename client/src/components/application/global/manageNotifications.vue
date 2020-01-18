<template>
  <section id="ManageNotifications">
    <slot></slot>
    <b-modal id="ManageNotifications" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div>
        <div>
          <div class="d-flex justify-content-between align-items-center">
            <p>Friends</p>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import { Bus } from "../../../main";
export default {
  mounted() {
    Bus.$on("openManageNotifications", () => {
      this.$bvModal.show("ManageNotifications");
    });
  }
};
</script>

<style lang="scss">
#ManageNotifications {
  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
    outline: none;
  }
  .menu-item {
    outline: none;
  }
  @media (min-width: 576px) {
    .modal-content {
      border: none;
      &::after {
        content: "";
        width: 15px;
        height: 15px;
        display: block;
        position: absolute;
        top: -7.5px;
        right: 31%;
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