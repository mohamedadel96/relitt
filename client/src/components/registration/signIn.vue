<template>
  <section id="sign_in">
    <div class="mb-5">
      <p>just few info to go</p>
    </div>

    <div>
      <form>
        <div class="d-flex justify-content-between my-3">
          <div class="col-6 pl-0 pr-2">
            <input class="col-12 border-0 py-2" type="text" />
          </div>
          <div class="col-6 pl-2 pr-0">
            <input class="col-12 border-0 py-2" type="text" />
          </div>
        </div>

        <div>
          <input class="col-12 border-0 py-2" type="text" />
        </div>

        <div>
          <div class="d-flex my-3">
            <div class="bill col-6 py-2 text-center">Male</div>
            <div class="bill col-6 py-2 text-center">female</div>
          </div>
        </div>

        <div class="mt-4">
          <button class="btn btn-primary btn-block py-2">Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#sign_in {
  p {
    color: $fontColor_white;
    text-align: center;
    font-weight: bold;
  }
  input {
    border-radius: 9px;
    outline: none;
  }
  .bill {
    background: $background_white;
    &:first-of-type {
      border-radius: 6px 0 0 6px;
    }
    &:last-of-type {
      border-radius: 0 6px 6px 0;
      background: $blue;
      color: $fontColor_white;
    }
  }
  .py-2 {
    padding-top: 0.7rem !important;
    padding-bottom: 0.7rem !important;
  }

  .my-3 {
    margin-top: 0.7rem !important;
    margin-bottom: 0.7rem !important;
  }

  button {
    border-radius: 6px;
  }
}
</style>
