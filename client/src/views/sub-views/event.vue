<template>
  <section id="event">
    <div class="backgroundimg">
      <img src="../../assets/img/Layer1.png" />
    </div>
    <div class="container-fluid col-10 p-5">
      <event-info />
      <attendance />
      <comments />
      <add-comment />
    </div>
  </section>
</template>

<script>
import eventInfo from "../../components/application/eventInfo";
import attendance from "../../components/application/attendance";
import comments from "../../components/application/comments";
import addComment from "../../components/application/addComment";

export default {
  components: {
    eventInfo,
    attendance,
    comments,
    addComment
  },
  mounted() {
    this.$store.dispatch("EVENT", this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
#event {
  img {
    width: 100%;
    height: 370px;
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
