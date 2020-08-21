<template>
  <section id="appSection">
    <div class="content d-flex align-items-center justify-content-between container">
      <div class="col-md-7 col-12">
        <h1 class="text-white pt-4">Only one APP for all Water Activities</h1>
        <p class="text-white">
          We have made life easier for you now by providing a multi-usage application for users and centers both.
          <br />We have a mine of services you will absolutely like ... you have to check them
        </p>
        <div>
          <p class="text-white">download now</p>
        </div>
        <div class="d-flex align-items-center justify-content-start">
          <div class="mr-3">
            <a href="#">
              <img src="../../assets/img/Image 15.png" alt="andriod download" class="mx-auto" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src="../../assets/img/Image 16.png" alt="ios download" class="mx-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#appSection {
  background-image: linear-gradient(rgba(0, 0, 0, 0.39), #165566d2),
    url("https://www.eloundamare.com/img/Backgrounds/Experiences/all/Scuba-Diving.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;

  .content {
    height: 500px;

    h1 {
      letter-spacing: 2px;
      word-spacing: 1px;
      font-weight: bold;
    }

    p {
      opacity: 0.9;
      word-spacing: 2px;
    }

    button {
      color: white;
      transition: 0.4s;

      &:first-of-type {
        background: $darkBlue;
        border: 1px solid $darkBlue;

        &:hover {
          background: $transDarkBlue;
        }
      }

      &:last-of-type {
        background: none;
        border: 1px solid $background_white;

        &:hover {
          background: $background_white;
          color: $darkBlue;
        }
      }
    }
  }
}
</style>
