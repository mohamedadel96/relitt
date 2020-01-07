<template>
  <section id="filterSection">
    <div class="filter-sec pl-4 pr-5 pt-4 col-12 px-0 rounded">
      <p class="title font-weight-bold text-center fontMD">Filter</p>
      <div class="mb-2">
        <p class="text-secondary fontSM mb-1">Rate</p>
        <div class="px-2">
          <div class="my-1">
            <star-rating :star-size="20" :show-rating="false" read-only :rating="5" />
          </div>
          <div class="my-1">
            <star-rating :star-size="20" :show-rating="false" read-only :rating="4" />
          </div>
          <div class="my-1">
            <star-rating :star-size="20" :show-rating="false" read-only :rating="3" />
          </div>
          <div class="my-1">
            <star-rating :star-size="20" :show-rating="false" read-only :rating="2" />
          </div>
          <div class="my-1">
            <star-rating :star-size="20" :show-rating="false" read-only :rating="1" />
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
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#filterSection {
  .filter-sec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
  }
}
</style>