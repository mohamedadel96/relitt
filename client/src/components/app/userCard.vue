<template>
  <section id="userCard" class="pb-3 rounded">
    <div>
      <div class="block_1 text-center">
        <img
          class="border rounded-circle mt-5"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="user image"
        />
        <p class="name font-weight-bold mb-0">Mohamed adel</p>
        <p class="job">Senior diver</p>
      </div>
      <div class="block_2 d-flex pb-4 mt-4">
        <div class="col-6 text-center pr-5 border-right">
          <p class="num mb-0 font-weight-bold">125</p>
          <p class="mb-0 opacity font-weight-bold">Followers</p>
        </div>
        <div class="col-6 text-center pl-5 border-left">
          <p class="num mb-0 font-weight-bold">150</p>
          <p class="mb-0 opacity font-weight-bold">Following</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#userCard {
  background: $background_white;
  box-shadow: 1px 1px 4px #ddd;
  .block_1 {
    img {
      width: 90px;
      height: 90px;
    }
    p.name {
      font-size: 26px;
    }
    p.job {
      opacity: 0.7;
      font-size: 18px;
      color: #777;
    }
  }

  .block_2 {
    .num {
      color: $blue;
      font-size: 22px;
    }
    .opacity {
      opacity: 0.6;
    }
  }
}
</style>