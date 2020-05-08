<template>
  <section id="filterSection">
    <div class="filter-sec pl-4 pr-lg-5 pr-3 py-3 mt-5 col-12 px-0 rounded">
      <p class="title font-weight-bold text-center font-16">Filter</p>
      <div class="mb-2">
        <p class="text-secondary font-14 mb-1">Rate</p>
        <div class="px-2">
          <div v-for="i in 5" :key="i" class="my-1 pointer d-flex justify-content-between">
            <div @click="filterRate.push((6-i))">
              <star-rating
                :active-color="filterRate.includes((6-i)) ? '#3E82F7' : '#FFB900'"
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
            <div class="d-flex justify-content-between pointer">
              <div @click="filterType.push('scubaDiving')">
                <scupeicon :color="filterType.includes('scubaDiving') ? '#3e82f7' : '#80878d'" class="pr-2" />
                <span :class="filterType.includes('scubaDiving') ? 'text-primary' : '#777'">scuba diving</span>
              </div>
              <div
                v-show="filterType.includes('scubaDiving')"
                @click="filterType = filterType.filter(item => item !== 'scubaDiving')"
                class="text-secondary font-weight-bold"
              >x</div>
            </div>
            <div class="d-flex justify-content-between pointer">
              <div @click="filterType.push('freeDiving')">
                <freeicon class="pr-2" :color="filterType.includes('freeDiving') ? '#3e82f7' : '#80878d'" />
                <span :class="filterType.includes('freeDiving') ? 'text-primary' : '#777'">Free diving</span>
              </div>
              <div
                v-show="filterType.includes('freeDiving')"
                @click="filterType = filterType.filter(item => item !== 'freeDiving')"
                class="text-secondary font-weight-bold"
              >x</div>
            </div>
            <div class="d-flex justify-content-between pointer">
              <div @click="filterType.push('divingCourses')">
                <courseicon :color="'#80878d'" class="pr-2" />
                <span>Diving Courses</span>
              </div>
              <div
                v-show="filterType.includes('divingCourses')"
                @click="filterType = filterType.filter(item => item !== 'divingCourses')"
                class="text-secondary font-weight-bold"
              >x</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import scupeicon from "./scubaIcon";
import freeicon from "./freeIcon";
import courseicon from "./coursesIcon";
export default {
  data() {
    return {
      filterRate: [],
      filterType: []
    };
  },
  components: {
    scupeicon,
    freeicon,
    courseicon
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