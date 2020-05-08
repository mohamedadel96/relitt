<template>
  <section id="createEvent">
    <button
      class="btn btn-primary btn-block mb-2 py-2 font-16 pointer"
      v-b-modal.createEvent
    >create Event</button>
    <b-modal
      @hide="clearData"
      id="createEvent"
      hide-backdrop
      content-class="shadow"
      hide-header
      hide-footer
      ref="modal"
    >
      <p class="text-center font-weight-bold font-18">
        <span v-show="!editState">Create</span>
        <span v-show="editState">Edit</span> event
      </p>
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
                v-model="firstDate"
                :config="minConfig"
                placeholder="Start date"
                @on-change="onFromChange"
              ></flat-pickr>
            </div>
          </div>
          <div class="col-6 px-1 form-group d-flex overflow-hidden">
            <div class="col-12 px-1">
              <label class="font-12 text-secondary">End date</label>
              <flat-pickr
                class="form-controls py-2 px-1 col-12"
                v-model="secondDate"
                :config="maxConfig"
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
            <div class="d-inline-block position-relative" v-for="(img, i) in form.images" :key="i">
              <img class="activity-img m-2 rounded pointer border" :src="img" alt />
              <div
                class="dlt-img rounded-circle text-white font-weight-bold pointer"
                @click="form.images.splice(i, 1)"
              >x</div>
            </div>
          </div>

          <div class="mt-3 mx-2">
            <input class="d-none" type="file" ref="photos" @change="uploadFiles" />
            <button
              @click="$refs.photos.click()"
              class="btn btn-light px-5 text-secondary font-weight-bold py-2"
            >Add photo</button>
          </div>
        </div>
        <div class="col-12 px-2">
          <button
            v-if="!editState"
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableUploading"
            @click="createEvent"
          >Save</button>
          <button
            v-if="editState"
            class="btn btn-primary btn-block btn-lg py-2"
            :disabled="disableUploading"
            @click="editEvent"
          >Update</button>
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
        id: null,
        title: null,
        description: null,
        start_date: null,
        end_date: null,
        images: [],
        start_time:null,
        end_time:null
      },
      minConfig: {
        minDate: new Date(),
        enableTime: true
      },
      maxConfig: {
        minDate: null,
        enableTime: true
      },
      firstDate:null,
      secondDate:null,
      editState: false,
      disableUploading: false
    };
  },
  watch:{
    firstDate(val){
      this.form.start_date = val.split(" ")[0]
      this.form.start_time = val.split(" ")[1]
    },    
    secondDate(val)  {
      this.form.end_date = val.split(" ")[0]
      this.form.end_time = val.split(" ")[1]
    },
  },
  methods: {
    onFromChange(selectedDates, dateStr, instance) {
      this.$set(this.maxConfig, "minDate", dateStr);
    },

    uploadFiles() {
      try {
        let loader = this.$loading.show();
        this.disableUploading = true;
        let formData = new FormData();

        for (let i = 0; i < this.$refs.photos.files.length; i++) {
          let file = this.$refs.photos.files[i];
          formData.append("files[" + i + "]", file);
        }

        this.$store.dispatch("UPLOADFILES", formData).then(res => {
          this.$toasted.success("uploaded successfully");
          this.form.images = [];
          res.map(file => {
            this.form.images.push(file.filePath);
          });

          this.disableUploading = false;
          loader.hide();
        });
      } catch (error) {
        this.$toasted.error("error while uploading files");
        loader.hide();
      }
    },
    createEvent() {
      let loader = this.$loading.show();
      this.$store
        .dispatch("CREATEEVENT", this.form)
        .then(res => {
          this.$toasted.success(res);
          this.$refs['modal'].hide()
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    editEvent() {
      let loader = this.$loading.show();
      this.$store
        .dispatch("EDITEVENT", this.form)
        .then(res => {
          this.$toasted.success(res);
          this.$refs['modal'].hide()
          loader.hide();
        })
        .catch(message => {
          this.$toasted.error(message);
        })
        .finally(() => {
          loader.hide();
        });
    },
    clearData() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  mounted() {
    Bus.$on("openCreateEvent", () => {
      this.$bvModal.show("createEvent");
    });
    Bus.$on("EditEvent", event => {
      this.form.id = event.id;
      this.form.title = event.title;
      this.form.description = event.description;
      this.form.start_date = event.start_date;
      this.form.end_date = event.end_date;
      this.form.images.push(event.image);
      this.editState = true;
      this.$bvModal.show("createEvent");
    });
  }
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
    }
  }
}
</style>