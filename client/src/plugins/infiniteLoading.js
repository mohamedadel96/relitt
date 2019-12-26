import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";

Vue.use(InfiniteLoading, {
    props: {
      spinner: "bubbles"
    },
    slots: {
      noMore: "No more Posts"
    }
  });