<template>
  <section id="events">
    <div class="d-flex justify-content">
      <div class="col-xl-3 col-lg-4 d-md-block d-none px-lg-4 px-3 mt-4 overflow-hidden">
        <div>
          <createEvent />
        </div>
        <p class="text-secondary text-center font-12">Your upcoming events</p>
        <div>
          <myEvent />
        </div>
      </div>
      <div class="col-md-8 col-12 px-0">
        <div class="tabs d-flex mt-4 px-2 justify-content-md-center justify-content-between align-items-baseline font-16">
          <div class="d-flex">
            <p class="mr-4">
              <router-link class="active" to="/app/events">Events</router-link>
            </p>
            <p class="mr-4">
              <router-link to="/app/centers">Centers</router-link>
            </p>
          </div>
          <div class="d-md-none d-block">
            <button class="btn btn-outline-primary my-3" @click="openModal('openCreateEvent')">Create event</button>
          </div>
        </div>
        <div class="col-xl-11 col-12 px-xl-4 px-lg-3 px-2">
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
import {Bus} from '../../main'
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
  methods: {
    openModal(name) {
      Bus.$emit(name)
    }
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
