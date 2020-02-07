<template>
  <section id="location">
    <div class="py-3 border-bottom d-flex align-items-start">
      <div class="d-flex">
        <img class="mt-1 mr-3" src="../../../assets/icons/desc-ico.svg" alt />
      </div>
      <div>
        <p class="mb-1 font-weight-bold font-14">Location</p>
      </div>
    </div>
    <location-picker v-if="location.lat !== null && location.lng !== null" v-model="location"></location-picker>
  </section>
</template>

<script>
import { LocationPicker } from "vue2-location-picker";
export default {
  components: { LocationPicker },
  props: ["lat", "lng"],
  data() {
    return {
      location: {
        lat: null,
        lng: null
      }
    };
  },
  watch: {
    lat: {
      immediate: true,
      handler(val) {
        if (this.$props.lat && this.$props.lng) {
          this.location.lat = Number(this.$props.lat);
          this.location.lng = Number(this.$props.lng);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.mapouter {
  position: relative;
  text-align: right;
  height: 250px;
  width: 1080px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 250px;
  width: 1080px;
}
</style>