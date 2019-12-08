<template>
  <section id="eventCards">
    <div class="cards" v-if="events">
      <div
        class="card border-0 rounded d-flex flex-nowrap flex-row mb-3"
        v-for="(event,i) in events"
        :key="i"
      >
        <div class="image col-4 px-0">
          <img
            class="p-3"
            src="https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=ivjB_LLa"
            alt="card image"
          />
        </div>
        <div class="col-8 px-0 mt-3 d-flex flex-wrap align-items-between">
          <div class="desc d-flex justify-content-between">
            <div class="col-10">
              <p class="mb-0 font-weight-bold fontSM">{{event.title}}</p>
              <p class="mb-2 text-secondary fontXS">Bedforeshine</p>
              <p
                class="mb-0 text-secondary fontXS"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolor eaque tempore earum placeat voluptatum at, aspernatur animi quibusdam id,</p>
            </div>
            <div class="mr-3 text-center">
              <div>
                <p class="fontMD font-weight-bold num">{{event.start_date | moment('D')}}</p>
                <p
                  class="fontCS font-weight-bold mb-0 text-uppercase"
                >{{event.start_date | moment('MMM')}}</p>
                <p class="fontXXS text-secondary">{{event.start_date | moment('h a')}}</p>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-between align-items-end">
            <p class="col-5 mb-0 text-secondary fontXS">
              <span>13</span> attendance
            </p>
            <router-link
              class="mr-3 btn btn-primary btn-block py-2"
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
    return {
      filter: {
        page: 1
      }
    };
  },
  computed: {
    events() {
      return this.$store.getters.events;
    }
  },
  methods: {
    moreFeeds(state) {
      this.$store.dispatch("EVENTS", this.filter).then(res => {
        if (res !== "end") {
          this.filter.page += 1;
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
          object-fit: cover;
        }
      }

      .desc {
        .num {
          margin-bottom: -3px;
        }
      }
    }
  }
}
</style>