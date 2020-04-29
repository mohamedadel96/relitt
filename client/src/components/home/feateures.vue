<template>
  <section id="features" class="container">
    <div class="text-center d-flex flex-wrap justify-content-center py-5">
      <h3 class="text-primary col-12 font-weight-bold h5">FEATURES</h3>
      <h2 class="col-12 font-weight-bold">Experience the difference, save money</h2>
      <p
        class="col-md-7 col-12 desc"
      >We have astonishing features. You can enjoy our provided services, which make it easier to enjoy adventures. Discover our features, enjoy it.</p>
    </div>
    <div class="d-flex justify-content-between flex-wrap py-2">
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="rounded-circle"
          src="../../assets/img/icon/Group 686.png"
          alt="human"
        />
        <p class="font-weight-bold h3y-1">Custom your profile </p>
        <p class="desc">A private space is available for you to share your activity and experience with the community</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="rounded-circle"
          src="../../assets/img/icon/Group 689.png"
          alt="human"
        />
        <p class="font-weight-bold py-1">Track activity</p>
        <p class="desc">Track your own activity now, with instant activity tracking indicator through the dashboard</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="rounded-circle"
          src="../../assets/img/icon/round-explore-24px@2x.png"
          alt="human"
        />
        <p class="font-weight-bold py-1">Explore more</p>
        <p class="desc">You will be always aware of all Surrounding events and activities wherever you are. So you can enjoy your time and connect with others</p>
      </div>
    </div>
    <div class="d-flex justify-content-center pb-4 pt-3">
      <button class="btn btn-primary rounded py-3 px-5">Get started now!</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#features {
  .block {
    img {
      width: 120px;
    }
  }

  p {
    &.desc {
      opacity: 0.6;
    }
  }
}
</style>
