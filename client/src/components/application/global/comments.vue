<template>
  <section id="comments">
    <div>
      <div class="d-flex flex-wrap justify-content-between ml-2">
        <div class="card" v-for="(i)  in 4" :key="i">
          <div class="d-flex">
            <div>
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                class="card-img"
                alt="user image"
              />
            </div>
            <div>
              <div class="card-body px-2">
                <div class="d-flex justify-content-between">
                  <h5 class="card-title m-0 d-inline-block">Card title</h5>
                  <p class="card-text m-0 fontXS">stars</p>
                </div>
                <p class="card-text fontXS px-1 mb-1">3 mins ago</p>
                <p
                  class="card-text px-1"
                >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    comments() {
      return this.$store.getters.event;
    }
  }
};
</script>

<style lang="scss" scoped>
#comments {
  .card {
    border: none;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 15px;
    }
  }
}
</style>
