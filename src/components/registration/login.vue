<template>
  <section id="login">
    <div class="mb-5 mx-md-3 mx-1">
      <p
        class="title font-weight-bold px-lg-5 px-0 font-16"
      >Welcome back, We are happy you are here again</p>
    </div>

    <div>
      <form class="mb-2" @submit.prevent>
        <div class="form-group">
          <input
            :class="['col-12 form-control border-0 py-3 font-16', {'is-invalid': $v.form.email.$error}]"
            type="text"
            placeholder="Email"
            autocomplete="off"
            v-model="form.email"
          />
          <div v-if="$v.form.email.$error" class="invalid-feedback font-18">
            <span v-if="!$v.form.email.required">Email is required</span>
            <span v-if="!$v.form.email.email">Email is invalid</span>
          </div>
        </div>

        <div class="form-group my-2">
          <input
            :class="['col-12 form-control border-0 py-3 font-16', {'is-invalid': $v.form.password.$error}]"
            type="password"
            placeholder="Password"
            autocomplete="off"
            v-model="form.password"
          />
          <div v-if="$v.form.password.$error" class="invalid-feedback">
            <span v-if="!$v.form.password.required">Password is required</span>
            <span v-if="!$v.form.password.minLength">Password must be at least 6 characters</span>
          </div>
        </div>

        <div class="mt-3">
          <button
            class="btn btn-primary btn-block py-3 font-weight-bold font-16"
            @click="submit"
          >LOGIN</button>
        </div>
      </form>

      <div class="mt-1 text-right">
        <router-link to="/registration/reset-password">Forget password</router-link>
      </div>

      <div class="mt-4 pt-4 pb-1">
        <p class="text-secondary text-center mb-1">or signup using social media</p>
        <v-facebook-login
          app-id="855059468207917"
          class="btn btn-secondary btn-block py-3 my-2"
          @login="facebookLogin"
        >
          <template slot="login">Log in using Facebook</template>
        </v-facebook-login>

        <GoogleLogin
          :params="params"
          :onSuccess="onSuccess"
          style="background:white; color:black; font-weight:bold"
          class="btn btn-secondary btn-block py-3 my-2"
        >
          <span>
            <img src="../../assets/img/Image 4.png" title="google" class="mx-auto log-icon" />
          </span>
          Log in using Google
        </GoogleLogin>
      </div>

      <div class="mt-3 d-flex justify-content-between">
        <p class="text-secondary font-16">if you don't have account</p>
        <router-link class="text-white font-weight-bold font-16" to="/registration">SIGNUP</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import GoogleLogin from "vue-google-login";
import VFacebookLogin from "vue-facebook-login-component";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  components: {
    VFacebookLogin,
    GoogleLogin
  },
  data() {
    return {
      form: {
        email: null,
        password: null
      },
      params: {
        client_id:
          "784667846506-f26bnfntiuuaplq014kkb5ob7n6e1c1c.apps.googleusercontent.com"
      },
      // only needed if you want to render the button with the google ui
      renderParams: {
        width: 443,
        height: 60,
        longtitle: true
      }
    };
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    handleSdkInit({ FB, scope }) {
      this.FB = FB;
      this.scope = scope;
    },
    submit() {
      // this.$v.$touch();
      // if (this.$v.$invalid) {
      //   return;
      // }
      // let loader = this.$loading.show();
      this.$store.dispatch("LOGIN", this.form)
        .then(res => {
          this.$router.push("/app");
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        // .finally(() => {
        //   loader.hide();
        // });
    },
    facebookLogin(res) {
      let loader = this.$loading.show();
      let form = {
        provider: "facebook",
        access_token: res.authResponse.accessToken
      };
      this.$store
        .dispatch("SOCIALLOGIN", form)
        .then(res => {
          this.$router.push("/app");
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    onSuccess(googleUser) {
      console.log(googleUser);

      // This only gets the user information: id, name, imageUrl and email
      console.log(googleUser.getBasicProfile());
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
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
