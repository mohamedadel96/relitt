<template>
  <section id="events">
    <div class="d-flex justify-content">
      <div class="col-md-3 px-4 mt-4 overflow-hidden">
        <div>
          <!-- <button class="btn btn-primary btn-block mb-2 py-2 fontXS"></button> -->
          <createEvent>
          </createEvent>
        </div>
          <p class="text-secondary text-center fontXS">Your upcoming events</p>
        <div>
          <myEvent/>
        </div>
      </div>
      <div class="col-md-9">
        <div class="tabs d-flex mt-4 justify-content-center mr-5 fontSM">
          <p class="mr-5">
            <router-link class="active" to="/app/events">Events</router-link>
          </p>
          <p class="mr-5">
            <router-link to="/app/centers">Centers</router-link>
          </p>
        </div>
        <div class="col-md-10 col-12 px-5">
          <div class="search rounded py-3 mb-3 text-center fontSM">Alexandria, Egypt</div>
          <event-cards />
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
import myEvent from "../../components/application/myEvent";
import eventCards from "../../components/application/eventCards";
import createEvent from "../../components/application/createEvent";

export default {
  components: {
    myEvent,
    eventCards,
    createEvent
  },
  mounted() {
    this.$store.dispatch("EVENTS");
  }
};
</script>

<style lang="scss" scoped>
#events {
  .tabs {
    p {
      a {
        text-decoration: none;
        color: $gray;
        letter-spacing: 1px;

        &.active {
          border-bottom: 3px solid $blue;
          color: $blue;
          font-weight: bold;
        }
      }
    }
  }

  .search {
    background: $background_white;
    box-shadow: 3px 3px 4px #ddd;
  }
}
</style>
