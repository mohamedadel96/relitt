<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
* {
  font-family: "Open Sans", sans-serif;
}

.fontXXS {
  font-size: $fontXXS;
}
.fontXS {
  font-size: $fontXS;
}
.fontSM {
  font-size: $fontSM;
}
.fontCS {
  font-size: $fontCS;
}
.fontMD {
  font-size: $fontMD;
}
.fontLG {
  font-size: $fontLG;
}
.fontXL {
  font-size: $fontXL;
}
.fontXXL {
  font-size: $fontXXL;
}
.my-3 {
  margin-top: 0.7rem !important;
  margin-bottom: 0.7rem !important;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.form-control {
  height: auto !important;
}
.invalid-feedback {
  font-size: $fontSM !important;
  font-weight: bold !important;
  text-align: center !important;
}
</style>
