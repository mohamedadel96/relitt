<template>
  <section id="createEvent">
    <button class="btn btn-primary btn-block mb-2 py-2 font-12 pointer" v-b-modal.createEvent>create Event</button>
    <b-modal
      @hide="clearData"
      id="createEvent"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
    >
      <p class="text-center font-weight-bold font-18">Create event</p>
      <form @submit.prevent>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Title</label>
            <input
              class="form-controls py-2 px-1 col-12"
              type="text"
              v-model="form.title"
              placeholder="Title"
            />
          </div>
        </div>
        <div class="col-12 px-0 d-flex">
          <div class="col-6 px-1 form-group d-flex overflow-hidden">
            <div class="col-12 px-1">
              <label class="font-12 text-secondary">Start date</label>
              <flat-pickr
                class="form-controls py-2 px-1 col-12"
                v-model="form.start_date"
                placeholder="Start date"
              ></flat-pickr>
            </div>
          </div>
          <div class="col-6 px-1 form-group d-flex overflow-hidden">
            <div class="col-12 px-1">
              <label class="font-12 text-secondary">End date</label>
              <flat-pickr
                class="form-controls py-2 px-1 col-12"
                v-model="form.end_date"
                placeholder="End date"
              ></flat-pickr>
            </div>
          </div>
        </div>
        <div class="form-group d-flex overflow-hidden mt-2">
          <div class="col-12 px-2">
            <label class="font-12 text-secondary">Description</label>
            <textarea-autosize
              placeholder="Type description here..."
              class="description form-controls col-12 px-1"
              v-model="form.description"
              :min-height="30"
              :max-height="350"
            />
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
            @click="createEvent"
          >Upload</button>
        </div>
      </form>
    </b-modal>
  </section>
</template> 
<script>
import {Bus} from '../../../main'
export default {
  data() {
    return {
      form: {
        title: null,
        description: null,
        start_date: null,
        end_date: null,
        images: []
      },
      disableUploading: false
    };
  },
  methods: {
    createEvent() {
      try {
        this.$store.dispatch("CREATEEVENT", this.form).then(res => {
          this.$toasted.success(res);
        });
      } catch (error) {
        console.log(error);
      }
    },
    clearData() {
      this.form.title = null;
      this.form.description = null;
      this.form.start_date = null;
      this.form.end_date = null;
      this.form.images = [];
    },
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
          res.map(file => {
            this.form.images.push(file.filePath);
          });

          this.disableUploading = false;
        });
      } catch (error) {
        this.$toasted.error("error while uploading files");
      }
    }
  },
  mounted() {
    Bus.$on('openCreateEvent', () =>{
      this.$bvModal.show('createEvent')
    })
  },
};
</script>

<style lang="scss">
#createEvent {
  img {
    outline: none;
  }
  .modal-dialog {
    margin: 150px auto 0 10px;
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
      left: 45%;
      background: white;
      transform: rotate(45deg);
      z-index: 1;
    }
  }

  form {
    .form-group {
      input,
      .description {
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
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 380px;
    }

  }
  @media (max-width: 767px) {
  .modal-dialog {
    margin: 150px 10px 0 auto;
    position: relative;
  }
  .modal-content {
    border: none;
    &::after {
      left: 85%;
    }
  }
  }
}
</style>