<template>
    <div v-if="data">
        <h2
        class="text-capitalize font-weight-bold"
      >{{data.name}}</h2>
      <hr />
      <diV class="Ddescrition">
        <div class="icon"></div>
        <p class="font-weight-bold">Descrition</p>
        <p>{{data.description}}</p>
      </diV>
      <hr />
      <div class="service">
        <p class="text-capitalize font-weight-bold">Services</p>
        <div class="row" >
          <div class="col-lg-6" v-for="(service , i) in data.services" :key="i">
            <img :src="service.image" :alt="service.name" >
            <p class="d-inline-block">{{service.name}}</p>
          </div>
        </div>
      </div>
      <hr/>
    </div>  
</template>

<script>
export default {
  props:["data"]

}
</script>

<style lang="scss" scoped>

    h2 {
      margin: 20px;
    }

    hr {
      margin: 10px 0px;
    }
     p {
      margin: 10px 20px;
    }
    .service img{
      width: 50px;
      height: 50px;
    }

</style>