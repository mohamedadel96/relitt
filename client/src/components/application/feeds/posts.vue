<template>
  <section id="posts">
    <b-modal
      id="deletePost"
      hide-header
      ok-title="delete"
      ok-variant="danger"
      footer-class="border-0 pt-0"
      @ok="deletePost"
    >
      <p>
        Are you sure you want to continue in
        <span class="text-danger">Deleting</span> post?
      </p>
    </b-modal>
    <div v-if="feeds.length" data-aos="fade-left">
      <div class="post rounded" v-for="(feed,i) in feeds" :key="i">
        <template v-if="!myFeeds || profile.id === feed.user_id">
          <template v-if="!myActivity || profile.id === feed.user_id && feed.activity">
            <div>
              <div class="post-info px-3 mt-3 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center py-2">
                  <img
                    class="border rounded-circle mr-3"
                    :src="feed.user.image"
                    alt="friend profile picture"
                  />
                  <div>
                    <p
                      class="mb-0 font-weight-bold font-16"
                    >{{feed.user.firstname}} {{feed.user.lastname}}</p>
                    <p class="mb-0 job font-14">{{feed.created_at | moment("from", "now")}}</p>
                  </div>
                </div>
                <div v-if="feed.canEdit">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    right
                    offset="-20"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template v-slot:button-content>
                      <span>
                        <img
                          class="pointer"
                          src="../../../assets/icons/share-ico.svg"
                          style="width:24px ; height:24px"
                          alt
                        />
                      </span>
                    </template>
                    <b-dropdown-item
                      v-if="!feed.activity"
                      @click="$emit('editPost', feed)"
                    >Edit post</b-dropdown-item>
                    <b-dropdown-item
                      v-if="feed.activity"
                      @click="emitEditActivity(feed.activity)"
                    >Edit activity</b-dropdown-item>
                    <b-dropdown-item @click="openDeleteModal(feed.id)">
                      <template v-if="!feed.activity">Delete post</template>
                      <template v-if="feed.activity">Delete activity</template>
                    </b-dropdown-item>
                  </b-dropdown>
                </div>
              </div>

              <div class="post-decription px-4 py-2">
                <read-more
                  more-str="read more..."
                  :text="feed.body"
                  less-str="read less"
                  :max-chars="500"
                  class="description font-14"
                ></read-more>
              </div>

              <template v-if="!feed.activity && feed.images.length">
                <post-media :images="feed.images" />
              </template>

              <template v-if="feed.activity">
                <activity-media :activity="feed.activity" />
              </template>

              <div class="post-decription px-3">
                <div class="details d-flex">
                  <p class="mb-0 font-12">
                    <span>{{feed.likes_count}}&nbsp;</span>
                    <span>Likes</span>
                  </p>
                  <p class="px-2 mb-0">-</p>
                  <p class="mb-0 font-12">
                    <span>{{feed.comments.length}}&nbsp;</span>
                    <span>Comments</span>
                  </p>
                </div>
              </div>

              <hr class="border-top mx-3 my-1" style="height:1px" />

              <div class="d-flex col-12 px-0 text-center">
                <div class="col-6 py-2 px-0 post-options font-16 font-weight-bold">
                  <div class="pointer" @click.once="toggleLike(feed.id, feed.liked)" :key="likeBtn">
                    <img
                      src="../../../assets/img/icon/Icon - Thumbs Up - Dark.png"
                      class="mr-1 mb-1"
                    />
                    <span :class="{'like': feed.liked}">Like</span>
                  </div>
                </div>
                <div
                  class="col-6 py-2 px-0 post-options font-14 pointer"
                  v-b-toggle="'comment-' + i"
                >
                  <img src="../../../assets/img/icon/round-comment-24px.png" class="mr-1" />
                  <span>Comment</span>
                </div>
              </div>

              <b-collapse :id="'comment-' + i">
                <b-card class="border-0">
                  <add-comment :postId="feed.id" />
                  <comments :comments="feed.comments" />
                </b-card>
              </b-collapse>
            </div>
          </template>
        </template>
      </div>
    </div>
    <infinite-loading @infinite="moreFeeds"></infinite-loading>
  </section>
</template>

<script>
import { Bus } from "../../../main";
import postMedia from "./postMedia";
import activityMedia from "./activity-media";
import comments from "./comments";
import addComment from "./addComment";
export default {
  components: {
    activityMedia,
    postMedia,
    comments,
    addComment
  },
  data() {
    return {
      likeBtn: 1,
      postId: null
    };
  },
  computed: {
    feeds() {
      return this.$store.getters.feeds;
    },
    myFeeds() {
      return this.$store.getters.myFeeds;
    },
    myActivity() {
      return this.$store.getters.myActivity;
    },
    profile() {
      return this.$store.getters.profile;
    }
  },
  methods: {
    emitEditActivity(payload) {
      Bus.$emit("editActivity", payload);
    },
    moreFeeds(state) {
      this.$store.dispatch("FEEDS").then(res => {
        if (res !== "end") {
          state.loaded();
        } else {
          state.complete();
        }
      });
    },
    openDeleteModal(postId) {
      this.postId = postId;
      this.$bvModal.show("deletePost");
    },
    deletePost() {
      try {
        this.$store.dispatch("DELETEPOST", this.postId).then(res => {
          this.$toasted.info(res);
        });
      } catch (error) {
        this.$toasted.error("error, please try again later");
      }
    },
    toggleLike(id, liked) {
      try {
        this.$store
          .dispatch("TOGGLELIKE", {
            id: id,
            liked: liked
          })
          .then(res => {
            res ? this.$toasted.info("Unlike") : this.$toasted.success("Liked");
            this.likeBtn++;
          });
      } catch (error) {
        this.$toasted.error("we have problem, please try again later");
      }
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

      .job {
        color: $gray;
        opacity: 0.7;
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

  .like {
    color: $blue;
    font-weight: bold;
  }
}
</style>
