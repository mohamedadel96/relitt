<template>
  <section id="eventInfo">
  <div v-if="event">

      <div>
        <h3 class="font-22 font-weight-bold">{{event.title}}</h3>
        <div class="d-flex justify-conent-between mt-4 mb-5">
          <div class="col-12 pl-0">
            <button class="btn btn-primary btn-block">Joined</button>
          </div>
        </div>
      </div>

      <div class="d-flex justify-content-between py-2">
        <div class="col-6 px-0 mb-2 d-flex align-items-center">
          <img class="mr-3" src="../../../assets/icons/calender-icon.svg" alt />
          <p class="mb-0 font-weight-bold font-14">{{event.start_date | moment('LL') }}</p>
        </div>
        <div class="col-6 px-0 d-flex align-items-center">
          <img class="mr-3" src="../../../assets/icons/calender-icon.svg" alt />
          <p class="mb-0 font-weight-bold font-14">{{event.end_date | moment('LL')}}</p>
        </div>
      </div>

      <div class="d-flex border-top border-bottom py-3">
        <img class="mr-3" src="../../../assets/icons/location-picker.svg" alt />
        <p class="mb-0 font-weight-bold font-14">{{event.location_name}}</p>
      </div>

      <div class="py-3 border-bottom d-flex align-items-start">
        <div class="d-flex">
          <img class="mt-2 mr-3" src="../../../assets/icons/desc-ico.svg" alt />
        </div>
        <div>
          <p class="mb-1 font-weight-bold font-14">About this event.</p>
          <p class="mb-0 font-14 text-secondary">{{event.description}}</p>
        </div>
      </div>
        </div>
  </section>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.event;
    }
  }
};
</script>
