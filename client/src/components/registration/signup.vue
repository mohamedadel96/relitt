<template>
  <section id="signup">
    <div class="mb-5 mx-md-3 mx-1">
      <p
        class="title font-weight-bold px-lg-5 px-0 fontSM"
      >Welcome back, We are happy you are here again</p>
    </div>

    <div>
      <form class="mb-3" @submit.prevent>
        <div class="form-group">
          <input
            :class="['col-12 form-control border-0 py-3 fontSM', {'is-invalid': $v.form.email.$error}]"
            type="text"
            placeholder="Email"
            autocomplete="off"
            v-model="form.email"
          />
          <div v-if="$v.form.email.$error" class="invalid-feedback fontMD">
            <span v-if="!$v.form.email.required">Email is required</span>
            <span v-if="!$v.form.email.email">Email is invalid</span>
          </div>
        </div>

        <div class="form-group my-2">
          <input
            :class="['col-12 form-control border-0 py-3 fontSM', {'is-invalid': $v.form.password.$error}]"
            type="password"
            placeholder="Password"
            autocomplete="off"
            v-model="form.password"
          />
          <div v-if="$v.form.password.$error" class="invalid-feedback">
            <span v-if="!$v.form.password.required">Password is required</span>
            <span v-if="!$v.form.password.minLength">Password must be at least 8 characters</span>
          </div>
        </div>

        <div class="mt-3">
          <button
            class="btn btn-primary btn-block py-3 font-weight-bold fontSM"
            @click="submit"
          >SIGNUP</button>
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
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        let res = await this.$store.dispatch("VALIDATEEMAIL", this.form);

        this.$toasted.success(res);

        this.$router.push({
          name: "entrance"
        });
      } catch (error) {
        error.errorDetails.email.map(msg => {
          this.$toasted.error(msg);
        });
      }
    }
  }
};
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
