import Vue from "vue";
import Toasted from "vue-toasted";

Vue.use(Toasted, {
  position: "bottom-right",
  theme: "bubble",
  keepOnHover: true,
  duration: 4000,
  className: "toast",
  iconPack: "label"
});