<template>
  <div id="center" v-if="center">
    <!-- <div class="backgroundimg">
      <img src="../../assets/img/Layer1.png" />
    </div>-->
    <div class="container-fluid col-lg-10 col-12 px-0">
      <center-carsoule :images="center.images" />
    </div>
    <div class="container-fluid col-lg-10 col-12 py-3 px-md-5 px-3">
      <centerInfo :center="center"></centerInfo>
      <review></review>
      <centerComment></centerComment>
      <location></location>
    </div>
  </div>
</template>

<script>
import review from "../../components/application/centers/review";
import location from "../../components/application/centers/location";
import centerComment from "../../components/application/centers/centerComment";
import centerInfo from "../../components/application/centers/centerInfo";
import centerCarsoule from "../../components/application/centers/centerCarsoule";

export default {
  components: {
    centerCarsoule,
    review,
    location,
    centerComment,
    centerInfo
  },
  computed: {
    center() {
      return this.$store.getters.center;
    }
  },
  created() {
    this.$store.dispatch("CENTER", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#center {
  background-color: #fafafb;
  color: #00223c;

  img {
    width: 100%;
    height: 30%;
  }

  .container-fluid {
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
