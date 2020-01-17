<template>
  <section id="reviews">
    <slot></slot>
    <b-modal id="reviews" hide-backdrop content-class="shadow" hide-header hide-footer>
      <p class="font-18 mb-4 font-weight-bold text-center">My reviews</p>
      <div>
        <p class="mb-0">center name</p>
        <star-rating
          active-color="#ffd700"
          :star-size="16"
          :show-rating="false"
          read-only
          :rating="5"
        />
        <read-more
          more-str="read more..."
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veritatis, harum pariatur laudantium labore nostrum deleniti, consequuntur magnam quas facere provident officia odit doloremque vel animi totam nihil. Laboriosam, tenetur?"
          less-str="read less"
          :max-chars="100"
          class="description font-14"
        ></read-more>
        <p>date</p>
        <hr class="col-8 mx-0 my-1" />
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
#reviews {
  .modal-dialog {
    margin: 80px auto;
    position: relative;
  }
  .modal-content {
    border: none;
  }

  .description {
    p {
      margin-bottom: 0;
    }
  }
}
</style>