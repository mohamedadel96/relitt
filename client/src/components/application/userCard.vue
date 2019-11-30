<template>
  <section id="userCard" class="pb-3 rounded">
    <div v-if="userCard">
      <div class="block_1 text-center">
        <img class="border rounded-circle mt-5" :src="userCard.image" alt="user image" />
        <p class="name font-weight-bold mb-0">{{userCard.firstname}} {{userCard.lastname}}</p>
        <p class="job">{{userCard.type}}</p>
      </div>
      <div class="block_2 d-flex pb-4 mt-4">
        <div class="col-6 text-center pr-5 border-right">
          <p class="num mb-0 font-weight-bold">{{userCard.followers_count}}</p>
          <p class="mb-0 opacity font-weight-bold">Followers</p>
        </div>
        <div class="col-6 text-center pl-5 border-left">
          <p class="num mb-0 font-weight-bold">{{userCard.following_count}}</p>
          <p class="mb-0 opacity font-weight-bold">Following</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    userCard() {
      return this.$store.getters.userCard;
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
      width: 70px;
      height: 70px;
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