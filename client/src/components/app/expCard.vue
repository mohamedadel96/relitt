<template>
  <section id="expCard" class="pt-2 pb-3 px-3 rounded"  >
    <div >
      <div class="block_1 d-flex pt-4 justify-content-between">
        <p class="title font-weight-bold mb-0 col-9 px-0">Average duration under water</p>
        <div class="time text-center pl-4 mr-5">
          <p class="font-weight-bold">{{parseInt(value)}}</p>
          <p class="mb-0 text-right">{{measure}}</p>
        </div>
      </div>
      <div class="block_2 d-flex justify-content-end pb-2 mt-4">
        <div class="border-right">
          <p class="mb-0 px-2 font-weight-bold">
            <span class="px-1">{{parseInt(minValue)}}</span>
            <span>{{measure}}</span>
          </p>
        </div>
        <div class="border-left">
          <p class="mb-0 px-2 font-weight-bold">
            <span class="px-1">{{parseInt(maxValue)}}</span>
            <span>{{measure}}</span>
          </p>
        </div>
      </div>
    </div>  
    
  </section>
</template>

<script>
export default {
  props:["value" , "minValue" , "maxValue", "measure"],
  methods: {
    round(num){
      return parseInt(num)
    }
  },
 
};
</script>

<style lang="scss" scoped>
#expCard {
  background: $background_white;
  box-shadow: 1px 1px 4px #ddd;
  .block_1 {
    p.title {
      font-size: 22px;
    }
    div.time {
      p {
        color: $blue;
        &:first-of-type {
          font-size: 40px;
          margin-bottom: -12px;
        }

        &:last-of-type {
          margin-top: -10px;
          opacity: 0.7;
        }
      }
    }
  }

  .block_2 {
    p {
      color: #aaa;
      font-size: 14px;
    }
  }
}
</style>