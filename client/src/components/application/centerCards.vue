<template>
  <section id="centerCard">
    <div class="search rounded py-3 mb-3 text-center fontSM">Alexandria, Egypt</div>
    <div class="cards" v-for="( card, i ) in centercards" :key="i">
      <div class="card border-0 rounded d-flex flex-nowrap flex-row mb-3">
        <div class="image col-4 px-0">
          <img
            class="p-3"
            src="https://www.scubadiving.com/sites/scubadiving.com/files/styles/500_1x_/public/scuba-myths-shutterstock_208265431.jpg?itok=ivjB_LLa"
            alt="card image"
          />
        </div>
        <div class="col-8 px-0 mt-3 d-flex flex-wrap align-items-between">
          <div class="col-12 d-flex justify-content-between">
            <div class="details col-7 px-2">
              <p class="mb-0 font-weight-bold fontSM">{{card.name}}</p>
              <p class="mb-2 text-secondary fontXS">{{card.location_name}}</p>
              <p class="mb-0 text-secondary fontXS desc">{{card.description}}</p>
            </div>
            <div class="col-5 px-0 text-center">
              <div>
                <p class="fontXL font-weight-bold text-right">icon stars</p>
              </div>
              <div class="props d-flex justify-content-between">
                <div class="prop col-4 px-0">
                  <p class="fontSM font-weight-bold mb-0">High</p>
                  <p class="fontXS text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                  <p class="fontSM font-weight-bold mb-0">Good</p>
                  <p class="fontXS text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                  <p class="fontSM font-weight-bold mb-0">Perfect</p>
                  <p class="fontXS text-secondary mb-0">price</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-end  align-items-end">
            <div class="service col-3 justify-content-start" v-for="(service ,i) in card.services" :key="i" >
              <p class=" mb-0 text-secondary">
                <img :src="service.image" alt="">
                <span class=" fontXS">{{service.name}}</span>
              </p>
            </div>
            <router-link 
              class="mr-3 btn btn-primary btn-block py-2 col-4"
              :to="'/app/centers/' + card.id"
            >Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    centercards() {
      return this.$store.getters.getCenterCard;
    }
  }
};
</script>

<style lang="scss" scoped>
#centerCard {
  .search {
    background: $background_white;
    box-shadow: 3px 3px 4px #ddd;
  }
  .cards {
    .card {
      box-shadow: 3px 3px 4px #ddd;
      transition: 0.3s;
      &:hover {
        box-shadow: 5px 5px 7px #aaa;
      }
      .image {
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .details {
        .desc {
          height: 120px;
          overflow: hidden;
          white-space: pre-line;
          text-overflow: ellipsis;
        }
      }

      .props {
        .prop {
          border-right: 2px solid #eee;
          &:last-of-type {
            border: none;
          }
          .fontMD {
            color: $blue;
          }
        }
      }
      .service{
          img {
            width:35px;
            height: 35px;
            border-radius: 50% 

          }
      }
    }
  }
}
</style>