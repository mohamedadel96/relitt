<template>
  <section id="profileSettings">
    <div
      class="d-flex justify-content-center align-items-center rounded-circle overflow-hidden pointer mx-1"
    >
      <img
        class="avatar"
        v-b-modal.profileSettings
        :src="image ? image : require('../../../assets/img/default-avatar.jpg')"
        alt="avatar"
      />
    </div>
    <b-modal id="profileSettings" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div @click="$bvModal.hide('profileSettings')">
        <p
          class="border-bottom py-3 mb-0 font-16 pointer"
          @click="$bvModal.show('friendsModal')"
        >Find Friends</p>
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
  props: ["image"],
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
  .avatar {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
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