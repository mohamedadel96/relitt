<template>
  <section id="entrance">
    <div class="mb-5">
      <p>just few info to go</p>
    </div>

    <div>
      <form @submit.prevent>
        <div class="d-flex justify-content-between my-3">
          <div class="form-group col-6 pl-0 pr-2">
            <input
              :class="['col-12 form-control border-0 py-3', {'is-invalid': $v.form.firstname.$error}]"
              type="text"
              placeholder="firstname"
              autocomplete="off"
              v-model="form.firstname"
            />
            <div
              v-if="!$v.form.firstname.required"
              class="invalid-feedback font-18"
            >firstname is required</div>
          </div>
          <div class="form-group col-6 pl-2 pr-0">
            <input
              :class="['col-12 form-control border-0 py-3', {'is-invalid': $v.form.lastname.$error}]"
              type="text"
              placeholder="lastname"
              autocomplete="off"
              v-model="form.lastname"
            />
            <div
              v-if="!$v.form.lastname.required"
              class="invalid-feedback font-18"
            >lastname is required</div>
          </div>
        </div>

        <div class="form-group">
          <flat-pickr
            :class="['col-12 form-control border-0 py-3 bg-white', {'is-invalid': $v.form.birthdate.$error}]"
            v-model="form.birthdate"
            :config="config"
            placeholder="Date"
          ></flat-pickr>

          <div
            v-if="!$v.form.birthdate.required"
            class="invalid-feedback font-18"
          >birthdate is required</div>
        </div>

        <div>
          <div class="d-flex my-3">
            <div
              :class="[{'active': form.gender}, 'gender col-6 py-3 d-flex align-items-center justify-content-center']"
              @click="form.gender = 1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.628"
                height="24.088"
                viewBox="0 0 21.628 24.088"
                :style="form.gender ? 'fill: #fff' : 'fill: #777'"
                class="mx-1"
              >
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M38.239,36.907H17.417A.425.425,0,0,1,17,36.49V33.86c0-1.38,1.283-2.5,3.882-3.433,3.016-1.091,3.561-1.925,3.561-3.722a1.229,1.229,0,0,0-.289-.866,4.92,4.92,0,0,1-.834-2.15c-.032-.16-.032-.16-.192-.257-.449-.225-.866-.513-.962-1.925a1.713,1.713,0,0,1,.417-1.251c-.032-.257-.1-.642-.16-1.091-.321-2.021-.353-4.492,2.5-5.647,2.535-1.027,4.845-.834,5.326,0h0a.6.6,0,0,1,.064.225,1.627,1.627,0,0,1,.064.289h.032a1.931,1.931,0,0,1,1.925.738c1.219,1.412.834,4.556.706,5.454a1.681,1.681,0,0,1,.417,1.219c-.1,1.444-.513,1.732-.962,1.957-.16.064-.16.1-.193.257a4.71,4.71,0,0,1-.834,2.15,1.176,1.176,0,0,0-.289.866c0,1.8.545,2.631,3.561,3.722h0c2.6.962,3.882,2.085,3.882,3.433v2.631A.39.39,0,0,1,38.239,36.907Z"
                    transform="translate(-17 -12.819)"
                  />
                </g>
              </svg>
              <span>Male</span>
            </div>
            <div
              :class="[{'active': !form.gender}, 'gender col-6 py-3 d-flex align-items-center justify-content-center']"
              @click="form.gender = 0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.17"
                height="24.287"
                viewBox="0 0 22.17 24.287"
                :style="form.gender ? 'fill: #777' : 'fill: #fff'"
                class="mx-1"
              >
                <g transform="translate(0 0)">
                  <path
                    class="a"
                    d="M37.252,36.487h-21.4a.356.356,0,0,1-.353-.353V33.375c0-1.412,1.315-2.567,4.042-3.561,2.053-.738,3.08-1.412,3.5-2.342-3.85-.963-4.3-3.3-4.3-3.4a.323.323,0,0,1,.16-.353,5.4,5.4,0,0,0,1.925-4.524c0-3.465.674-6.994,5.743-6.994s5.743,3.529,5.743,6.994c0,3.208,1.829,4.46,1.925,4.524a.323.323,0,0,1,.16.353c-.032.1-.481,2.438-4.267,3.4.417.93,1.444,1.572,3.5,2.342h0c2.727.995,4.042,2.15,4.042,3.561v2.759A.417.417,0,0,1,37.252,36.487Z"
                    transform="translate(-15.5 -12.2)"
                  />
                </g>
              </svg>
              <span>female</span>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <button class="btn btn-primary btn-block py-3" @click="submit">Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        birthdate: null,
        gender: 1
      }
    };
  },
  validations: {
    form: {
      firstname: { required },
      lastname: { required },
      birthdate: { required }
    }
  },
  methods: {
    async submit() {
      try {
        this.$v.$touch();
        if (this.$v.$invalid) {
          return;
        }

        let res = await this.$store.dispatch("SIGNUP", this.form);

        this.$toasted.success(res);
        this.$router.push({ name: "app" });
      } catch (error) {
        this.$toasted.error("please try again later");
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#entrance {
  margin-top: 50px;
  margin-bottom: 150px;
  p {
    color: $fontColor_white;
    text-align: center;
    font-weight: bold;
  }

  input {
    border-radius: 9px;
    outline: none;
  }

  .gender {
    background: $background_white;
    cursor: pointer;

    &:first-of-type {
      border-radius: 6px 0 0 6px;
    }

    &:last-of-type {
      border-radius: 0 6px 6px 0;
    }

    &.active {
      background: $blue;
      color: $fontColor_white;
    }
  }

  .py-3 {
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
  }

  button {
    border-radius: 9px;
  }
}
</style>
