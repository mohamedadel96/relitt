<template>
  <section id="centerInfo">
    <div v-if="center">
      <h3 class="font-22 font-weight-bold border-bottom py-3 mb-0">{{center.name}}</h3>

      <div class="py-3 border-bottom d-flex align-items-start">
        <div class="d-flex">
          <img class="mt-1 mr-3" src="../../../assets/icons/desc-ico.svg" alt />
        </div>
        <div>
          <p class="mb-1 font-weight-bold font-14">Descrition</p>
          <p class="mb-0 font-14 text-secondary">{{center.description}}</p>
        </div>
      </div>

      <div class="service py-3 border-bottom d-flex align-items-start">
        <div class="d-flex">
          <img class="mt-1 mr-3" src="../../../assets/icons/list.svg" alt />
        </div>
        <div class="d-flex flex-wrap col-12 px-0">
          <p class="mb-3 font-weight-bold font-14 col-12 px-0">Service</p>
          <div class="d-flex flex-wrap col-12 px-0">
            <div
              class="col-6 d-flex align-items-center px-0 my-2"
              v-for="(service , i) in center.services"
              :key="i"
            >
              <img class="icon" :src="service.image" :alt="service.name" />
              <p class="px-md-5 px-2 mb-0">{{service.name}}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["center"]
};
</script>

<style lang="scss">
#centerInfo {
  .service .icon {
    width: 25px;
    height: 25px;
  }
}
</style>