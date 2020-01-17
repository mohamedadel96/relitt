<template>
  <section id="profileSettings">
    <slot></slot>
    <b-modal id="profileSettings" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div @click="$bvModal.hide('profileSettings')">
        <p class="py-3 mb-0 font-16 pointer" @click="openPersonalInfo">Edit personal Info</p>
        <p class="border-top py-3 mb-0 font-16 pointer">Manage notification</p>
        <p
          @click="openChangePassword"
          class="menu-item border-top py-3 mb-0 font-16 pointer"
        >Change password</p>
        <p class="border-top pt-3 pb-2 mb-0 font-16 pointer text-danger" @click="logout">LOGOUT</p>
      </div>
    </b-modal>
    <change-password></change-password>
  </section>
</template>

<script>
import { Bus } from "../../../main";
import changePassword from "./changePassword";
export default {
  components: {
    changePassword
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT')
    },
    openPersonalInfo() {
      Bus.$emit("openPersonalInfo");
    },
    openChangePassword() {
      Bus.$emit("openChangePassword");
    }
  }
};
</script>

<style lang="scss">
#profileSettings {
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
        right: 21.7%;
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