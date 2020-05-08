<template>
  <div class="d-flex">
    <div class="text-center my-3 col-6 px-2">
      <div class="bg-white p-3 rounded">
        <p class="text-secondary">Awesome work John!</p>
        <p class="text-primary mb-0 font-weight-bolder h4">89</p>
        <p class="text-primary font-weight-bold">diving hours</p>
        <img src="../../../../assets/img/celebrate.svg" alt="img" />
        <p class="text-secondary mt-4">You have done total 89 hours diving</p>
      </div>
    </div>
    <div class="col-6 my-3 px-2">
      <div class="p-2 bg-white rounded">
        <p class="text-primary">Type of diving</p>
        <div class="d-flex">
          <div>
            <!-- <img src="./image/Image 60.png" alt="img" style="width: 100%; height: 180px;" /> -->
          </div>
          <div class="d-flex flex-wrap align-items-end">
            <div class="w-100">
              <div class="d-flex align-items-center">
                <!-- <img src="./image/Component 2.svg" alt="icon" /> -->
                <p class="mb-0 text-secondary">Diving(200)</p>
              </div>
              <div class="d-flex align-items-center">
                <!-- <img src="./image/Component 2.svg" alt="icon" /> -->
                <p class="mb-0 text-secondary">Safari(50)</p>
              </div>
            </div>
            <chart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chart from "./googleChart";
export default {
  components: {
    chart
  }
};
</script>

<style>
</style>