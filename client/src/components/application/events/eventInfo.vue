<template>
  <section v-if="events">
    <div >
    <div>
      <h3>{{events.title}}</h3>
      <div class="d-flex justify-conent-between mt-4 mb-5">
        <div class="col-6 pl-0">
          <button class="btn btn-primary btn-block">Joined</button>
        </div>
        <div class="col-6 pr-0">
          <button class="btn btn-outline-primary btn-block">Invite</button>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-between py-2">
      <div class="col-6 px-0 d-flex">
        <p class="mr-3">icon</p>
        <p>{{events.start_date | moment('LL') }} </p>
      </div>
      <div class="col-6 px-0 d-flex">
        <p class="mr-3">icon</p>
        <p>{{events.end_date  | moment('LL')}}</p>
      </div>
    </div>

    <div class="d-flex border-top border-bottom py-2">
      <p class="mr-3">icon</p>
      <p>{{events.location_name}}</p>
    </div>

    <div class="pt-1 pb-2 border-bottom d-flex">
      <div class="d-flex">
        <p class="mr-3">icon</p>
      </div>
      <div>
        <p>address of description</p>
        <p>{{events.description}}</p>
      </div>
    </div>
    </div>
  </section>
</template>

<script>
export default {

  computed:{
    events(){
      return this.$store.getters.event
    }
  }
};
</script>

<style>
</style>