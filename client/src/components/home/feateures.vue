<template>
  <section id="features" class="container">
    <div class="text-center d-flex flex-wrap justify-content-center py-5">
      <p class="text-primary col-12 font-weight-bold">FEATURES</p>
      <h2 class="col-12 font-weight-bold">What are our core features</h2>
      <p
        class="col-md-7 col-12 desc"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus inventore cum nemo quos, autem, obcaecati fuga et voluptatum mollitia ipsum dolorem atque dignissimos ex quas praesentium amet quidem? Ducimus!</p>
    </div>
    <div class="d-flex justify-content-between flex-wrap py-2">
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="border rounded-circle"
          src="../../assets/img/icon/Icon - Circle - Rounded@2x.png"
          alt="human"
        />
        <p class="font-weight-bold py-1">Custom your profile</p>
        <p class="desc">Lorem ipsum dolor sit amet consectetur aolore impedit nostrum!</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="border rounded-circle"
          src="../../assets/img/icon/Icon - Favorite - Rounded@2x.png"
          alt="human"
        />
        <p class="font-weight-bold py-1">Custom your profile</p>
        <p class="desc">Lorem ipsum dolor sit amet consectetur aolore impedit nostrum!</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">
        <img
          class="border rounded-circle"
          src="../../assets/img/icon/round-explore-24px@2x.png"
          alt="human"
        />
        <p class="font-weight-bold py-1">Custom your profile</p>
        <p class="desc">Lorem ipsum dolor sit amet consectetur aolore impedit nostrum!</p>
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
