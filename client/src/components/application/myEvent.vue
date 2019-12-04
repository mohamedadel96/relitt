<template>
<div>
  <div  v-for="(event , i ) in  myEvents" :key="i">
    <section id="myEvent" class="mt-3">
      <div class="head ml-3 mt-2 mb-0">
        <p class="title fontMD font-weight-bold fontSM">{{event.title}}</p>
        <p class="desc mb-2 text-truncate text-secondary fontXS">{{event.location_name}}</p>
      </div>
      <div class="image">
        <img
          src="https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=ivjB_LLa"
          alt="event image"
        />
      </div>
      <div class="timing d-flex align-items-center">
        <div class="col-3 text-center">
          <p class="fontMD font-weight-bold num">{{event.start_date | moment('D')}}</p>
          <p class="fontCS font-weight-bold mb-0">{{event.start_date | moment('MMM')}}</p>
          <p class="fontXSS text-secondary">{{event.start_date | moment('h a')}}</p>
        </div>
        <div class="col-9 d-flex align-items-between flex-wrap justify-content-around">
          <p class="mb-1 text-secondary fontXS">{{event.description}}</p>
          <p class="text-secondary text-bold fontXS">13 attendance</p>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
computed:{
myEvents(){
  return this.$store.getters.myEvent;
}
}

};
</script>

<style lang="scss" scoped>
#myEvent {
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