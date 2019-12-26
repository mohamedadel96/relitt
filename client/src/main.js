import Vue from "vue";
import store from "./store";
import router from './router'
import App from "./App.vue";
import Vuelidate from "vuelidate";
import TextareaAutosize from "vue-textarea-autosize";
import Aos from "aos";
import './plugins/routerGuard.js'
import './plugins/bootstrap.js'
import './plugins/flatPickr.js'
import './plugins/vueScrollTo.js'
import './plugins/infiniteLoading.js'
import './plugins/toasted.js'
import "aos/dist/aos.css";

import SweetModal from "sweet-modal-vue/src/plugin.js";

Vue.use(SweetModal);
Vue.use(TextareaAutosize);
Vue.use(require("vue-moment"));
Vue.use(Vuelidate);
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
