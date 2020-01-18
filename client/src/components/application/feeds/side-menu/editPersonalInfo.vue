<template>
  <section id="editPersonalInfo" v-if="user">
    <slot></slot>
    <b-modal id="editPersonalInfo" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="text-center font-weight-bold font-18">Edit personal info</p>
      <form @submit.prevent>
        <div class="avatar d-flex justify-content-center mb-4">
          <input
            class="form-control-file d-none"
            type="file"
            id="exampleFormControlFile1"
            placeholder="Add Photo"
            ref="avatar"
            @change="uploadFiles('avatar')"
            accept="image/*"
          />
          <img class="pointer" @click="$refs.avatar.click()" :src="user.image" alt="personal image" />
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Firstname</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.firstname"
              placeholder="Firstname"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Lastname</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.lastname"
              placeholder="Lastname"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Position</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.type"
              placeholder="Position"
            />
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
            <flat-pickr
              class="form-controls py-2 px-1 col-12"
              v-model="form.birthdate"
              placeholder="Birthdate"
            ></flat-pickr>
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
        <div class="mt-5">
          <div class="form-group d-flex overflow-hidden">
            <div class="col-12 px-2">
              <label class="font-12 text-secondary">Interests</label>
              <div class="position-relative" v-for="(interest, i) in form.interests" :key="i">
                <input
                  class="form-controls py-2 px-1 col-12"
                  type="text"
                  v-model="form.interests[i]"
                  placeholder="Position"
                />
                <span class="delete-inerests pointer" @click="form.interests.splice(i, 1)">del</span>
              </div>
            </div>
          </div>
          <div class="border-bottom pt-2 px-2">
            <p class="text-primary pointer" @click="form.interests.push('')">+ Add new interest</p>
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
        interests: [""],
        location_name: null,
        lat: "",
        lng: ""
      },
      disableEdit: false
    };
  },
  computed: {
    user() {
      return this.$store.getters.profile;
    }
  },
  watch: {
    user: {
      immediate: true,
      handler(val) {
        if (val) {
          this.form.firstname = val.firstname;
          this.form.lastname = val.lastname;
          this.form.image = val.image;
          this.form.type = val.type;
          this.form.bio = val.bio;
          this.form.birthdate = val.birthdate;
          this.form.interests = val.interests;
          this.form.location_name = val.location_name;
          this.form.lat = val.lat;
          this.form.lng = val.lng;
        }
      }
    }
  },
  methods: {
    uploadFiles(ref) {
      try {
        this.disableEdit = true;
        let formData = new FormData();

        for (let i = 0; i < this.$refs[ref].files.length; i++) {
          let file = this.$refs[ref].files[i];
          formData.append("files[" + i + "]", file);
        }

        this.$store.dispatch("UPLOADFILES", formData).then(res => {
          this.$toasted.success("uploaded successfully");
          this.form.image = res[0].filePath;

          this.disableEdit = false;
        });
      } catch (error) {
        this.$toasted.error("error while uploading files");
      }
    },
    editProfile() {
      try {
        this.$store.dispatch("EDITPROFILE", this.form).then(res => {
          location.reload();
        });
      } catch (error) {
        this.$toasted.error("error");
      }
    }
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