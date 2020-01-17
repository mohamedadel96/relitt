<template>
  <div class="post-media mb-3">
    <viewer :images="images">
      <img
        class="st-pic col-12 px-0 pointer"
        v-if="images.length"
        :src="images[0].url"
        alt="post picture"
      />
      <div class="pics d-flex" v-if="images.length - 1 > 0">
        <div
          :class="[images.length - 1 == 1 ? 'col-12' : '', images.length - 1 == 2 ? 'col-6' : '', images.length - 1 > 2 ? 'col-4' : '']"
        >
          <img class="col-12 px-0 pointer" v-if="images[1]" :src="images[1].url" alt="post picture" />
        </div>

        <div :class="[images.length - 2 == 1 ? 'col-6' : 'col-4']">
          <img class="col-12 px-0 pointer" v-if="images[2]" :src="images[2].url" alt="post picture" />
        </div>
        <div class="col-4">
          <img
            ref="lastImg"
            class="col-12 px-0 pointer"
            v-if="images[3]"
            :src="images[3].url"
            alt="post picture"
          />
          <div
            @click="$refs.lastImg.click()"
            class="imagesNum fontXXL font-weight-bold pointer"
            v-if="images.length - 4"
          >+ {{images.length - 4}}</div>
        </div>
      </div>

      <img
        v-show="false"
        v-for="(src, i) in images.slice(4, images.length-1)"
        :src="src.url"
        :key="i"
      />
    </viewer>
  </div>
</template>

<script>
export default {
  props: ["images"]
};
</script>

<style lang="scss" scoped>
.post-media {
  .st-pic {
    height: 230px;
    object-fit: cover;
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
          background: rgba(0, 0, 0, 0.612);
          top: 0;
          left: 0;
          color: $fontColor_white;
          z-index: 1;
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
          transition: 0.4s;
          &:hover {
            background: rgba(0, 0, 0, 0.812);
          }
        }
      }

      img {
        object-fit: cover;
        height: 300px;
      }
    }
  }
}
</style>