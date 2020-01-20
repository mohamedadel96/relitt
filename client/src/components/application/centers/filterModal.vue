<template>
  <section id="filterModal">
  <button class="btn btn-outline-primary my-3" v-b-modal.filterModal>Filter</button>
    <b-modal
      @hide="filterRate = []"
      id="filterModal"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >
    <div class="py-1 col-12 px-2">
      <p class="title font-weight-bold text-center font-16">Filter</p>
      <div class="mb-2">
        <p class="text-secondary font-14 mb-1">Rate</p>
        <div class="px-2">
          <div v-for="i in 5" :key="i" class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push((6-i))">
              <star-rating
                :active-color="filterRate.includes((6-i)) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="(6-i)"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes((6-i))"
              @click="filterRate = filterRate.filter(num => num !== (6-i))"
            >x</div>
          </div>
      
        </div>
      </div>
      <div>
        <p class="text-secondary font-14 mt-4 mb-1">Service</p>
        <div class="px-2">
          <div>
            <div>
              <span class="pr-2">ico</span>
              <span>scupa diving</span>
            </div>
            <div>
              <span class="pr-2">ico</span>
              <span>scupa diving</span>
            </div>
            <div>
              <span class="pr-2">ico</span>
              <span>scupa diving</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </b-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      filterRate: []
    };
  }
};
</script>

<style lang="scss">
#filterModal {
        .vue-star-rating-star {
      padding: 0 1.5px;
    }
    .modal-dialog {
    margin: 160px auto 0 10px;
    position: relative;
  }
  .modal-content {
    border: none;
    &::after {
      content: "";
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      top: -7.5px;
      right: 45px;
      background: white;
      transform: rotate(45deg);
      z-index: 1;
    }
  }
    @media (min-width: 576px) {
    .modal-dialog {
      max-width: 320px;
    }
  }
  @media (max-width: 767px) {
  .modal-dialog {
    margin: 160px 10px 0 auto;
    position: relative;
  }

  }
        @media (max-width: 576px) {
    .modal-dialog {
     margin: 160px 10px 0 10px !important; 
    }
  }
}
</style>