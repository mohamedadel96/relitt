<template>
    <div>
        <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-block mb-2 py-2 fontXS" data-toggle="modal" data-target="#exampleModalCenter">
        <slot></slot>
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Create event</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
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
            </form>
        </div>
        <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-primary">Create</button>
        </div>
        </div>
    </div>
    </div>
    </div>
</template> 
<script>

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