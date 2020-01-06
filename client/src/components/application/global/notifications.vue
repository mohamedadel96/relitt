<template>
  <section id="notifications">
    <slot></slot>
    <b-modal id="notifications" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div>
        <div class="d-flex justify-content-between align-content-center">
          <div class="d-flex align-items-center">
            <img
              class="user-img rounded-circle"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1024px-Facebook_icon.svg.png"
              alt="user image"
            />
          </div>
          <div class="col-10 px-0">
            <div class="col-12 px-0 d-flex justify-content-between align-items-center">
              <h5>title goes here</h5>
              <div class="mx-2">ico</div>
            </div>
            <div>
              <p>notification body goes here notification body goes here</p>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
export default {};
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

  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
    outline: none;
  }
  .menu-item {
    outline: none;
  }
  @media (min-width: 576px) {
    .modal-content {
      border: none;
      &::after {
        content: "";
        width: 15px;
        height: 15px;
        display: block;
        position: absolute;
        top: -7.5px;
        right: 33.4%;
        background: white;
        transform: rotate(45deg);
        z-index: 1;
      }
    }
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>