<template>
  <div id="spot" v-if="spot">
    <div class="backgroundimg">
      <img src="../../assets/img/Layer1.png" />
    </div>
    <div class="container-fluid">
      <spotInfo :elementData="spot"></spotInfo>
      <review :elementData="spot"></review>
      <spotComment :elementData="spot"></spotComment>
      <location :lat="spot.lat" :lng="spot.lng"></location>
    </div>
  </div>
</template>

<script>
import review from "../../components/application/centers/review";
import location from "../../components/application/centers/location";
import spotComment from "../../components/application/centers/centerComment";
import spotInfo from "../../components/application/centers/centerInfo";

export default {
  components: {
    review,
    location,
    spotComment,
    spotInfo
  },
  computed: {
    spot() {
      return this.$store.getters.spot;
    }
  },
  mounted() {
    this.$store.dispatch("SPOT", this.$route.params.id);
    // this.spot();
  }
  // methods: {
  //   spot() {
  //     return this.$store.getters.spot;
  //   }
  // }
};
</script>

<style lang="scss" scoped>
#spot {
  background-color: #fafafb;
  color: #00223c;

  img {
    width: 100%;
    height: 30%;
  }

  .container-fluid {
    width: 80%;
    padding: 60px 65px;
    background-color: #fff;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);

    h2 {
      margin: 20px;
    }

    hr {
      margin: 10px 0px;
    }

    p {
      margin: 10px 20px;
    }
    .service img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>

