<template>
  <section id="editPersonalInfo" ref="editPersonalInfo" v-if="user">
    <div class="menu-item pointer" slot v-b-modal.editPersonalInfo>
      <div style="width: 18px; height: 18px; " class="m-1">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="pen"
          class="svg-inline--fa fa-pen fa-w-16 text-secondary"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
          />
        </svg>
      </div>
    </div>

    <b-modal
      id="editPersonalInfo"
      @hide="resetModal(user)"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >
      <p class="text-center font-weight-bold font-18">Edit personal info</p>
      <form @submit.prevent>
        <div class="avatar d-flex flex-wrap justify-content-center mb-4">
          <input
            :class="['form-control-file d-none' , {'is-invalid': $v.form.image.$error}]"
            type="file"
            id="exampleFormControlFile1"
            placeholder="Add Photo"
            ref="avatar"
            @change="uploadFiles('avatar')"
            accept="image/*"
          />

          <div class="d-block position-relative">
            <img
              class="pointer"
              @click="$refs.avatar.click()"
              :src="form.image ? form.image : require('../../../../assets/img/default-avatar.jpg')"
              alt="profile image"
            />
            <div
              v-if="form.image"
              class="dlt-img rounded-circle text-white font-weight-bold pointer"
              @click="form.image = null"
            >x</div>
          </div>
          <div v-if="$v.form.image.$error" class="invalid-feedback font-14 d-block">
            <span v-if="!$v.form.image.required">Image is required</span>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Firstname</label>
            <input
              :class="['form-controls py-2 px-1 col-12' , {'is-invalid': $v.form.firstname.$error}]"
              type="text"
              v-model="form.firstname"
              placeholder="Firstname"
            />

            <div v-if="$v.form.firstname.$error" class="invalid-feedback font-14">
              <span v-if="!$v.form.firstname.required">Firstname is required</span>
            </div>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Lastname</label>
            <input
              :class="['form-controls py-2 px-1 col-12' , {'is-invalid': $v.form.lastname.$error}]"
              type="text"
              v-model="form.lastname"
              placeholder="Lastname"
            />
            <div v-if="$v.form.lastname.$error" class="invalid-feedback font-14">
              <span v-if="!$v.form.lastname.required">lastname is required</span>
            </div>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Position</label>
            <input
              :class="['form-controls py-2 px-1 col-12' , {'is-invalid': $v.form.type.$error}]"
              type="text"
              v-model="form.type"
              placeholder="Position"
            />
            <div v-if="$v.form.type.$error" class="invalid-feedback font-14">
              <span v-if="!$v.form.type.required">Position is required</span>
            </div>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Bio</label>
            <textarea-autosize
              placeholder="Bio..."
              ref="Bio"
              class="form-controls col-12 px-1 py-2"
              v-model="form.bio"
              :min-height="40"
              :max-height="350"
              @input="(e)=> this.form.bio = e"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Birthdate</label>
            <!-- <flat-pickr
              :class="['form-controls py-2 px-1 col-12' , {'is-invalid': $v.form.birthdate.$error}]"
              :config="config"
              v-model="form.birthdate"
              placeholder="Birthdate"
            ></flat-pickr>-->

            <datetime
              v-model="form.birthdate"
              placeholder="Birthdate"
              class="form-controls py-2 px-1 col-12"
              :max-datetime="config"
              input-style="border:none "
            ></datetime>

            <div v-if="$v.form.birthdate.$error" class="invalid-feedback font-14">
              <span v-if="!$v.form.birthdate.required">Birthdate is required</span>
            </div>
          </div>
        </div>
        <div class="px-2">
          <label class="font-12 text-secondary">Location</label>
          <place-autocomplete-field
            v-model="form.location_name"
            name="place"
            api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
            placeholder="Location"
          ></place-autocomplete-field>
        </div>
        <div class="my-4">
          <div class="form-group d-flex overflow-hidden">
            <div class="col-12 px-2">
              <label class="font-12 text-secondary">Interests</label>
              <div class="d-flex flex-wrap">
                <h5 class="px-1 pointer" v-for="(item,i) in interestsList" :key="i">
                  <b-badge
                    class="p-2"
                    :variant="form.interests.includes(item.id) ? 'primary' : 'secondary'"
                    @click="toggleInterests(item.id)"
                  >
                    {{item.name}}
                    <span class="pl-2" v-show="form.interests.includes(item.id)">
                      <img
                        style="width:15px;hight:15px"
                        src="../../../../assets/icons/tick.svg"
                        alt
                      />
                    </span>
                  </b-badge>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 px-2 my-3">
          <button
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableEdit"
            @click="editProfile"
          >Update</button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import { Bus } from "../../../../main";
