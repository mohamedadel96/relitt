<template>
  <section id="left">
    <!-- <div class="position-relative rounded text-center p-3 mt-5 bg-white">
      <div class="position-absolute" style="top: -41px; right: 35%;">
        <img
          src="@/assets/img/default-avatar.jpg"
          alt="img"
          style="width: 80px; height: 80px; border-radius: 50%;"
        />
      </div>
      <div class="d-flex justify-content-between mt-5">
        <div>
          <p class="mb-0 pr-2 font-weight-bolder text-primary font-14">Victor Niculici</p>
          <p class="mb-0 text-secondary font-10">Diving specialist</p>
        </div>
        <editPersonalInfo />
        <!-- <div style="width: 18px; height: 18px; " class="m-1">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="pen"
            class="svg-inline--fa fa-pen fa-w-16 text-secondary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"
            />
          </svg>
        </div> 
      </div>
      <div class="mt-3 font-14">
        <p class="mb-0 text-dark">We are passionate about</p>
        <p class="mb-0 text-dark">creating diving better and saver</p>
      </div>
      <div class="d-flex justify-content-around mt-3">
        <div>
          <p class="mb-0 font-weight-bolder text-primary font-14">125</p>
          <p class="mb-0 text-secondary font-10">Followers</p>
        </div>
        <div class="px-4 border-right border-left">
          <p class="mb-0 font-weight-bolder text-primary font-14">150</p>
          <p class="mb-0 text-secondary font-10">Following</p>
        </div>
        <div>
          <p class="mb-0 font-weight-bolder text-primary font-14">8</p>
          <p class="mb-0 text-secondary font-10">Activity</p>
        </div>
      </div>
    </div>-->
    <div class="my-3 p-2 bg-white rounded">
      <div class="d-flex align-items-center mb-2">
        <div style="width: 18px; height: 18px; " class="mx-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="map-marker-alt"
            class="svg-inline--fa fa-map-marker-alt fa-w-12 text-primary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path
              fill="currentColor"
              d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
            />
          </svg>
        </div>
        <p class="mb-0 text-secondary">{{profile.location_name}}</p>
      </div>
      <div class="d-flex align-items-center mb-2">
        <div style="width:18px; height:18px" class="mx-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="calendar-alt"
            class="svg-inline--fa fa-calendar-alt fa-w-14 text-primary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
            />
          </svg>
        </div>
        <p class="mb-0 text-secondary">{{profile.birthdate}}</p>
      </div>
      <div class="d-flex align-items-center">
        <div style="width:18px ; height:18px" class="mx-2">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="globe"
            class="svg-inline--fa fa-globe fa-w-16 text-primary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
            />
          </svg>
        </div>
        <p class="mb-0 text-secondary">English,Arabic</p>
      </div>
    </div>
    <div class="my-3 p-2 bg-white rounded" style="width: 100%; height: 30%;">
      <p>Interests</p>
      <div class="d-flex flex-wrap">
        <h5 class="px-1 pointer" v-for="(item,i) in profile.interests" :key="i">
          <b-badge class="p-2" :variant="'primary'">
            {{item.name}}
          </b-badge>
        </h5>
      </div>
    </div>

    <div class="my-3 p-2 bg-white rounded">
      <p class="text-secondary">certificate & Training</p>
      <div class="d-flex">
        <div style="width:18px ; height:18px " class="mx-1">
          <!-- <img src="./image/Component 2.svg" alt="icon" class="bg-info" style="border-radius: 50%;" /> -->
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle"
            class="svg-inline--fa fa-circle fa-w-16 text-primary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-0 pl-2 font-14">PADI Scuba Diver Or PADI Scuba Diver To Start.</p>
        </div>
      </div>
      <div class="d-flex">
        <div style="width:18px ; height:18px " class="mx-1">
          <!-- <img src="./image/Component 2.svg" alt="icon" class="bg-info" style="border-radius: 50%;" /> -->
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="circle"
            class="svg-inline--fa fa-circle fa-w-16 text-primary"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
            />
          </svg>
        </div>
        <div>
          <p class="mb-0 pl-2 font-14">Advanced Open Water</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-between">
      <div class="col-6 pr-1 pl-0 text-center">
        <div class="bg-white rounded p-3">
          <!-- <img
            src="./image/Component 2.svg"
            alt="icon"
            class="bg-danger"
            style="border-radius: 50%;"

          />-->
          <div style="border-radius: 50%;width: 60px;height: 60px;line-heigh:60px;line-height: 60px;background: #dc354514;margin: auto;">
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="calendar-minus"
                class="svg-inline--fa fa-calendar-minus fa-w-14 text-danger"
                role="img"
                width="28"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                />
              </svg>
            </div>
          </div>
          <p class="mb-0 text-secondary font-12">organized events</p>
          <p class="h6">2 events</p>
        </div>
      </div>

      <div class="col-6 pl-1 pr-0 text-center">
        <div class="bg-white rounded p-3">
          <div style="border-radius: 50%;width: 60px;height: 60px;line-height: 60px;background: #00336908;margin: auto;">
            <div>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="calendar-minus"
                class="svg-inline--fa fa-calendar-minus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="28"
                height="28"

              >
                <path
                  fill="#003369"
                  d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                />
              </svg>
            </div>
          </div>
          <p class="mb-0 text-secondary font-12" style="font-size: small;">Attend events</p>
          <p class="h6">23 events</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import editPersonalInfo from "./editPersonalInfo";

export default {
  components: {
    editPersonalInfo
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    }
  }
};
</script>