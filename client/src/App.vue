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

.fontXS {
  font-size: $fontXS;
}
.fontSM {
  font-size: $fontSM;
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

.paginate {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  li {
    list-style: none;
    box-shadow: 3px 3px 4px #ddd;
    background: $background_white;
    color: $blue;
    outline: none;
    margin-right: 0.5px;
    margin-left: 0.5px;
    &:first-of-type {
      border-radius: 5px 0 0 5px;
      background: $blue;
      color: $fontColor_white;
    }
    &:last-of-type {
      border-radius: 0 5px 5px 0;
      background: $blue;
      color: $fontColor_white;
    }
    &.active {
      background: $blue;
      color: $fontColor_white;
    }

    a {
      padding: 10px 30px;
      display: inline-block;
      text-decoration: none;
      outline: none;
      color: inherit;

    }
  }
}
</style>
