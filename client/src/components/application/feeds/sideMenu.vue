<template>
  <section id="sideMenu" class="mt-3">
    <edit-personal-info>
      <div class="menu-item pointer" slot v-b-modal.editPersonalInfo>edit personal info</div>
    </edit-personal-info>
  </section>
</template>

<script>
import editPersonalInfo from "./editPersonalInfo";
export default {
  components: {
    editPersonalInfo
  }
};
</script>

<style lang="scss" scoped>
#sideMenu {
    .menu-item{
        outline: none
    }
}
</style>