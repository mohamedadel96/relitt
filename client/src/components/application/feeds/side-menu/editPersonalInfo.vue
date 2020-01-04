<template>
  <section id="editPersonalInfo" v-if="user">
    <slot></slot>
    <b-modal id="editPersonalInfo" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="text-center font-weight-bold fontMD">Edit personal info</p>
      <form>
        <div class="avatar d-flex justify-content-center mb-4">
          <input class="d-none" type="file" ref="avatar" />
          <img class="pointer" @click="$refs.avatar.click()" :src="user.image" alt="personal image" />
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="fontXS text-secondary">Firstname</label>
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
            <label class="fontXS text-secondary">Lastname</label>
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
            <label class="fontXS text-secondary">Position</label>
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
            <label class="fontXS text-secondary">Bio</label>
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
            <label class="fontXS text-secondary">Birthdate</label>
            <flat-pickr
              class="form-controls py-2 px-1 col-12"
              v-model="form.birthdate"
              placeholder="Birthdate"
            ></flat-pickr>
          </div>
        </div>
        <div class="mt-5">
          <div class="form-group d-flex overflow-hidden">
            <div class="col-12 px-2">
              <label class="fontXS text-secondary">Interests</label>
              <div class="position-relative" v-for="(interest, i) in form.interests" :key="i">
                <input
                  class="form-controls py-3 px-1 col-12"
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
          <button class="btn btn-primary btn-block btn-lg py-2">Update</button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
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
        location_name: "",
        lat: "",
        lng: ""
      }
    };
  },
  computed: {
    user() {
      return this.$store.getters.userCard;
    }
  },
  watch: {
    user(val) {
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
};
</script>

<style lang="scss">
#editPersonalInfo {
  form {
    .avatar {
      img {
        width: 70px;
        height: 70px;
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
      bottom: 0;
      right: 2px;
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