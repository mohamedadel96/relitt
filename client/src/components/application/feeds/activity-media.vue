<template>
  <div class="post-media mb-3">
    <div :class="['st-pic', activity.type_id === 1 ? 'divingBG' : 'scubaBG']">
      <div class="data-container position-relative">
        <div class="temprature text-white fontXS font-weight-bold">24 &#8451;</div>
        <div class="time text-white fontXS font-weight-bold">24 min 12 sec</div>
        
        <div>
          <div class="col-12 d-flex justify-content-center flex-wrap mb-2">
            <img src="../../../assets/icons/line.svg" alt />
          </div>
          <div class="col-12 d-flex justify-content-center flex-wrap">
            <div class="position-relative">
              <img v-if="activity.type_id === 1" src="../../../assets/icons/diving.svg" alt />
              <img v-if="activity.type_id === 2" src="../../../assets/icons/scuba-diving.svg" alt />
              <span class="text-white fontXS font-weight-bold position-absolute px-1 text-nowrap">50 m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <img class="st-pic col-12 px-0" v-if="activity.length" :src="activity[0].url" alt="post picture" />
    <div class="pics d-flex" v-if="activity.length - 1 > 0">
      <div
        :class="[activity.length - 1 == 1 ? 'col-12' : '', activity.length - 1 == 2 ? 'col-6' : '', activity.length - 1 > 2 ? 'col-4' : '']"
      >
        <img class="col-12 px-0" v-if="activity[1]" :src="activity[1].url" alt="post picture" />
      </div>

      <div :class="[activity.length - 2 == 1 ? 'col-6' : 'col-4']">
        <img class="col-12 px-0" v-if="activity[2]" :src="activity[2].url" alt="post picture" />
      </div>
      <div class="col-4">
        <img class="col-12 px-0" v-if="activity[3]" :src="activity[3].url" alt="post picture" />
        <div
          class="activityNum fontXXL font-weight-bold"
          v-if="activity.length - 4"
        >+ {{activity.length - 4}}</div>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["activity"]
};
</script>

<style lang="scss" scoped>
.post-media {
  .st-pic {
    height: 230px;
    .data-container {
        height: 100%;
      .time,
      .temprature {
        position: absolute;
        right: 7px;
        &.time {
          bottom: 5px;
        }
        &.temprature {
          top: 5px;
        }
      }
    }
      &.scubaBG {
        background: url("../../../assets/img/scuba-diving.jpg");
        background-size: cover;
      }
      &.divingBG {
        background: url("../../../assets/img/diving.jpg");
        background-size: cover;
      }
  }

  .pics {
    padding-top: 2px;
    overflow: hidden;

    div {
      height: 130px;
      padding: 0 2px 0 0;
      overflow: hidden;

      &:last-of-type {
        padding: 0;
        position: relative;

        .imagesNum {
          position: absolute;
          top: 0;
          left: 0;
          color: $fontColor_white;
          z-index: 1;
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
        }
      }

      img {
        object-fit: cover;
        max-height: 300px;
      }
    }
  }
}
</style>