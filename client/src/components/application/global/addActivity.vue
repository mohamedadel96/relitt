<template>
  <div id="addActivity">
    <slot></slot>
    <b-modal id="addActivity" hide-backdrop content-class="shadow" hide-header hide-footer>
      <form @submit.prevent>
        <div>
          <select>
            <option :value="true"></option>
          </select>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {

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
    margin: 76px 10px 0 auto;
  }
  .modal-content {
    border: none;
  }
}
</style>