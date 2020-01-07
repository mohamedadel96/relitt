<template>
  <section id="filterSection">
    <div class="filter-sec pl-4 pr-5 py-3 mt-5 col-12 px-0 rounded">
      <p class="title font-weight-bold text-center fontMD">Filter</p>
      <div class="mb-2">
        <p class="text-secondary fontSM mb-1">Rate</p>
        <div class="px-2">
          <div class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push(5)">
              <star-rating
                :active-color="filterRate.includes(5) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="5"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes(5)"
              @click="filterRate = filterRate.filter(num => num !== 5)"
            >x</div>
          </div>
          <div class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push(4)">
              <star-rating
                :active-color="filterRate.includes(4) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="4"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes(4)"
              @click="filterRate = filterRate.filter(num => num !== 4)"
            >x</div>
          </div>
          <div class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push(3)">
              <star-rating
                :active-color="filterRate.includes(3) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="3"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes(3)"
              @click="filterRate = filterRate.filter(num => num !== 3)"
            >x</div>
          </div>
          <div class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push(2)">
              <star-rating
                :active-color="filterRate.includes(2) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="2"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes(2)"
              @click="filterRate = filterRate.filter(num => num !== 2)"
            >x</div>
          </div>
          <div class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push(1)">
              <star-rating
                :active-color="filterRate.includes(1) ? '#0062cc' : '#ffd700'"
                :star-size="20"
                :show-rating="false"
                read-only
                :rating="1"
              />
            </div>
            <div
              class="text-secondary font-weight-bold"
              v-show="filterRate.includes(1)"
              @click="filterRate = filterRate.filter(num => num !== 1)"
            >x</div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-secondary fontSM mt-4 mb-1">Service</p>
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
#filterSection {
  .filter-sec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
    .vue-star-rating-star {
      padding: 0 1.5px;
    }
  }
}
</style>