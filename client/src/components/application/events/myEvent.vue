<template>
  <div v-if="myEvents">
    <div v-for="(event , i ) in  myEvents.slice(0,3)" :key="i">
      <section @click="$router.push('/app/events/' + event.id)" id="myEvent" class="mb-3">
        <div class="head ml-3 mt-2 mb-0">
          <p class="title font-weight-bold font-16">{{event.title}}</p>
          <p class="mb-2 text-secondary font-12 font-weight-bold">{{event.location_name}}</p>
        </div>
        <div class="image">
          <img
            :src="event.image ? event.image : '../../assets/img/Layer1.png'"
            alt="event image"
          />
        </div>
        <div class="timing d-flex align-items-center">
          <div class="col-3 px-0 pt-3 text-center">
            <p class="font-18 font-weight-bold num">{{event.start_date | moment('D')}}</p>
            <p class="font-14 font-weight-bold mb-0">{{event.start_date | moment('MMM')}}</p>
            <p class="font-12 text-secondary font-weight-bold">{{event.start_date | moment('h a')}}</p>
          </div>
          <div class="col-9 d-flex align-items-between flex-wrap justify-content-around">
            <p class="col-12 desc px-0 my-2 text-secondary font-12">{{event.description}}</p>
            <p class="col-12 px-0 text-secondary font-weight-bold font-12 mb-2">13 attendance !!</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    myEvents() {
      return this.$store.getters.myEvent;
    }
  }
};
</script>

<style lang="scss" scoped>
#myEvent {
  background: $background_white;
  overflow: hidden;
  box-shadow: 1px 1px 4px #ddd;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 4px #aaa;
  }
  .head {
    p {
      &.title {
        letter-spacing: 0.7px;
        word-spacing: 0.8px;
        margin-bottom: -2px;
      }
    }
  }
  .image {
    height: 150px;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .timing {
    .num {
      margin-bottom: -3px;
    }
    .desc {
      height: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>