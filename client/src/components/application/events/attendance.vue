<template>
  <section id="attendance">
    <div class="d-flex pt-1 pb-2 border-bottom" v-if="event">
      <div class="col-6 pl-0 my-2 d-flex align-items-baseline">
        <div>
          <img class="mr-3" src="../../../assets/icons/social.svg" alt />
        </div>
        <div>
          <p class="font-weight-bold font-14">Attendees ({{event.rsvp_count}})</p>
          <div class="col-11 px-0 d-flex">
            <div v-for="(attendee, i) in event.rsvp" :key="i" class="attendee rounded-circle overflow-hidden pointer">
                <b-tooltip :target="'attendee_' + i" variant="secondary" placement="right">{{ attendee.firstname + ' ' + attendee.lastname + ' ' + '( ' + attendee.email + ' )' }}</b-tooltip>
                <img
                :id="'attendee_' + i"
                  class="mb-2"
                  :src="attendee.image"
                  alt="attendee"
                />
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 pl-0 mt-2 d-flex">
        <div>
          <p class="font-weight-bold font-14">Organizer</p>
          <div class="col-11 px-0">
          <div class="attendee rounded-circle overflow-hidden pointer">
            <b-tooltip target="organizer" variant="secondary" placement="right">{{ event.organizer.firstname + ' ' + event.organizer.lastname + ' ' + '( ' + event.organizer.email + ' )' }}</b-tooltip>
              <img
                id="organizer"
                class="mb-2"
                :src="event.organizer.image"
                alt="attendee"
              />
          </div>
          </div>
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

<style lang="scss" scoped>
#attendance {
  .attendee {
    margin-right: -5px;
    box-shadow: 1px 1px 1px #aaa;
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>