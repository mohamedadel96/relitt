<template>
  <section id="eventCards">
    <div class="cards" v-if="events">
      <div
        class="card border-0 rounded d-flex flex-wrap flex-row mb-3"
        v-for="(event,i) in events"
        :key="i"
      >
        <div class="image col-sm-4 col-12 px-0">
          <img
            class="p-3"
            :src="event.image ? event.image : '../../assets/img/Layer1.png'"
            alt="card image"
          />
        </div>
        <div class="col-sm-8 col-12 px-0 mt-3 d-flex flex-wrap align-items-between">
          <div class="desc d-flex justify-content-between mb-3">
            <div class="col-10">
              <p class="mb-0 font-weight-bold font-16">{{event.title}}</p>
              <p class="mb-2 text-secondary font-12">Bedforeshine</p>
              <p
                class="description mb-0 text-secondary font-12"
              >{{event.description}}</p>
            </div>
            <div class="mr-3 text-center">
              <div>
                <p class="font-18 font-weight-bold num">{{event.start_date | moment('D')}}</p>
                <p
                  class="font-14 font-weight-bold mb-0 text-uppercase"
                >{{event.start_date | moment('MMM')}}</p>
                <p class="font-10 text-secondary">{{event.start_date | moment('h a')}}</p>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-between align-items-end">
            <p class="col-6 mb-0 text-secondary font-12">
              <span>13</span> attendance
            </p>
            <router-link
              class="mr-3 btn btn-outline-primary btn-block py-1"
              :to="'/app/events/' + event.id"
            >Join</router-link>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="moreFeeds"></infinite-loading>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    events() {
      return this.$store.getters.events;
    }
  },
  methods: {
    moreFeeds(state) {
      this.$store.dispatch("EVENTS").then(res => {
        if (res !== "end") {
          state.loaded();
        } else {
          state.complete();
        }
      });
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
        .description{
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