<template>
  <section id="notifications" v-if="notifications">
    <slot></slot>
    <b-modal id="notifications" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div v-for="(notification, i) in notifications" :key="i">
        <div class="d-flex justify-content-between align-content-center border-bottom py-2 mt-2">
          <div class="d-flex align-items-top">
            <img
              class="user-img rounded-circle"
              src="../../../assets/icons/notification.gif"
              alt="user image"
            />
          </div>
          <div class="col-10 px-0">
            <div class="col-12 px-0 d-flex justify-content-between align-items-center">
              <p class="font-16 font-weight-bold mb-1">{{notification.title}}</p>
              <!-- <div class="mx-2">ico</div> -->
            </div>
            <div>
              <p class="desc font-14 text-secondary col-10 px-0">{{notification.body}}</p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
export default {
  computed: {
    notifications() {
      return this.$store.getters.notifications;
    }
  },
  created() {
    this.$store.dispatch("NOTIFICATIONS");
  }
};
</script>

<style lang="scss">
#notifications {
  img {
    outline: none;
  }
  .user-img {
    width: 40px;
    height: 40px;
  }

  .desc {
    height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
    outline: none;
  }
  .menu-item {
    outline: none;
  }
  .modal-content {
    border: none;
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