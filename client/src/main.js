import Vue from "vue";
import InfiniteLoading from "vue-infinite-loading";
import Vuelidate from "vuelidate";
import Toasted from "vue-toasted";
import VueScrollTo from "vue-scrollto";
import TextareaAutosize from "vue-textarea-autosize";
import Aos from "aos";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SweetModal from "sweet-modal-vue/src/plugin.js";
import './plugins/flatPickr.js'
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "aos/dist/aos.css";

Vue.use(SweetModal);
Vue.use(BootstrapVue);
Vue.use(TextareaAutosize);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1000,
  easing: "ease-out",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.config.productionTip = false;
Vue.use(require("vue-moment"));
Vue.use(InfiniteLoading, {
  props: {
    spinner: "bubbles"
  },
  slots: {
    noMore: "No more Posts"
  }
});

Vue.use(Vuelidate);
Vue.use(Toasted, {
  position: "bottom-right",
  theme: "bubble",
  keepOnHover: true,
  duration: 4000,
  className: "toast",
  iconPack: "label"
});

// router Guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.getToken) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.getToken) {
      next({
        name: "app"
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

new Vue({
  created() {
    Aos.init({
      duration: 1000,
      delay: 100,
      once: true
    });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
