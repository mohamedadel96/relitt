<template>
  <section id="profileSettings">
    <slot></slot>
    <b-modal id="profileSettings" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div @click="$bvModal.hide('profileSettings')">
        <p
          class="py-3 mb-0 font-16 pointer"
          @click="openModal('openPersonalInfo')"
        >Edit personal Info</p>
        <p
          class="border-top py-3 mb-0 font-16 pointer"
          @click="openModal('openManageNotifications')"
        >Manage notification</p>
        <p
          @click="openModal('openChangePassword')"
          class="menu-item border-top py-3 mb-0 font-16 pointer"
        >Change password</p>
        <p class="border-top pt-3 pb-2 mb-0 font-16 pointer text-danger" @click="logout">LOGOUT</p>
      </div>
    </b-modal>
    <change-password />
    <manage-notifications />
  </section>
</template>

<script>
import { Bus } from "../../../main";
import changePassword from "./changePassword";
import manageNotifications from "./manageNotifications";
export default {
  components: {
    changePassword,
    manageNotifications
  },
  methods: {
    logout() {
      this.$store.dispatch("LOGOUT");
    },
    openModal(name) {
      Bus.$emit(name);
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
  .modal-content {
    border: none;
    &::after {
      content: "";
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      top: -7.5px;
      right: 78px;
      background: white;
      transform: rotate(45deg);
      z-index: 1;
    }
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }

      @media (max-width: 576px) {
    .modal-dialog {
     margin: 80px 10px 0 10px !important; 
    }
  }
}
</style>