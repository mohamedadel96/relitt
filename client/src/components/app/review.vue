<template>
    <div id="review">
         <div class="col-12 px-4 text-center mb-lg-3 rate">
              <div>
                <p class="fontXL font-weight-bold text-center">icon stars</p>
              </div>
              <div class="props d-flex justify-content-between">
                <div class="prop col-4 px-0">
                  <p class="fontMD font-weight-bold mb-0 head">High</p>
                  <p class="fontXS text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                  <p class="fontMD font-weight-bold mb-0 head">Good</p>
                  <p class="fontXS text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                    <p class="fontMD font-weight-bold mb-0 head">Perfect</p>
                    <p class="fontXS text-secondary mb-0">price</p>
                </div>
              </div>
        </div>
        <div>
          <div class="row ml-2 " v-for="i in 2" :key="i"  >
                <div class="card " style="max-width: 700px;">
                  <div class="row no-gutters">
                    <div class="col-md-4 card">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title m-0 d-inline-block ">Card title</h5>
                        <p class="card-text m-0 d-lg-inline-flex justify-content-end"><small class="text-muted">stars</small></p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                    </div>
                  </div>
                </div>
            <div class="card mb-1" style="max-width: 700px;">
              <div class="row no-gutters">
                <div class="col-md-4 card">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" class="card-img" alt="...">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title m-0 d-inline-block ">Card title</h5>
                    <p class="card-text m-0 d-lg-inline-flex justify-content-end"><small class="text-muted">stars</small></p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
    </div>
  </div>

</template>

<script>
export default {
    
}

</script>

<style lang="scss"> 
    #review{
    .props {
        .prop {
          border-right: 2px solid #eee;
          &:last-of-type {
            border: none;
          }
          .fontMD {
            color: $blue;
          }
        }
      }
      .rate{  
        margin-bottom: 3rem !important 
      }
      .card img{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-top: 19px;

      }
      .card{
        border: none !important ;
        max-width: 15%;
      }
      .head{
        font-weight: bold !important;
        color:#7052d5 !important;

      }
    }
</style>