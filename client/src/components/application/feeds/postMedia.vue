<template>
  <div class="post-media mb-3" v-if="media.length">
    <viewer>
      <div>
        <img
          class="st-pic col-12 px-0 pointer"
          v-if="media[0].type == 'image'"
          :src="media[0].value.url"
          alt="post picture"
        />
        <video
          controlslist="nodownload"
          disablepictureinpicture
          v-if="media[0].type == 'video'"
          class="st-pic col-12 px-0 pointer"
          controls
        >
          <source :src="media[0].value.url" type="video/mp4" />
          <source :src="media[0].value.url" type="video/ogg" />Your browser does not support the video tag.
        </video>
      </div>
      <div class="pics d-flex" v-if="media.length - 1 > 0">
        <div
          :class="[media.length - 1 == 1 ? 'col-12' : '', media.length - 1 == 2 ? 'col-6' : '', media.length - 1 > 2 ? 'col-4' : '']"
        >
          <img
            class="col-12 px-0 pointer"
            v-if="media[1] && media[1].type == 'image'"
            :src="media[1].value.url"
            alt="post picture"
          />

          <video
            controlslist="nodownload"
            disablepictureinpicture
            v-if="media[1] && media[1].type == 'video'"
            class="st-pic col-12 px-0 pointer"
            controls
          >
            <source :src="media[1].value.url" type="video/mp4" />
            <source :src="media[1].value.url" type="video/ogg" />Your browser does not support the video tag.
          </video>
        </div>

        <div :class="[media.length - 2 == 1 ? 'col-6' : 'col-4']">
          <img
            class="col-12 px-0 pointer"
            v-if="media[2] && media[2].type == 'image'"
            :src="media[2].value.url"
            alt="post picture"
          />
          <video
            controlslist="nodownload"
            disablepictureinpicture
            v-if="media[2] && media[2].type == 'video'"
            class="st-pic col-12 px-0 pointer"
            controls
          >
            <source :src="media[2].value.url" type="video/mp4" />
            <source :src="media[2].value.url" type="video/ogg" />Your browser does not support the video tag.
          </video>
        </div>

        <div class="col-4">
          <img
            ref="lastImg"
            class="col-12 px-0 pointer"
            v-if="media[3]"
            :src="media[3].value.url"
            alt="post picture"
          />
          <div
            @click="$refs.lastImg.click()"
            class="imagesNum font-24 font-weight-bold pointer"
            v-if="media.length - 4"
          >+ {{media.length - 4}}</div>
        </div>
      </div>

      <img
        v-show="false"
        v-for="(src, i) in media.slice(4, media.length)"
        :src="src.value.url"
        :key="i"
      />
    </viewer>
  </div>
</template>

<script>
export default {
  props: ["images", "videos"],
  data() {
    return {
      media: []
    };
  },
  watch: {
    images: {
      immediate: true,
      handler(val) {
        this.fillMedia();
      }
    },
    videos: {
      immediate: true,
      handler(val) {
        this.fillMedia();
      }
    }
  },
  methods: {
    fillMedia() {
      this.media = [];
      this.$props.videos.map(video => {
        this.media.push({
          type: "video",
          value: video
        });
      });
      this.$props.images.map(image => {
        this.media.push({
          type: "image",
          value: image
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.post-media {
  .st-pic {
    height: 240px;
    object-fit: cover;
  }

  .pics {
    padding-top: 2px;
    overflow: hidden;

    div {
      height: 240px;
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