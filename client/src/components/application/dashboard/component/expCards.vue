<template>
  <section>
    <div class="d-flex justify-content-between align-items-center mx-2 bg-white rounded p-2">
      <div class="d-flex align-items-center text-center">
        <div
          style="border-radius: 50%;width: 60px;height: 60px;line-height: 60px;background: #00336908;margin: auto; "
        >
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="calendar-minus"
              class="svg-inline--fa fa-calendar-minus fa-w-14 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width="28"
              height="28"
            >
              <path
                fill="#7a7c88"
                d="M124 328c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H124zm324-216v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
              />
            </svg>
          </div>
        </div>
        <p class="mb-0 ml-1 text-secondary">Last dive</p>
      </div>
      <div>
        <p class="mb-0 text-secondary">2 month ago</p>
      </div>
    </div>
    <div class="d-flex my-2">
      <div class="col-6 p-2 px-2 text-center">
        <div class="bg-white rounded p-2">
          <div
            style="border-radius: 50%;width: 80px;height: 80px;line-height: 80px;background:#f3bb7e17;margin: auto;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f3bb7e"
              width="60px"
              height="60px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
              />
            </svg>
          </div>

          <p class="text-secondary mb-0">Avg duration underwater</p>
          <p class="text-primary h4">12 min</p>
        </div>
      </div>
      <div class="col-6 px-2 p-2 text-center">
        <div class="bg-white rounded p-2">
          <div
            style="border-radius: 50%;width: 80px;height: 80px;line-height: 80px;background:#f3bb7e17;margin: auto;"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#f3bb7e"
              width="60px"
              height="60px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
              />
            </svg>
          </div>
          <p class="text-secondary mb-0">Ava Depth</p>
          <p class="text-primary h4">300 m</p>
        </div>
      </div>
    </div>
    <div class="p-1 text-center">
      <div class="bg-white rounded p-2">
        <div
          style="border-radius: 50%;width: 80px;height: 80px;line-height: 80px;background:#f3bb7e17;margin: auto;"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#f3bb7e"
            width="60px"
            height="60px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M15.07 1.01h-6v2h6v-2zm-4 13h2v-6h-2v6zm8.03-6.62l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.14 4.74 14.19 4 12.07 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.11-.74-4.06-1.97-5.61zm-7.03 12.62c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"
            />
          </svg>
        </div>
        <p class="text-secondary mb-0">Avg Air consumption</p>
        <p class="text-primary h4">80 SI</p>
      </div>

      <div class="bg-white my-4">graph
        <chart />
      </div>
    </div>
  </section>
</template>

<script>
import chart from "./googleChart"
export default {
components:{
  chart
}

};
</script>