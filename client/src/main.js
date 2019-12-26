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
import "aos/dist/aos.css";

import SweetModal from "sweet-modal-vue/src/plugin.js";

Vue.use(SweetModal);
Vue.config.productionTip = false;

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
