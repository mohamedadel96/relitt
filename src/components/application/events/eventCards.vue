<template>
  <section id="eventCards">
    <b-modal
      id="deleteEvent"
      hide-header
      ok-title="delete"
      ok-variant="danger"
      footer-class="border-0 pt-0"
      @ok="deleteEvent"
    >
      <p>
        Are you sure you want to continue in
        <span class="text-danger">Deleting</span> Event?
      </p>
    </b-modal>
    <div class="cards" v-if="events">
      <div
        class="card border-0 rounded d-flex flex-wrap flex-row mb-3"
        v-for="(event,i) in events"
        :key="i"
      >
        <div class="image col-sm-4 col-12 px-0">
          <img
            class="p-3 pointer"
            :src="event.image ? event.image[0].url : require('@/assets/img/Layer1.png')"
            @click="$router.push('/app/events/' + event.id)"
            alt="card image"
          />
        </div>
        <div class="col-sm-8 col-12 px-0 mt-3 d-flex flex-wrap align-items-between">
          <div class="desc d-flex justify-content-between mb-3 w-100">
            <div class="col-10">
              <p
                class="mb-0 font-weight-bold font-16 pointer"
                @click="$router.push('/app/events/' + event.id)"
              >{{event.title}}</p>
              <p class="mb-2 text-secondary font-12">Bedforeshine</p>
              <p class="description mb-0 text-secondary font-12">{{event.description}}</p>
            </div>
            <div class="text-center d-flex justify-content-between">
              <div>
                <p class="font-18 font-weight-bold num">{{event.start_date | moment('D')}}</p>
                <p
                  class="font-14 font-weight-bold mb-0 text-uppercase"
                >{{event.start_date | moment('MMM')}}</p>
                <p class="font-10 text-secondary">{{event.start_date | moment('h a')}}</p>
              </div>
              <div class="mr-2 ml-1" style="min-width:25px">
                <b-dropdown
                  v-if="event.can_edit"
                  size="lg"
                  variant="link"
                  right
                  offset="-20"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template v-slot:button-content>
                    <span>
                      <img
                        class="pointer mb-0"
                        src="../../../assets/icons/3dots.svg"
                        style="width:24px ; height:24px"
                        alt="options"
                      />
                    </span>
                  </template>
                  <b-dropdown-item @click="editEvent(event)">Edit Event</b-dropdown-item>
                  <b-dropdown-item @click="openDeleteModal(event.id)">Delete Event</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-between align-items-end">
            <p class="col-6 mb-0 text-secondary font-12">
              <span>{{event.rsvp_count}}</span> attendance
            </p>
            <router-link
              class="mr-3 btn btn-primary btn-block py-2"
              :to="'/app/events/' + event.id"
            >Details...</router-link>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="moreEvents"></infinite-loading>
  </section>
</template>

<script>
import { Bus } from "../../../main";
export default {
  data() {
    return {
      eventId: null
    };
  },
  computed: {
    events() {
      return this.$store.getters.events;
    }
  },
  methods: {
    moreEvents(state) {
      this.$store.dispatch("EVENTS").then(res => {
        if (res !== "end") {
          state.loaded();
        } else {
          state.complete();
        }
      });
    },
    openDeleteModal(eventId) {
      this.eventId = eventId;
      this.$bvModal.show("deleteEvent");
    },
    editEvent(event) {
      Bus.$emit("EditEvent", event);
    },
    deleteEvent() {
      try {
        this.$store.dispatch("DELETEEVENT", this.eventId).then(res => {
          this.$toasted.info(res);
        });
      } catch (error) {
        this.$toasted.error("error, please try again later");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#eventCards {
  .cards {
    .card {
      box-shadow: 3px 3px 4px #ddd;
      transition: 0.3s;
      &:hover {
        box-shadow: 5px 5px 7px #aaa;
      }
      .image {
        img {
          width: 100%;
          height: 100%;
          min-height: 250px;
          object-fit: cover;
        }
      }

      .desc {
        .description {
          height: 54px;
          overflow: hidden;
        }
        .num {
          margin-bottom: -3px;
        }
      }
    }
  }
}
</style>