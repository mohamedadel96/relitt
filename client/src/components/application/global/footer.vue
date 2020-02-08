<template>
  <footer class="mt-3 border-top">
    <div class="container">
      <div class="d-flex flex-wrap justify-content-between my-5">
        <div class="block_1 col-md-3 col-12">
          <div class="col-12 px-0">
            <img src="../../../assets/icons/dark-logo.svg" alt />
            <p class="text-secondary text-overlay pointer col-12 pt-2">&#64;2019 relitte inc</p>
          </div>
        </div>

        <div class="block_2 col-md-3 col-12">
          <p class="font-weight-bold">About</p>
          <div class="d-flex justify-content-between text-left">
            <div class="list col-12 px-0">
              <p class="text-secondary text-overlay pointer">Support</p>
              <p class="text-secondary text-overlay pointer">Summit</p>
              <p class="text-secondary text-overlay pointer">Work</p>
              <p class="text-secondary text-overlay pointer">Policy</p>
              <router-link to="/app/terms">
                <p class="text-secondary text-overlay pointer">Terms</p>
              </router-link>
            </div>
          </div>
        </div>

        <div class="block_2 col-md-3 col-12">
          <p class="font-weight-bold">Follow</p>
          <div class="d-flex justify-content-between text-left">
            <div class="list col-6 px-0">
              <p class="text-secondary text-overlay pointer">Facebook</p>
              <p class="text-secondary text-overlay pointer">Telegram</p>
              <p class="text-secondary text-overlay pointer">Inestegram</p>
              <p class="text-secondary text-overlay pointer">Medium</p>
            </div>
          </div>
        </div>

        <div class="block_3 col-md-3 col-12">
          <p class="font-weight-bold">Mobile versions</p>
          <div class="list col-12 px-0">
            <p class="text-secondary text-overlay pointer">Download apple store</p>
            <p class="text-secondary text-overlay pointer">Download play store</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  .text-overlay {
    transition: 0.4s;
    &:hover {
      color: #333 !important;
    }
  }
}
</style>