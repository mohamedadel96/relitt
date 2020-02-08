<template>
  <section id="friendsSearch">
    <div class="search-sec px-3 py-4 mb-4 col-12 px-0 rounded">
      <p class="title font-weight-bold font-16">Find friends</p>
      <div class="search mb-3 d-flex align-items-center">
        <span class="px-4">
          <img src="../../../assets/icons/search.svg" style="width:20px;height:20px" alt />
        </span>
        <input
          placeholder="Search people"
          v-model="search"
          @focus="tabIndex = 2"
          class="py-3"
          type="text"
        />
      </div>
      <div ref="result">
        <b-tabs v-model="tabIndex" content-class="mt-3">
          <b-tab title="Suggested">
            <div
              class="friends border-bottom mt-3 px-lg-3 py-2"
              v-for="(follower,i) in suggestedFollowers"
              :key="i"
            >
              <div :class="['mb-4', i != suggestedFollowers.length ? 'border-bottom' : '']">
                <div class="d-flex align-items-center mb-3">
                  <img
                    class="rounded-circle mr-3"
                    :src="follower.image ? follower.image : require('../../../assets/img/default-avatar.jpg')"
                    alt="friend picture"
                  />
                  <div>
                    <p
                      class="name font-weight-bold font-16"
                    >{{follower.firstname}} {{follower.lastname}}</p>
                    <p class="mb-0 job font-14">{{follower.type}}</p>
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn-outline-primary btn-block font-14"
                    @click="toggleFollowing(follower.is_following, follower.id)"
                  >
                    <span v-if="!follower.is_following">Follow</span>
                    <span v-if="follower.is_following">Unfollow</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="!suggestedFollowers.length"
              class="bg-light rounded text-center text-secondary py-2"
            >there is no suggested</div>
          </b-tab>
          <b-tab title="Facebook">
            <p>Facebook</p>
          </b-tab>
          <b-tab title="Search">
            <div class="friends mt-3 border-bottom" v-for="(friend,i) in friends" :key="i">
              <div class="mb-4">
                <div class="d-flex align-items-center mb-2">
                  <img
                    class="rounded-circle mr-3"
                    :src="friend.image ? friend.image : require('../../../assets/img/default-avatar.jpg')"
                    alt="friend profile picture"
                  />
                  <div>
                    <p
                      class="name font-weight-bold font-16"
                    >{{friend.firstname}} {{friend.lastname}}</p>
                    <p class="mb-0 job font-14">{{friend.type}}</p>
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn-outline-primary btn-block font-14"
                    @click="toggleFollowing(friend.is_following, friend.id)"
                  >
                    <span v-if="!friend.is_following">Follow</span>
                    <span v-if="friend.is_following">Unfollow</span>
                  </button>
                </div>
              </div>
            </div>
            <div
              v-if="!friends.length"
              class="bg-light rounded text-center text-secondary py-2"
            >there is no result</div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      tabIndex: 0
    };
  },
  watch: {
    search(val) {
      this.$store.dispatch("FRIENDS", this.search);
    }
  },
  methods: {
    toggleFollowing(isFollowing, id) {
      let loader = this.$loading.show({
        container: this.$refs.result
      });
      this.$store
        .dispatch("TOGGLEFOLLOWING", {
          id: id,
          isFollowing: isFollowing
        })
        .finally(() => {
          loader.hide();
        });
    }
  },
  computed: {
    suggestedFollowers() {
      return this.$store.getters.suggestedFollowers;
    },
    friends() {
      return this.$store.getters.friends;
    }
  }
};
</script>

<style lang="scss" scoped>
#friendsSearch {
  .search-sec {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
  }
  .search {
    background: #f8f8ff;
    border-radius: 11px;
    input {
      background: none;
      border: none;
      outline: none;
    }
  }

  .friends {
    img {
      width: 45px;
      height: 45px;
    }
    .name {
      margin-bottom: -5px;
    }
    .job {
      color: #777;
      opacity: 0.7;
    }
  }
}
</style>