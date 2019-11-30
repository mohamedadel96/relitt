<template>
  <div id="center" v-if="center">
    <div class="backgroundimg">
      <img src="../../assets/img/Layer1.png" />
    </div>
    <div class="container-fluid">
      <h2
        class="text-capitalize font-weight-bold"
      >From citadel to qitbay to al montazah walking tour</h2>
      <hr />
      <diV class="Ddescrition">
        <div class="icon"></div>
        <p class="font-weight-bold">Descrition</p>
        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad consequuntur quam suscipit mollitia dicta quae minima quo quas perferendis molestiae dolorum, at magni optio laudantium harum commodi, dolorem culpa nobis? lconsectetur adipisicing elit. Facere molestiae accusantium obcaecati corrupti aperiam maxime, cumque illo fugiat itaque delectus consequuntur hic blanditiis doloremque deserunt nihil laborum consequatur aliquid tenetur!</p>
      </diV>
      <hr />
      <div class="service">
        <p class="text-capitalize font-weight-bold">Services</p>
        <div class="row">
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
          <div class="col-lg-6">
            <p>Scuba diving</p>
          </div>
        </div>
      </div>
      <hr />
      <review></review>
      <location></location>
    </div>
  </div>
</template>

<script>
import review from "../../components/application/review";
import location from "../../components/application/location";

export default {
  components: {
    review,
    location
  },
  computed: {
    center() {
      return this.$store.getters.center;
    }
  },
  mounted() {
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
  }
}
</style>
