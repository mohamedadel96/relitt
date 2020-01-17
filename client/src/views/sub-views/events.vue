<template>
  <section id="events">
    <div class="d-flex justify-content">
      <div class="col-md-3 px-4 mt-4 overflow-hidden">
        <div>
          <createEvent />
        </div>
        <p class="text-secondary text-center font-12">Your upcoming events</p>
        <div>
          <myEvent />
        </div>
      </div>
      <div class="col-md-9">
        <div class="tabs d-flex mt-4 justify-content-center mr-5 font-16">
          <p class="mr-5">
            <router-link class="active" to="/app/events">Events</router-link>
          </p>
          <p class="mr-5">
            <router-link to="/app/centers">Centers</router-link>
          </p>
        </div>
        <div class="col-md-10 col-12 px-5">
          <div class="search rounded mb-3 text-center font-16">
            <place-autocomplete-field
              v-model="place"
              name="place"
              api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
              placeholder="Enter an an address, zipcode, or location"
            ></place-autocomplete-field>
          </div>
          <event-cards />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import myEvent from "../../components/application/events/myEvent";
import eventCards from "../../components/application/events/eventCards";
import createEvent from "../../components/application/events/createEvent";

export default {
  components: {
    myEvent,
    eventCards,
    createEvent
  },
  data() {
    return {
      place: ""
    };
  },
  created() {
    this.$store.dispatch("EVENTS");
  }
};
</script>

<style lang="scss">
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

  .autocomplete-field {
    .autocomplete-list-item > a {
      padding: 15px;
    }
    .form-group {
      margin-bottom: 0;

      input {
        text-align: center;
        border: none;
        padding: 1em 0;
        outline: none;
        &:focus,
        &:active {
          outline: none;
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
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
