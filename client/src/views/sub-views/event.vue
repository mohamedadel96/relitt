<template>
  <section id="event">
    <div v-if="event">
      <div class="backgroundimg">
        <img :src="event.image ? event.image : '../../assets/img/Layer1.png'" />
      </div>
      <div class="container-fluid col-10 p-5">
        <event-info />
        <attendance />
        <comments />
        <add-comment />
      </div>
    </div>
  </section>
</template>

<script>
import eventInfo from "../../components/application/events/eventInfo";
import attendance from "../../components/application/events/attendance";
import comments from "../../components/application/global/comments";
import addComment from "../../components/application/global/addComment";

export default {
  components: {
    eventInfo,
    attendance,
    comments,
    addComment
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
