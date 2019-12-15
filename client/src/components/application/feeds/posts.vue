<template>
  <section id="posts">
    <div v-if="feeds.length">
      <div class="post rounded" v-for="(feed,i) in feeds" :key="i" data-aos="zoom-in">
        <div class="post-info px-3 mt-3 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center py-2">
            <img
              class="border rounded-circle mr-3"
              :src="feed.user.image"
              alt="friend profile picture"
            />
            <div>
              <p class="name font-weight-bold fontSM">{{feed.user.firstname}} {{feed.user.lastname}}</p>
              <p class="mb-0 job fontCS">{{feed.created_at | moment("from", "now")}}</p>
            </div>
          </div>
          <div>
            <span>
              <img
                class="pointer"
                src="../../../assets/icons/shareIco.svg"
                style="width:24px ; height:24px"
                alt
              />
            </span>
          </div>
        </div>

        <div class="post-media mb-3">
          <img
            class="st-pic col-12 px-0"
            v-if="feed.images.length"
            :src="feed.images[0].url"
            alt="post picture"
          />
          <div class="pics d-flex" v-if="feed.images.length - 1 > 0">
            <div
              :class="[feed.images.length - 1 == 1 ? 'col-12' : '', feed.images.length - 1 == 2 ? 'col-6' : '', feed.images.length - 1 > 2 ? 'col-4' : '']"
            >
              <img
                class="col-12 px-0"
                v-if="feed.images[1]"
                :src="feed.images[1].url"
                alt="post picture"
              />
            </div>

            <div :class="[feed.images.length - 2 == 1 ? 'col-6' : 'col-4']">
              <img
                class="col-12 px-0"
                v-if="feed.images[2]"
                :src="feed.images[2].url"
                alt="post picture"
              />
            </div>
            <div class="col-4">
              <img
                class="col-12 px-0"
                v-if="feed.images[3]"
                :src="feed.images[3].url"
                alt="post picture"
              />
              <div
                class="imagesNum fontXXL font-weight-bold"
                v-if="feed.images.length - 4"
              >+ {{feed.images.length - 4}}</div>
            </div>
          </div>
        </div>

        <div class="post-decription px-3">
          <p class="description fontCS">{{feed.body}}</p>
          <div class="details d-flex">
            <p class="mb-0 fontXS">
              <span>{{feed.likes_count}}&nbsp;</span>
              <span>Likes</span>
            </p>
            <p class="px-2 mb-0">-</p>ب
            <p class="mb-0 fontXS">
              <span>22&nbsp;</span>
              <span>Comments</span>
            </p>
          </div>
        </div>

        <hr class="border mx-3 my-1" />

        <div class="d-flex col-12 px-0 text-center">
          <div class="col-6 py-2 px-0 post-options fontSM font-weight-bold">
            <img src="../../../assets/img/icon/Icon - Thumbs Up - Dark.png" class="mr-1 mb-1" /> Like
          </div>
          <div class="col-6 py-2 px-0 post-options fontCS">
            <img src="../../../assets/img/icon/round-comment-24px.png" class="mr-1" />Comment
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="moreFeeds"></infinite-loading>
  </section>
</template>

<script>
export default {
  computed: {
    feeds() {
      return this.$store.getters.feeds;
    }
  },
  methods: {
    moreFeeds(state) {
      this.$store.dispatch("FEEDS").then(res => {
        if (res !== "end") {
          state.loaded();
        } else {
          state.complete();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#posts {
  .post {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;

    .post-info {
      img {
        width: 60px;
        height: 60px;
      }

      .name {
        margin-bottom: -5px;
      }

      .job {
        color: $gray;
        opacity: 0.7;
      }
    }

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

    .post-decription {
      .description {
        color: $gray;
      }

      .details {
        color: $gray;
        opacity: 0.6;
      }
    }

    .post-options {
      color: $gray;
      opacity: 0.7;
    }
  }
}
</style>