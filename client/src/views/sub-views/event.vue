<template>
  <section id="event">
    <div class="backgroundimg">
      <img src="../../assets/img/Layer1.png" />
    </div>
    <div class="container-fluid col-10 p-5">
      <event-info />
      <attendance />
      <review />
    </div>
  </section>
</template>

<script>
import review from "../../components/application/review";
import eventInfo from "../../components/application/eventInfo";
import attendance from "../../components/application/attendance";

export default {
  components: {
    review,
    eventInfo,
    attendance
  },
  mounted() {
    this.$store.dispatch("EVENT", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#event {
  background-color: #fafafb;
  color: #00223c;

  img {
    width: 100%;
    height: 370px;
    object-fit: cover;
  }

  .container-fluid {
    // padding: 60px 65px;
    background-color: #fff;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
