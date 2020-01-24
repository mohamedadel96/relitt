<template>
  <section id="centerCarsoule">
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      :controls="images.length > 1"
      fade
      background="#ababab"
      img-width="950"
      img-height="300"
    >
      <b-carousel-slide v-for="(img, i) in images" :key="i" :img-src="img.url"></b-carousel-slide>
    </b-carousel>
  </section>
</template>

<script>
export default {
  props: ["images"]
};
</script>

<style lang="scss">
#centerCarsoule {
  .carousel-item {
    img {
      max-height: 550px !important;
    }
  }
}
</style>