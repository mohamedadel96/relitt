<template>
  <section id="sideFooter">
    <div class="d-flex flex-wrap px-4 pt-3 pb-2">
      <p class="text-secondary col-4 px-0 font-16 pointer">Suppport</p>
      <p class="text-secondary col-4 px-0 font-16 pointer">Summit</p>
      <p class="text-secondary col-4 px-0 font-16 pointer">work</p>
      <p class="text-secondary col-4 px-0 font-16 pointer">Policy</p>
      <p class="text-secondary col-4 px-0 font-16 pointer">Terms</p>
    </div>
    <div>
      <p class="text-secondary px-4 font-16 pointer">@Rellit</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#sideFooter {
  background: white;
  overflow: hidden;
  box-shadow: 1px 1px 4px #ddd;
  border-radius: 5px;

  p {
    transition: 0.4s;
    letter-spacing: 1px;
    &:hover {
      color: #000 !important;
    }
  }
}
</style>