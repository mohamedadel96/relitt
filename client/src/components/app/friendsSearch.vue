<template>
  <section id="friendsSearch">
    <p class="title font-weight-bold">Find friends</p>
    <div class="search mb-3">
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
          <button class="btn btn-primary btn-block">Follow</button>
        </div>
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
          <button class="btn btn-primary btn-block">Follow</button>
        </div>
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
          <button class="btn btn-primary btn-block">Follow</button>
        </div>
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
  .title {
    font-size: 20px;
  }
  .search {
    background: #f8f8ff;
    border-radius: 11px;
    input {
      background: none;
      border: none;
      outline: none;
      font-size: 18px;
    }
  }

  .friends {
    img {
      width: 75px;
      height: 75px;
    }
    .name {
      font-size: 20px;
      margin-bottom: -5px;
    }
    .job {
      color: #777;
      opacity: 0.7;
      font-size: 16px;
    }
  }
}
</style>