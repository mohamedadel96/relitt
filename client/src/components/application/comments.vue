<template>
  <section id="comments">
    <div>
      <div class="d-flex flex-wrap justify-content-between ml-2">
        <div class="card col-md-5" v-for="i in 4" :key="i">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                class="card-img"
                alt="user image"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title m-0 d-inline-block">Card title</h5>
                <p class="card-text m-0 d-lg-inline-flex justify-content-end fontXS">stars</p>
                <p class="card-text fontXS">Last updated 3 mins ago</p>
                <p
                  class="card-text"
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
export default {};
</script>

<style lang="scss" scoped>
#comments {
  .card {
    border: none;
    border-top: 1px solid #ddd;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 19px;
    }
  }
}
</style>