import { required, minLength, between } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        firstname: null,
        lastname: null,
        image: null,
        type: null,
        bio: null,
        birthdate: null,
        interests: [],
        location_name: null,
        lat: "",
        lng: ""
      },
      config: null,
      showInterestList: false,
      disableEdit: false
    };
  },
  validations: {
    form: {
      firstname: {
        required
      },
      lastname: {
        required
      },
      image: {
        required
      },
      type: {
        required
      },
      birthdate: {
        required
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters.profile;
    },
    interestsList() {
      return this.$store.getters.interestsList;
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(val) {
        if (val) {
          this.resetModal(val);
        }
      }
    },
    // "form.birthdate": {
    //   handler: function(val) {
    //     var dattte = val.split("T")[0];
    //     return (this.form.date = date);
    //   },
    //   immediate: true
    // }
  },
  methods: {
    resetModal(user) {
      this.form.firstname = user.firstname;
      this.form.lastname = user.lastname;
      this.form.image = user.image;
      this.form.type = user.type;
      this.form.bio = user.bio;
      this.form.birthdate = user.birthdate;
      this.form.interests = user.interests.map(item => item.id);
      this.form.location_name = user.location_name;
      this.form.lat = user.lat;
      this.form.lng = user.lng;
    },
    uploadFiles(ref) {
      try {
        this.disableEdit = true;
        let loader = this.$loading.show();
        this.$toasted.info("Please wait until uploading files");

        let formData = new FormData();

        for (let i = 0; i < this.$refs[ref].files.length; i++) {
          let file = this.$refs[ref].files[i];
          formData.append("files[" + i + "]", file);
        }

        this.$store.dispatch("UPLOADFILES", formData).then(res => {
          this.$toasted.success("uploaded successfully");
          this.form.image = res[0].filePath;

          this.disableEdit = false;
          loader.hide();
        });
      } catch (error) {
        loader.hide();
        this.$toasted.error("error while uploading files");
      }
    },
    editProfile() {
      let loader = this.$loading.show();
      this.$v.$touch();
      if (this.$v.$invalid) {
        return loader.hide();
      }
      this.$store
        .dispatch("EDITPROFILE", this.form)
        .then(res => {
          location.reload();
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    toggleInterests(id) {
      let check = this.form.interests.filter(item => item == id);
      if (check.length) {
        this.form.interests = this.form.interests.filter(item => item != id);
        return;
      }
      this.form.interests.push(id);
    }
  },
  created() {
    var maxdate = new Date();
    this.config = maxdate.toISOString();
    this.$store.dispatch("INTERESTSLIST");
  },
  mounted() {
    Bus.$on("openPersonalInfo", () => {
      this.$bvModal.show("editPersonalInfo");
    });
  }
};
</script>

<style lang="scss">
#editPersonalInfo {
  .menu-item {
    outline: none;
  }
  .dlt-img {
    position: absolute;
    top: -5px;
    left: -7px;
    font-size: 15px;
    text-align: center;
    background: #000000c2;
    width: 25px;
    height: 25px;
    z-index: 2;
  }
  form {
    .avatar {
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    input {
      outline: none !important;
    }
    .form-controls {
      border: none;
      border-bottom: 1px solid #ddd;
      outline: none !important;
    }
    .delete-inerests {
      position: absolute;
      bottom: 7px;
      right: 6px;
    }
    .autocomplete-field {
      .autocomplete-list-item > a {
        padding: 15px;
      }
      .form-group {
        margin-bottom: 0;

        input {
          border: none;
          border-bottom: 1px solid #ddd;
          padding: 1em 0;
          outline: none;
          border-radius: 0 !important;
          &:focus,
          &:active {
            outline: none !important;
            border-radius: 0 !important;
            border-bottom: 1px solid #ddd;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
          }
        }
      }
    }
  }
  .modal-dialog {
    margin: 80px auto 0 10px;
    position: relative;
  }
  .modal-content {
    border: none;
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>