<template>
  <section id="userCard" class="pb-2 rounded">
    <div v-if="profile">
      <div class="block_1 text-center">
        <img class="border rounded-circle mt-4" :src="profile.image" alt="user image" />
        <p
          class="name font-weight-bold mb-0 font-14 px-2"
        >{{profile.firstname}} {{profile.lastname}}</p>
        <p class="job font-10">{{profile.type}}</p>
      </div>
      <div class="block_2 d-flex pb-4 mt-4">
        <div class="col-6 text-center pr-4 border-right">
          <p class="num mb-0 font-weight-bold font-14">{{profile.followers_count}}</p>
          <p class="mb-0 opacity font-weight-bold font-10">Followers</p>
        </div>
        <div class="col-6 text-center pl-4 border-left">
          <p class="num mb-0 font-weight-bold font-14">{{profile.following_count}}</p>
          <p class="mb-0 opacity font-weight-bold font-10">Following</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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