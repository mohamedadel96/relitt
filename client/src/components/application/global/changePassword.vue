<template>
  <section id="changePassword">
    <b-modal
      id="changePassword"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
      size="lg"
    >
      <p class="text-center font-weight-bold fontMD">Change password</p>
      <form @submit.prevent>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="fontXS text-secondary">Old password</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.old_password"
              placeholder="Old password"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="fontXS text-secondary">Password</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.password"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="fontXS text-secondary">Confirm password</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.confirm_password"
              placeholder="Confirm password"
            />
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
export default {
  data() {
    return {
      form: {
        old_password: null,
        password: null,
        confirm_password: null
      },
      disableEdit: false
    };
  },
  methods: {
    submit() {
      console.log(this.form);
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
    .form-controls {
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none !important;
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