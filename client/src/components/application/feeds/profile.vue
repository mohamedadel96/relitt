<template>
  <section>
    <div v-if="profile">
      <div class="position-relative rounded text-center p-3 mt-5 bg-white">
        <div class="position-absolute" style="top: -41px; right: 35%;">
          <img
            :src="profile.image ? profile.image : require('../../../assets/img/default-avatar.jpg')"
            alt="user image"
            style="width: 80px; height: 80px; border-radius: 50%;"
          />
        </div>
        <div class="d-flex justify-content-between mt-5">
          <div>
            <p
              class="mb-0 pr-2 font-weight-bolder text-primary font-14"
            >{{profile.firstname}} {{profile.lastname}}</p>
            <p class="mb-0 text-secondary font-10">{{profile.type}}</p>
          </div>
          <editPersonalInfo />
        </div>
        <div class="mt-3 font-14">
          <p class="mb-0 text-dark">{{profile.bio}}</p>
        </div>
        <div class="d-flex justify-content-around mt-3">
          <div>
            <p class="mb-0 font-weight-bolder text-primary font-14">{{profile.followers_count}}</p>
            <p class="mb-0 text-secondary font-10">Followers</p>
          </div>
          <div class="px-4 border-right border-left">
            <p class="mb-0 font-weight-bolder text-primary font-14">{{profile.following_count}}</p>
            <p class="mb-0 text-secondary font-10">Following</p>
          </div>
          <div>
            <p class="mb-0 font-weight-bolder text-primary font-14">8</p>
            <p class="mb-0 text-secondary font-10">Activity</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import editPersonalInfo from "./side-menu/editPersonalInfo";

export default {
  components: {
    editPersonalInfo
  },

  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  }
};
</script>

<style lang="scss" scoped>
#userCard {
  background: $background_white;
  box-shadow: 1px 1px 4px #ddd;
  .block_1 {
    img {
      width: 60px;
      height: 60px;
    }
    p.job {
      opacity: 0.7;
      color: #777;
    }
  }

  .block_2 {
    .num {
      color: $blue;
    }
    .opacity {
      opacity: 0.6;
    }
  }
}
</style>