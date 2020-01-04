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
    <p class="border-top py-3 mb-0 fontSM pointer" @click="filterFeeds">
      <span v-if="!myFeeds">my feeds</span>
      <span v-if="myFeeds">all feeds</span>
    </p>
    <p class="border-top py-3 mb-0 fontSM pointer" @click="filterActivity">
      <span v-if="!myActivity">My activity</span>
      <span v-if="myActivity">all activity</span>
    </p>
  </section>
</template>

<script>
import editPersonalInfo from "./editPersonalInfo";
import reviews from "./reviews";
export default {
  components: {
    editPersonalInfo,
    reviews
  },
  computed: {
    myFeeds() {
      return this.$store.getters.myFeeds;
    },
    myActivity() {
      return this.$store.getters.myActivity;
    }
  },
  methods: {
    filterFeeds() {
      this.$store.dispatch("FILTERFEEDS");
      this.$scrollTo("#app");
      this.$toasted.success("done");
    },
    filterActivity() {
      this.$store.dispatch("FILTERACTIVITY");
      this.$scrollTo("#app");
      this.$toasted.success("done");
    }
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