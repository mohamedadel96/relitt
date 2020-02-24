<template>
  <section id="resetPassword">
    <div class="mt-4 mb-5 pt-5 mx-md-3 mx-1">
      <p
        class="title font-weight-bold px-lg-5 px-0 font-16"
      >Enter your email, we will send you a password</p>
    </div>

    <div>
      <form @submit.prevent>
        <div class="form-group">
          <input
            :class="['col-12 border-0 py-3 font-16 form-control',{'is-invalid': $v.form.email.$error}]"
            type="text"
            placeholder="Email"
            autocomplete="off"
            v-model="form.email"
          />
          <div v-if="!$v.form.email.required" class="invalid-feedback font-18">Email is required</div>
        </div>

        <div class="mt-3">
          <button @click="submit" class="btn btn-primary btn-block py-3">Reset Password</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: null
      }
    };
  },
  validations: {
    form: {
      email: { required }
    }
  },
  methods: {
    submit() {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        let loader = this.$loading.show();
        this.$store.dispatch("RESETPASSWORD", this.form).then(res => {
          this.$router.push("/registration/code");
        }).catch(message => {
          this.$toasted.error(message);
        }).finally(() => {
          loader.hide()
        })

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
