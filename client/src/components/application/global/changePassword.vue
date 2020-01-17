<template>
  <section id="changePassword">
    <b-modal id="changePassword" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="text-center font-weight-bold font-18">Change password</p>
      <form @submit.prevent>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Old password</label>
            <input
              :class="['form-control px-1 col-12',{'is-invalid': $v.form.password.$error}]"
              type="password"
              v-model="form.old_password"
              placeholder="Old password"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Password</label>
            <input
              :class="['form-control px-1 col-12',{'is-invalid': $v.form.password.$error}]"
              type="password"
              v-model="form.password"
              placeholder="Password"
            />
            <div v-if="$v.form.password.$error" class="invalid-feedback">
              <span v-if="!$v.form.password.required">Password is required</span>
              <span v-if="!$v.form.password.minLength">Password must be at least 6 characters</span>
            </div>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Confirm password</label>
            <input
              :class="['form-control px-1 col-12',{'is-invalid': $v.form.confirm_password.$error}]"
              type="password"
              v-model="form.confirm_password"
              placeholder="Confirm password"
            />
            <div v-if="$v.form.confirm_password.$error" class="invalid-feedback">
              <span v-if="!$v.form.confirm_password.required">Confirm Password is required</span>
              <span v-else-if="!$v.form.confirm_password.sameAsPassword">Passwords must match</span>
            </div>
          </div>
        </div>
        <div class="col-12 px-2 mt-3 mb-2">
          <button
            class="btn btn-primary btn-block btn-lg py-1"
            :disabled="disableEdit"
            @click="submit"
          >Done</button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import { Bus } from "../../../main";
import { required, sameAs, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        email: null,
        old_password: "null",
        password: "null",
        confirm_password: "null"
      },
      disableEdit: false
    };
  },
  validations: {
    form: {
      password: { required, minLength: minLength(8) },
      confirm_password: { required, sameAsPassword: sameAs("password") }
    }
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  },
  watch: {
    profile: {
      immediate: true,
      handler(val) {
        if (val) {
          this.form.email = val.email;
        }
      }
    }
  },
  methods: {
    submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }
        this.$store.dispatch("PROFILECHANGEPASSWORD", this.form).then(res => {
          this.$toasted.success(res);
        });
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    Bus.$on("openChangePassword", () => {
      this.$bvModal.show("changePassword");
    });
  }
};
</script>

<style lang="scss">
#changePassword {
  form {
    input {
      outline: none !important;
    }
    .form-control {
      outline: none;
      box-shadow: none;
      border: none;
      border-bottom: 1px solid #ddd;
      &:focus,
      &:active {
        outline: none;
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .modal-dialog {
    margin: 80px auto;
    position: relative;
    outline: none;
  }
  .modal-content {
    border: none;
  }
  @media (min-width: 576px) {
    .menu-item {
      outline: none;
    }
  }
}
</style>