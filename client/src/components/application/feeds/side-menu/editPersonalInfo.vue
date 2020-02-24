<template>
  <section id="editPersonalInfo" ref="editPersonalInfo" v-if="user">
    <p
      class="menu-item mb-0 font-14 py-3 pointer"
      slot
      v-b-modal.editPersonalInfo
    >Edit personal info</p>
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
          <div class="d-inline-block position-relative">
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
              :config="config"
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
      config: {
        maxDate: new Date()
      },
      showInterestList: false,
      disableEdit: false
    };
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
          this.resetModal(val)
        }
      }
    }
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
      try {
        let loader = this.$loading.show();
        this.$store.dispatch("EDITPROFILE", this.form).then(res => {
          loader.hide();
          location.reload();
        });
      } catch (error) {
        loader.hide();
        this.$toasted.error("error");
      }
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