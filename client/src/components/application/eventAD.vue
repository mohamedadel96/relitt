<template>
<div >
  <section id="eventAD" class="mt-3" v-for="(event , i ) in  eventAd" :key="i">
    <div class="head ml-3 mt-2 mb-0">
      <p class="title fontMD font-weight-bold">Saturday in alexendria</p>
      <p class="desc mb-2 text-truncate text-secondary">description on it</p>
    </div>
    <div class="image">
      <img
        src="https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=ivjB_LLa"
        alt="event image"
      />
    </div>
    <div class="timing d-flex align-items-center">
      <div class="col-3 text-center">
        <p class="fontXL font-weight-bold num">20</p>
        <p class="fontLG font-weight-bold mb-0">jul</p>
        <p class="fontXS text-secondary">10 am</p>
      </div>
      <div class="col-9 d-flex align-items-between flex-wrap">
        <p class="mb-1 pt-2 text-secondary">Lorem ipsum dolor sit, amet repellendus</p>
        <p class="text-secondary text-bold">13 attendance</p>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
computed:{
eventAd(){
  return this.$store.getters.eventAD;
}
}

};
</script>

<style lang="scss" scoped>
#eventAD {
  background: $background_white;
  overflow: hidden;
  box-shadow: 1px 1px 4px #ddd;
  border-radius: 5px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 4px #aaa;
  }
  .head {
    p {
      &.title {
        letter-spacing: 0.7px;
        word-spacing: 0.8px;
        margin-bottom: -5px;
      }
      &.desc {
        color: #777;
      }
    }
  }
  .image {
    height: 150px;
    width: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .timing {
    .num {
      margin-bottom: -3px;
    }
    .desc {
      color: #777;
    }
  }
}
</style>