<template>
  <section id="event">
    <div v-if="event">
      <div class="col-10 px-0 container-fluid">
        <img :src="event.image ? event.image : require('../../assets/img/Layer1.png')" />
      </div>
      <div class="container-fluid col-lg-10 col-12 py-5 px-md-5 px-3">
        <event-info />
        <attendance />
        <comments :comments="event.comments" />
        <add-comment :eventId="event.id" />
      </div>
    </div>
    <app-footer />
  </section>
</template>

<script>
import eventInfo from "../../components/application/events/eventInfo";
import attendance from "../../components/application/events/attendance";
import comments from "../../components/application/events/comments";
import addComment from "../../components/application/events/addComment";
import appFooter from "../../components/application/global/footer";

export default {
  components: {
    eventInfo,
    attendance,
    comments,
    addComment,
    appFooter
  },
  computed: {
    event() {
      return this.$store.getters.event;
    }
  },
  created() {
    this.$store.dispatch("EVENT", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#event {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  .container-fluid {
    background-color: #fff;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.05);
  }
}
</style>
