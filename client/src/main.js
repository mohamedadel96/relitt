import Vue from "vue";
import store from "./store";
import router from './router'
import App from "./App.vue";
import Aos from "aos";
import './plugins/routerGuard'
import './plugins/bootstrap'
import './plugins/moment'
import './plugins/flatPickr'
import './plugins/vueScrollTo'
import './plugins/infiniteLoading'
import './plugins/toasted'
import './plugins/textareaAutosize'
import './plugins/vuelidation'
import './plugins/vueGooglePlaces'
import './plugins/starRating'
import './plugins/vViewer'
import './plugins/vueReadMore'
import './plugins/vueToggleButton'
import './plugins/locationPicker'
import './plugins/loadingOverlay'
import './plugins/vueMeta'
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
