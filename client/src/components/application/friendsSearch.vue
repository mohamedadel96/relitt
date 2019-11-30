<template>
  <section id="friendsSearch">
    <p class="title font-weight-bold">Find friends</p>
    <div class="search mb-3 d-flex align-items-center">
      <span class="px-4">ico</span>
      <input placeholder="Search people" class="py-3" type="text" />
    </div>
    <div class="friends mt-2">
      <div class="mb-4">
        <div class="d-flex align-items-center mb-2">
          <img
            class="border rounded-circle mr-3"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="friend profile picture"
          />
          <div>
            <p class="name font-weight-bold">Ahmed reda</p>
            <p class="mb-0 job">Senior diver</p>
          </div>
        </div>
        <div>
          <button class="btn btn-outline-primary btn-block">Follow</button>
        </div>
        <hr class="border" />
      </div>
      <!-- del -->

      <div class="mb-4">
        <div class="d-flex align-items-center mb-2">
          <img
            class="border rounded-circle mr-3"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="friend profile picture"
          />
          <div>
            <p class="name font-weight-bold">Ahmed reda</p>
            <p class="mb-0 job">Senior diver</p>
          </div>
        </div>
        <div>
          <button class="btn btn-outline-primary btn-block">Follow</button>
        </div>
        <hr class="border" />
      </div>

      <div class="mb-4">
        <div class="d-flex align-items-center mb-2">
          <img
            class="border rounded-circle mr-3"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="friend profile picture"
          />
          <div>
            <p class="name font-weight-bold">Ahmed reda</p>
            <p class="mb-0 job">Senior diver</p>
          </div>
        </div>
        <div>
          <button class="btn btn-outline-primary btn-block">Follow</button>
        </div>
        <hr class="border" />
      </div>
      <!-- del -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#friendsSearch {
  .search {
    background: #f8f8ff;
    border-radius: 11px;
    input {
      background: none;
      border: none;
      outline: none;
    }
  }

  .friends {
    img {
      width: 60px;
      height: 60px;
    }
    .name {
      margin-bottom: -5px;
    }
    .job {
      color: #777;
      opacity: 0.7;
    }
  }
}
</style>