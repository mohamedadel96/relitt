<template>
  <section id="profileSettings">
    <slot></slot>
    <b-modal id="profileSettings" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="py-3 mb-0 fontSM pointer" @click="openPersonalInfo">Edit personal Info</p>
      <p class="border-top py-3 mb-0 fontSM pointer">Manage notification</p>
      <p class="border-top py-3 mb-0 fontSM pointer">Change password</p>
      <p class="border-top pt-3 pb-2 mb-0 fontSM pointer text-danger">LOGOUT</p>
    </b-modal>
  </section>
</template>

<script>
import { Bus } from "../../../main";
export default {
  methods: {
    openPersonalInfo() {
      Bus.$emit("openPersonalInfo");
    }
  }
};
</script>

<style lang="scss">
#profileSettings {
  @media (min-width: 576px) {
    .modal-dialog {
      margin: 80px 10px 0 auto;
      position: relative;
      outline: none;
    }
    .menu-item {
      outline: none;
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