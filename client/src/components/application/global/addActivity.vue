<template>
  <div id="addActivity">
    <slot></slot>
    <b-modal id="addActivity" hide-backdrop content-class="shadow" hide-header hide-footer>
      <form @submit.prevent>
        <div class="form-group d-flex overflow-hidden">
          <div class="col-12 px-2">
            <select class="form-controls py-3 col-12" v-model="form.type_id">
              <option class="option" :value="1">diving</option>
              <option class="option" :value="2">scupa diving</option>
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
            />
          </div>

          <div class="col-6 px-2">
            <input
              class="form-controls py-3 col-12"
              type="number"
              min="0"
              v-model="form.end_air_level"
              placeholder="End air level"
            />
          </div>
        </div>
        <div class="col-12 px-2 border-bottom mb-1">
          <p class="font-weight-bold text-secondary">Visibility</p>
          <div class="d-flex">
            <div class="col-3 px-3">
              <p>icon</p>
              <p>Clear</p>
            </div>
            <div class="col-3 px-3">
              <p>icon</p>
              <p>Normal</p>
            </div>
            <div class="col-3 px-3">
              <p>icon</p>
              <p>Bad</p>
            </div>
          </div>
        </div>
        <div class="my-4">
          <div>imgs will show here</div>
          <div class="mt-3">
            <input type="file" multiple class="d-none" ref="photos" />
            <button
              @click="$refs.photos.click()"
              class="btn btn-light px-5 text-secondary font-weight-bold"
            >Add photo</button>
          </div>
        </div>
        <div class="col-12 px-2">
          <button class="btn btn-primary btn-block btn-lg py-2">Upload</button>
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
        date: new Date(),
        duration: NaN,
        depth: NaN,
        visibility: 1,
        temprature: NaN,
        start_air_level: NaN,
        end_air_level: NaN,
        spot_name: null,
        location_name: null,
        lat: null,
        lng: null
      }
    };
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
    &:after {
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
    input {
      outline: none !important;
    }
    .form-group {
      .form-controls {
        border: none;
        border-bottom: 1px solid #ddd;
        outline: none !important;
      }
    }
  }
}
</style>