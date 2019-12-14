<template>
    <div>
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary btn-block mb-2 py-2 fontXS" data-toggle="modal" data-target="#exampleModalCenter">
            <slot></slot>
        </button> -->
        <!-- Modal -->
        <sweet-modal title="Create Event" >
            test
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Title">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Date">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control"  placeholder="Location">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="message-text" placeholder="Description"></textarea>
                    </div>
                    <div class="form-group">
                        <input type="file" class="form-control-file" id="exampleFormControlFile1" placeholder="Add Photo">
                    </div>
                    <button type="button" class="btn btn-primary">Create</button>
                </form>
            </div>
        </sweet-modal>
    </div>
</template> 
<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'

export default {
    data() {
        return {
                showModal: false
        }
    },
}
</script>

<style scoped>

</style>