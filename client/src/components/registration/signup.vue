<template>
  <section id="signup">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title font-weight-bold px-5 fontSM">Welcome back, We are happy you are here again</p>
    </div>

    <div>
      <form class="mb-3">
        <div>
          <input class="col-12 border-0 py-3 fontSM" type="text" placeholder="Email" />
        </div>

        <div class="my-2">
          <input class="col-12 border-0 py-3 fontSM" type="text" placeholder="Password" />
        </div>

        <div class="mt-3">
          <button class="btn btn-primary btn-block py-3 font-weight-bold fontSM">SIGNUP</button>
        </div>
      </form>

      <div class="mt-4 pt-5 pb-1">
        <p class="text-secondary text-center mb-1 fontXS">or signup using social media</p>
        <button class="btn btn-secondary btn-block py-3 my-2">facebook</button>
        <button class="btn btn-secondary btn-block py-3">google</button>
      </div>

      <div class="mt-3 d-flex justify-content-between">
        <p class="text-secondary fontSM">if you have account</p>
        <router-link class="text-white font-weight-bold fontSM" to="/registration/login">LOGIN</router-link>
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

  button {
    border-radius: 9px;
  }
  
}
</style>
