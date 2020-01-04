<template>
  <section id="sideMenu" class="mt-3">
    <edit-personal-info>
      <p
        class="menu-item mb-0 fontSM py-3 pointer"
        slot
        v-b-modal.editPersonalInfo
      >Edit personal info</p>
    </edit-personal-info>
    <reviews>
      <p class="menu-item border-top py-3 mb-0 fontSM pointer" slot v-b-modal.reviews>Reviews</p>
    </reviews>
    <p class="border-top py-3 mb-0 fontSM">My feeds</p>
    <p class="border-top py-3 mb-0 fontSM">My activity</p>
    <p class="border-top py-3 mb-0 fontSM">My events</p>
  </section>
</template>

<script>
import editPersonalInfo from "./editPersonalInfo";
import reviews from "./reviews";
export default {
  components: {
    editPersonalInfo,
    reviews
  }
};
</script>

<style lang="scss" scoped>
#sideMenu {
  .menu-item {
    outline: none;
  }
}
</style>