<template>
  <main id="main">
    <router-view />
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");
* {
  font-family: "Open Sans", sans-serif;
  scroll-behavior: smooth;
}
a {
  text-decoration: none !important;
}
#main {
  overflow: hidden;
}
.font-10 {
  font-size: $font-10;
}
.font-12 {
  font-size: $font-12;
}
.font-16 {
  font-size: $font-16;
}
.font-14 {
  font-size: $font-14;
}
.font-18 {
  font-size: $font-18;
}
.font-20 {
  font-size: $font-20;
}
.font-22 {
  font-size: $font-22;
}
.font-24 {
  font-size: $font-24;
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
  font-size: $font-16 !important;
  font-weight: bold !important;
  text-align: center !important;
}
.pointer {
  cursor: pointer;
}
.toast {
  font-size: 18px !important;
  padding: 0 30px !important;
}

.dropdown-menu {
  outline: none !important;
  border-radius: 8px 0 8px 8px !important;
}

.dropdown {
  display: flex;
  justify-content: center;
  button {
    padding: 0 !important;
  }
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
