<template>
  <div>
    <button
      slot="createEvent"
      class="btn btn-primary btn-block mb-2 py-2 fontXS"
      @click="$refs.createEvent.open()"
    >create Event</button>
    <!-- Modal -->
    <sweet-modal ref="createEvent" title="Create Event">
      <div class="modal-body">
        <form>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Title" v-model="form.title" />
          </div>
          <div class="form-group">
            <input type="date" class="form-control" placeholder="Start Date" v-model="form.start_date"  />
          </div>
          <div class="form-group">
            <input type="date" class="form-control" placeholder="End Date" v-model="form.end_date"  />
          </div>
          <!-- <div class="form-group">
            <input type="text" class="form-control" placeholder="Location" v-model="form.location" />
          </div> -->
          <div class="form-group">
            <textarea class="form-control" id="message-text" placeholder="Description" v-model="form.description"></textarea>
          </div>
          <div class="form-group">
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              placeholder="Add Photo"
            />
          </div>
          <button type="button" class="btn btn-primary" @click="create()">Create</button>
        </form>
      </div>
    </sweet-modal>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      form:{
        title:null,
        description:null,
        start_date:null,
        end_date:null,
        images:["null"]
      }
  };
  },
  methods:{
    async create(){
            try {
              const data = this.form
        let res = await this.$store.dispatch("CREATEEVENT", this.form);
      } catch (error) {
        console.log(error);
      }

    }
  }
  
};
</script>

<style scoped>
</style>