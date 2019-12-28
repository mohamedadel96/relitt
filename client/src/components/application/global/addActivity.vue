<template>
  <div id="addActivity">
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
            <select class="form-controls py-3 col-12 pointer" v-model="form.type_id">
              <option class="fontLG" :value="1">diving</option>
              <option class="fontLG" :value="2">scupa diving</option>
            </select>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <input
              class="form-controls py-3 col-12"
              type="text"
              v-model="form.title"
              placeholder="Title"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <flat-pickr class="form-controls py-3 col-12" v-model="form.date" placeholder="Date"></flat-pickr>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <input
              class="form-controls py-3 col-12"
              type="number"
              min="0"
              v-model="form.duration"
              placeholder="Duration"
              oninput="validity.valid||(value='');"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <input
              class="form-controls py-3 col-12"
              type="number"
              min="0"
              v-model="form.depth"
              placeholder="Depth"
              oninput="validity.valid||(value='');"
            />
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <input
              class="form-controls py-3 col-12"
              type="number"
              min="0"
              v-model="form.temprature"
              placeholder="Temprature"
              oninput="validity.valid||(value='');"
            />
          </div>
        </div>
        <div class="form-group d-flex">
          <div class="col-6 px-2">
            <input
              class="form-controls py-3 col-12"
              type="number"
              min="0"
              v-model="form.start_air_level"
              placeholder="Start air level"
              oninput="validity.valid||(value='');"
            />
          </div>

          <div class="col-6 px-2">
            <input
              class="form-controls py-3 col-12"
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
              <div class="pointer" @click="$refs.clear.click()">
                <p>icon</p>
                <p :class="form.visibility === 1 ? 'text-primary' : ''">Clear</p>
              </div>
            </div>
            <div class="col-4 px-3">
              <input class="d-none" ref="normal" type="radio" v-model="form.visibility" :value="2" />
              <div class="pointer" @click="$refs.normal.click()">
                <p>icon</p>
                <p :class="form.visibility === 2 ? 'text-primary' : ''">Normal</p>
              </div>
            </div>
            <div class="col-4 px-3">
              <input class="d-none" ref="bad" type="radio" v-model="form.visibility" :value="3" />
              <div class="pointer" @click="$refs.bad.click()">
                <p>icon</p>
                <p :class="form.visibility === 3 ? 'text-primary' : ''">Bad</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div class="d-flex flex-wrap">
            <div
              class="position-relative m-2 border rounded"
              v-for="(img, i) in form.images"
              :key="i"
            >
              <div
                class="activityImg rounded"
                :style="{ 'background-image': 'url(' + img + ')' }"
                @click="form.images.splice(i, 1)"
              ></div>
            </div>
          </div>

          <div class="mt-3 mx-2">
            <input class="d-none" type="file" multiple ref="photos" @change="uploadFiles" />
            <button
              @click="$refs.photos.click()"
              class="btn btn-light px-5 text-secondary font-weight-bold py-2"
            >Add photo</button>
          </div>
        </div>
        <div class="col-12 px-2">
          <button
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableUploading"
            @click="saveActivity"
          >Upload</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type_id: 1,
        title: null,
        date: null,
        duration: null,
        depth: null,
        visibility: 1,
        temprature: null,
        start_air_level: null,
        end_air_level: null,
        spot_name: null,
        location_name: null,
        lat: null,
        lng: null,
        images: []
      },
      disableUploading: false
    };
  },
  methods: {
    uploadFiles() {
      try {
        this.disableUploading = true;
        let formData = new FormData();

        for (let i = 0; i < this.$refs.photos.files.length; i++) {
          let file = this.$refs.photos.files[i];
          formData.append("files[" + i + "]", file);
        }

        this.$store.dispatch("UPLOADFILES", formData).then(res => {
          this.$toasted.success("uploaded successfully");
          res.map(file => this.form.images.push(file.filePath));

          this.disableUploading = false;
        });
      } catch (error) {
        this.$toasted.error("error while uploading files");
      }
    },
    saveActivity() {
      console.log(this.form);
    },
    clearData() {
      this.form.type_id = 1;
      this.form.title = null;
      this.form.date = null;
      this.form.duration = null;
      this.form.depth = null;
      this.form.visibility = 1;
      this.form.temprature = null;
      this.form.start_air_level = null;
      this.form.end_air_level = null;
      this.form.spot_name = null;
      this.form.location_name = null;
      this.form.lat = null;
      this.form.lng = null;
      this.form.images = [];
    }
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
    &::after {
      content: "";
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      top: -7.5px;
      right: 20px;
      background: white;
      transform: rotate(45deg);
      z-index: 1;
    }
  }

  form {
    .form-group {
      input {
        outline: none !important;
      }
      select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: url("../../../assets/icons/selectArrow.svg");
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
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>