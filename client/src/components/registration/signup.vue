<template>
  <section id="signup">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Welcome back, We are happy you are here again</p>
    </div>

    <div>
      <form>
        <div>
          <input class="col-12 border-0 py-3" type="text" placeholder="Email" />
        </div>

        <div class="my-3">
          <input class="col-12 border-0 py-3" type="text" placeholder="Password" />
        </div>

        <div class="mt-4">
          <button class="btn btn-primary btn-block py-3">SIGNUP</button>
        </div>
      </form>

      <div class="mt-5">
        <p class="text-secondary text-center mb-1">or signup using social media</p>
        <button class="btn btn-secondary btn-block py-3 my-2">facebook</button>
        <button class="btn btn-secondary btn-block py-3">google</button>
      </div>

      <div class="mt-3 d-flex justify-content-between">
        <p class="text-secondary">if you have account</p>
        <a class="text-white" href="#">LOGIN</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#signup {
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
