<template>
  <section id="addActivity">
    <slot></slot>
    <b-modal
      @hide="clearData"
      id="addActivity"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >
      <form @submit.prevent>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Type</label>
            <select class="form-controls py-2 col-12 pointer" v-model="form.type_id">
              <option class="font-20" :value="1">Free diving</option>
              <option class="font-20" :value="2">scuba diving</option>
            </select>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Title</label>
            <input
              class="form-controls py-2 col-12"
              type="text"
              v-model="form.title"
              placeholder="Title"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden position-relative">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Date</label>
            <datetime
              v-model="form.date"
              placeholder="Date"
              class="form-controls py-2 col-12"
              :max-datetime="config"
              input-style="border:none "
            ></datetime>
          </div>
          <div class="position-absolute">
            <img src="../../../assets/icons/calender-icon.svg" />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden position-relative">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Duration</label>
            <input
              class="form-controls py-2 col-12"
              type="number"
              min="0"
              v-model="form.duration"
              placeholder="Duration"
              oninput="validity.valid||(value='');"
            />
          </div>
          <div class="position-absolute text-secondary">min</div>
        </div>
        <div class="form-group d-flex overflow-hidden position-relative">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Depth</label>
            <input
              class="form-controls py-2 col-12"
              type="number"
              min="0"
              v-model="form.depth"
              placeholder="Depth"
              oninput="validity.valid||(value='');"
            />
          </div>
          <div class="position-absolute text-secondary text-center" style="right:7%">m</div>
        </div>
        <div :class="['form-group overflow-hidden', form.type_id === 1 ? 'd-flex' : 'd-none']">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Temprature</label>
            <input
              class="form-controls py-2 col-12"
              type="number"
              min="0"
              v-model="form.temprature"
              placeholder="Temprature"
              oninput="validity.valid||(value='');"
            />
          </div>
          <div class="position-absolute text-secondary text-center" style="right:7%">&#8451;</div>
        </div>
        <div class="form-group d-flex" v-if="form.type_id !== 1">
          <div class="col-6 px-2">
            <label class="font-12 text-secondary">Start air level</label>
            <input
              class="form-controls py-2 col-12"
              type="number"
              min="0"
              v-model="form.start_air_level"
              placeholder="Start air level"
              oninput="validity.valid||(value='');"
            />
          </div>

          <div class="col-6 px-2">
            <label class="font-12 text-secondary">End air level</label>
            <input
              class="form-controls py-2 col-12"
              type="number"
              min="0"
              v-model="form.end_air_level"
              placeholder="End air level"
              oninput="validity.valid||(value='');"
            />
          </div>
        </div>
        <div class="col-12 px-2 border-bottom mb-1">
          <p class="font-weight-bold text-secondary">Visibility</p>
          <div class="d-flex">
            <div class="col-4 px-3">
              <input class="d-none" ref="clear" type="radio" v-model="form.visibility" :value="1" />
              <div class="text-center pointer" @click="$refs.clear.click()">
                <img
                  :src="form.visibility === 1 ? require('../../../assets/icons/flower-blue.svg') : require('../../../assets/icons/flower-silver.svg')"
                  alt
                />
                <p :class="form.visibility === 1 ? 'text-primary' : ''">Clear</p>
              </div>
            </div>
            <div class="col-4 px-3">
              <input class="d-none" ref="normal" type="radio" v-model="form.visibility" :value="2" />
              <div class="text-center pointer" @click="$refs.normal.click()">
                <img
                  :src="form.visibility === 2 ? require('../../../assets/icons/is-flower-blue.svg') : require('../../../assets/icons/is-flower-silver.svg')"
                  alt
                />
                <p :class="form.visibility === 2 ? 'text-primary' : ''">Normal</p>
              </div>
            </div>
            <div class="col-4 px-3">
              <input class="d-none" ref="bad" type="radio" v-model="form.visibility" :value="3" />
              <div class="text-center pointer" @click="$refs.bad.click()">
                <img
                  :src="form.visibility === 3 ? require('../../../assets/icons/cloud-blue.svg') : require('../../../assets/icons/cloud-silver.svg')"
                  alt
                />
                <p :class="form.visibility === 3 ? 'text-primary' : ''">Bad</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div class="d-flex flex-wrap">
            <div class="d-inline-block position-relative" v-for="(img, i) in form.images" :key="i">
              <img class="activity-img m-2 rounded pointer border" :src="img" alt />
              <div
                class="dlt-img rounded-circle text-white font-weight-bold pointer"
                @click="form.images.splice(i, 1)"
              >x</div>
            </div>
          </div>

          <div class="mt-3 mx-2">
            <input class="d-none" type="file" multiple ref="photos" @change="uploadFiles" />
            <button
              @click="$refs.photos.click()"
              class="btn btn-light px-4 text-secondary font-weight-bold py-2"
            >
              <img src="../../../assets/icons/image.svg" alt />
              <span class="px-3">Add photo</span>
            </button>
          </div>
        </div>
        <div class="col-12 px-2">
          <button
            v-if="!editState"
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableUploading"
            @click="saveActivity"
          >Upload</button>
          <button
            v-if="editState"
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableUploading"
            @click="editActivity"
          >Edit</button>
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
        post_id: null,
        activity_id: null,
        type_id: 1,
        title: null,
        date: null,
        duration: null,
        depth: null,
        visibility: 1,
        temprature: null,
        start_air_level: null,
        end_air_level: null,
        spot_name: "egypt",
        location_name: "dd",
        lat: "32",
        lng: "12",
        images: []
      },
      config: null ,
      disableUploading: false,
      editState: false
    };
  },
  watch: {
    "form.end_air_level": {
      handler: function(val) {
        if (Number(val) > Number(this.form.start_air_level)) {
          this.form.end_air_level = null;
          this.$toasted.error('Invalid data "The end air level"');
        }
      }
    },
    "form.date": {
      handler: function(val) {
        var date = val.split("T")[0];
        return (this.form.date = date);
      }
    }
  },
  methods: {
    uploadFiles() {
      this.disableUploading = true;
      let loader = this.$loading.show();

      let formData = new FormData();

      for (let i = 0; i < this.$refs.photos.files.length; i++) {
        let file = this.$refs.photos.files[i];
        formData.append("files[" + i + "]", file);
      }

      this.$store
        .dispatch("UPLOADFILES", formData)
        .then(res => {
          this.$toasted.success("uploaded successfully");
          res.map(file => this.form.images.push(file.filePath));
        })
        .catch(message => {
          this.$toasted.error("error while uploading files");
          this.$toasted.error(message);
        })
        .finally(() => {
          this.disableUploading = false;
          loader.hide();
        });
    },
    saveActivity() {
      let loader = this.$loading.show();

      this.$store
        .dispatch("ADDACTIVITY", this.form)
        .then(res => {
          this.clearData();
          this.$toasted.success(res);
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    editActivity() {
      let loader = this.$loading.show();
      this.$store
        .dispatch("EDITACTIVITY", this.form)
        .then(res => {
          this.clearData();
          this.$toasted.success(res);
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    clearData() {
      this.$bvModal.hide("addActivity");
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  created() {
    Bus.$on("editActivity", payload => {
      this.form.activity_id = payload.id;
      this.form.type_id = payload.type_id;
      this.form.title = payload.title;
      this.form.date = payload.date;
      this.form.duration = payload.duration;
      this.form.depth = payload.depth;
      this.form.visibility = payload.visibility;
      this.form.temprature = payload.temprature;
      this.form.start_air_level = payload.start_air_level;
      this.form.end_air_level = payload.end_air_level;
      this.form.spot_name = payload.spot_name;
      this.form.location_name = payload.location_name;
      this.form.lat = payload.lat;
      this.form.lng = payload.lng;
      this.form.images = payload.images.map(img => img.url);
      this.editState = true;
      this.$bvModal.show("addActivity");
    });
    Bus.$on("addActivity", () => {
      this.clearData();
      this.$bvModal.show("addActivity");
    });
    var maxdate = new Date()
    this.config = maxdate.toISOString()

  }
};
</script>

<style lang="scss">
#addActivity {
  img {
    outline: none;
  }
  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
  }
  .modal-content {
    border: none;
  }

  form {
    .position-absolute {
      top: 54%;
      right: 8%;
      width: 20px;
      height: 20px;
      &img {
        width: 100%;
        height: 100%;
      }
    }
    .form-group {
      input {
        outline: none !important;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url("../../../assets/icons/select-arrow.svg");
        background-repeat: no-repeat;
        background-position-x: 94%;
        background-position-y: 50%;
      }
      .form-controls {
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none !important;
      }
    }
    .activityImg {
      width: 150px;
      height: 150px;
      background-size: contain;
      cursor: pointer;
      &:hover {
        &::before {
          content: "";
          display: block;
          position: absolute;
          width: 150px;
          height: 150px;
          top: 0;
          left: 0;
          background: rgba(51, 51, 51, 0.384);
          border-radius: 50%;
          z-index: 1;
        }
        &::after {
          content: "x";
          display: block;
          position: absolute;
          width: 150px;
          height: 150px;
          top: -28px;
          left: 0;
          border-radius: 50%;
          font-size: 120px;
          color: rgba(255, 51, 0, 0.808);
          font-weight: bold;
          text-align: center;
          z-index: 1;
        }
      }
    }
  }

  .activity-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .dlt-img {
    position: absolute;
    top: 21px;
    left: 24px;
    font-size: 22px;
    text-align: center;
    background: #000000c2;
    width: 35px;
    height: 35px;
    z-index: 2;
  }

  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }

  @media (max-width: 576px) {
    .modal-dialog {
      margin: 80px 10px 0 10px !important;
    }
  }
}
</style>