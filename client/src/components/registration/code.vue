<template>
  <section id="code">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Enter code, we sent you email with code to reset password</p>
    </div>
    <div>
      <form @submit.prevent>
        <div class="form-group">
          <input :class="['col-12 border-0 py-3 form-control',{'is-invalid': $v.form.code.$error}]"
          type="text" 
          placeholder="Code" 
          v-model="form.code" />
            <div
            v-if="!$v.form.code.required"
            class="invalid-feedback fontMD"
          >Code is required</div>
          </div>

        </div>

        <div class="mt-4">
          <button @click="submit" class="btn btn-primary btn-block py-3">Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      form: {
        code: null
      }
    };
  },  
  validations: {
    form: {
      code: { required }
      }
  },

  methods: {
    async submit() {
      try {
        let res = await this.$store.dispatch("CODEVALIDATE", this.form);

        this.$router.push("/registration/change-password");
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#code {
  margin-top: 100px;
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
}
</style>
