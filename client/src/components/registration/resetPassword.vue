<template>
  <section id="resetPassword">
    <div class="mt-4 mb-5 pt-5 mx-md-3 mx-1">
      <p
        class="title font-weight-bold px-lg-5 px-0 fontSM"
      >Enter your email, we will send you a password</p>
    </div>

    <div>
      <form @submit.prevent>
        <div>
          <input
            class="col-12 border-0 py-3 fontSM"
            type="text"
            placeholder="Email"
            autocomplete="off"
            v-model="form.email"
          />
        </div>

        <div class="mt-3">
          <button @click="submit" class="btn btn-primary btn-block py-3">Reset Password</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null
      }
    };
  },
  methods: {
    async submit() {
      try {
        let res = await this.$store.dispatch("RESETPASSWORD", this.form);

        this.$router.push("/registration/code");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#resetPassword {
  margin-top: 50px;
  margin-bottom: 240px;
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
