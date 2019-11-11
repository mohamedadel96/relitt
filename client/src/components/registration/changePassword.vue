<template>
  <section id="changePassword">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Reset your password</p>
    </div>

    <div>
      <form>
        <div>
          <input class="col-12 border-0 py-3" type="text" placeholder="New password" />
        </div>
        <div class="mt-3">
          <input class="col-12 border-0 py-3" type="text" placeholder="Confirm password" />
        </div>

        <div class="mt-4">
          <button class="btn btn-primary btn-block py-3">Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#changePassword {
    margin-top: 100px;
  p.title {
    color: $fontColor_white;
    text-align: center;
    font-weight: bold;
  }

  input {
    border-radius: 9px;
    outline: none;
  }

  .py-3 {
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
  }

  a {
    text-decoration: none;
  }
  
}
</style>
