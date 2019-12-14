<template>
  <section id="changePassword">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Reset your password</p>
    </div>

    <div>
      <form @submit.prevent>
        <div class="form-group" >
            <input
              :class="['col-12 border-0 py-3  form-control' ,{'is-invalid': $v.form.password.$error}]"
              type="password"
              placeholder="New password"
              v-model="form.password"
            />
            <input
              :class="['col-12 border-0 py-3 mt-3 form-control',{'is-invalid': $v.form.confirmPassword.$error}]"
              type="password"
              placeholder="Confirm password"    
              v-model="form.confirmPassword"
            />
            <div class="invalid-feedback error" v-if="!$v.form.password.required">Password is required.</div>
            <div class="invalid-feedback error" v-if="!$v.form.password.minLength">Password must have at least {{ $v.form.password.$params.minLength.min }} letters.</div>
            <div class="invalid-feedback error" v-if="!$v.form.confirmPassword.sameAsPassword">Passwords must be identical.</div>
        </div>
        <div class="mt-4">
          <button
            @click="submit"
            class="btn btn-primary btn-block py-3"
          >Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

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
  validations: {
    form: {
      password: { required ,  minLength: minLength(8)},
      confirmPassword:{required ,sameAsPassword: sameAs('password')}
      }
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        let res = await this.$store.dispatch("CHANGEPASSWORD", this.form);

        this.$router.push("/registration/login");
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
