<template>
  <section id="changePassword">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Reset your password</p>
    </div>

    <div>
      <form @submit.prevent>
        <div>
          <input
            class="col-12 border-0 py-3"
            type="password"
            placeholder="New password"
            v-model="form.password"
          />
        </div>
        <div class="mt-3">
          <input
            class="col-12 border-0 py-3"
            type="password"
            placeholder="Confirm password"
            v-model="form.confirmPassword"
          />
        </div>
        <div class="text-center">
          <p :class="error.state ? 'text-danger' : 'text-success'">{{ error.message }}</p>
        </div>
        <div class="mt-4">
          <button
            :disabled="this.error.state"
            @click="submit"
            class="btn btn-primary btn-block py-3"
          >Done</button>
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
        password: null,
        confirmPassword: null
      },
      error: {
        state: true,
        message: null
      }
    };
  },
  watch: {
    "form.confirmPassword"(val) {
      if (this.form.password !== val) {
        this.error.state = true;
        this.error.message = "the password is not matched";
        return;
      }

      this.error.state = false;
      this.error.message = "password is matched";
    }
  },
  methods: {
    async submit() {
      try {
        let res = await this.$store.dispatch("CHANGEPASSWORD", this.form);

        this.$router.push("/registration");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#changePassword {
  margin-top: 100px;
  margin-bottom: 100px;

  p.title {
    color: $fontColor_white;
    text-align: center;
    font-weight: bold;
  }

  input,
  button {
    border-radius: 9px;
    outline: none;
  }

  a {
    text-decoration: none;
  }
}
</style>
