<template>
    <div id="comment">
      <div class="d-flex flex-wrap justify-content-between ml-2">
        <div class="card col-md-5" v-for="i in data.reviews" :key="i">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                class="card-img"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title m-0 d-inline-block">{{data.reviews.user.firstname}} {{data.reviews.user.lastname}}</h5>
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
      <hr>
    </div>
</template>

<script>
export default {
      props:["data"]
}
</script>

<style lang="scss" scoped>
#comment {
    .rate {
    margin-bottom: 3rem !important;
        }

    .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 19px;
        }

    .card {
    border: none;
    border-top: 1px solid #ddd;
    }

    .head {
    font-weight: bold !important;
    color: #7052d5 !important;
    }

}
</style>