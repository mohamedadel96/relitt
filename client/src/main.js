import Vue from "vue";
import store from "./store";
import router from './router'
import App from "./App.vue";
import Aos from "aos";
import './plugins/routerGuard.js'
import './plugins/bootstrap.js'
import './plugins/moment.js'
import './plugins/flatPickr.js'
import './plugins/vueScrollTo.js'
import './plugins/infiniteLoading.js'
import './plugins/toasted.js'
import './plugins/textareaAutosize.js'
import './plugins/vuelidation.js'
import './plugins/vueGooglePlaces.js'
import './plugins/vueStar'
import "aos/dist/aos.css";

Vue.config.productionTip = false;

export const Bus = new Vue();

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
