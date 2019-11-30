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
              <p class="mb-0 font-weight-bold fontMD">{{event.title}}</p>
              <p class="mb-2 text-secondary fontXS">Bedforeshine</p>
              <p
                class="mb-0 text-secondary fontSM"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati dolor eaque tempore earum placeat voluptatum at, aspernatur animi quibusdam id,</p>
            </div>
            <div class="mr-3 text-center">
              <div>
                <p class="fontXL font-weight-bold num">{{event.start_date | moment('D')}}</p>
                <p
                  class="fontLG font-weight-bold mb-0 text-uppercase"
                >{{event.start_date | moment('MMM')}}</p>
                <p class="fontXS text-secondary">{{event.start_date | moment('h a')}}</p>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-between align-items-end">
            <p class="col-5 mb-0 text-secondary">
              <span>13</span> attendance
            </p>
            <button class="mr-3 btn btn-primary btn-block">Join</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.getters.events;
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