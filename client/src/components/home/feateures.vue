<template>
  <section id="features" class="container">
    <div class="text-center d-flex flex-wrap justify-content-center py-5">
      <h3 class="text-primary col-12 font-weight-bold h5">FEATURES</h3>
      <h2 class="col-12 font-weight-bold">Experience the difference, save money</h2>
      <p
        class="col-md-7 col-12 desc"
      >We have astonishing features. You can enjoy our provided services, which make it easier to enjoy adventures. Discover our features, enjoy it.</p>
    </div>
    <div class="d-flex justify-content-between flex-wrap py-2">
      <div class="block col-md-4 col-12 py-3 text-center">
        <div class="circleDev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="37"
            height="37"
            viewBox="0 0 37 37"
          >
            <defs>
              <clipPath id="a">
                <rect class="a2" width="37" height="37" transform="translate(0.5 0.5)" />
              </clipPath>
            </defs>
            <g class="b2" transform="translate(-0.5 -0.5)">
              <path
                class="c2"
                d="M16.333,16.333a6.167,6.167,0,1,0-6.167-6.167A6.165,6.165,0,0,0,16.333,16.333Zm0,3.083C12.217,19.417,4,21.483,4,25.583v3.083H28.667V25.583C28.667,21.483,20.45,19.417,16.333,19.417Z"
                transform="translate(2.167 2.167)"
              />
              <path class="a2" d="M0,0H37V37H0Z" />
            </g>
          </svg>
        </div>
        <p class="font-weight-bold h3y-1">Custom your profile</p>
        <p
          class="desc"
        >A private space is available for you to share your activity and experience with the community</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">
        <div>
          <div class="circleDev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="54"
              height="54"
              viewBox="0 0 54 54"
            >
              <defs>
                <clipPath id="a">
                  <rect class="a3" width="54" height="54" transform="translate(0.245 0.245)" />
                </clipPath>
              </defs>
              <g class="b3" transform="translate(-0.245 -0.245)">
                <g transform="translate(2.842 9.322)">
                  <path
                    class="c3"
                    d="M1.989,29.553h9.169L16.934,17.9l8.029,20.168,8.6-32.487,7.47,23.973h9.739"
                    transform="translate(-1.989 -5.58)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <p class="font-weight-bold py-1">Track activity</p>
        <p
          class="desc"
        >Track your own activity now, with instant activity tracking indicator through the dashboard</p>
      </div>
      <div class="block col-md-4 col-12 py-3 text-center">

        <div class="circleDev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            class="rounded-circle"
          >
            <path fill="none" d="M0,0H37V37H0Z" />
            <path
              fill="#3e82f7"
              d="M17.417,15.721a1.7,1.7,0,1,0,1.7,1.7A1.691,1.691,0,0,0,17.417,15.721ZM17.417,2A15.417,15.417,0,1,0,32.833,17.417,15.422,15.422,0,0,0,17.417,2Zm3.376,18.793L8.167,26.667,14.04,14.04,26.667,8.167Z"
              transform="translate(1.083 1.083)"
            />
          </svg>
        </div>

        <p class="font-weight-bold py-1">Explore more</p>
        <p
          class="desc"
        >You will be always aware of all Surrounding events and activities wherever you are. So you can enjoy your time and connect with others</p>
      </div>
    </div>
    <div class="d-flex justify-content-center pb-4 pt-3">
      <router-link to="/registration/login">
        <button class="btn btn-primary rounded py-3 px-5">Get started now!</button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#features {
  .block {
    img {
      width: 120px;
    }
  }

  p {
    &.desc {
      opacity: 0.6;
    }
  }
  .circleDev {
    display: block;
    margin: 0 auto;
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    line-height: 90px;
    text-align: center;
  }
  .a3,
  .c3 {
    fill: none;
  }
  .b3 {
    clip-path: url(#a);
  }
  .c3 {
    stroke: #3e82f7;
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
  .a2 {
    fill: none;
  }
  .b2 {
    clip-path: url(#a);
  }
  .c2 {
    fill: #3e82f7;
  }
}
</style>
