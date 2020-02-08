<template>
  <section id="centerCard">
    <div class="cards" v-for="( center, i ) in centers" :key="i">
      <div class="card border-0 rounded d-flex flex-wrap flex-row mb-3">
        <div class="image col-sm-4 col-12 px-0">
          <img
            class="p-3 pointer"
            :src="center.images.length ? center.images[0].url : '../../assets/img/Layer1.png'"
            @click="$router.push('/app/centers/' + center.id)"
            alt="card image"
          />
        </div>
        <div class="col-sm-8 col-12 px-0 mt-3 d-flex flex-wrap align-items-between">
          <div class="col-12 d-flex flex-wrap justify-content-between mb-3">
            <div class="details col-lg-7 col-12 px-2">
              <p
                class="mb-0 font-weight-bold font-16 pointer"
                @click="$router.push('/app/centers/' + center.id)"
              >{{center.name}}</p>
              <p class="mb-2 text-secondary font-12">{{center.location_name}}</p>
              <p class="mb-0 text-secondary font-12 desc">{{center.description}}</p>
            </div>
            <div class="col-lg-5 col-12 px-0 my-lg-0 my-3 text-center">
              <div class="d-flex justify-content-end my-lg-0 my-3">
                <star-rating
                  class="mb-1"
                  :increment="0.1"
                  active-color="#FFB900"
                  :star-size="16"
                  read-only
                  :rating="center.avg_rate"
                />
              </div>
              <div class="props d-flex justify-content-between my-lg-1 my-3">
                <div class="prop col-4 px-0">
                  <p class="font-14 font-weight-bold mb-0">High</p>
                  <p class="font-12 text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                  <p class="font-14 font-weight-bold mb-0">Good</p>
                  <p class="font-12 text-secondary mb-0">price</p>
                </div>
                <div class="prop col-4 px-0">
                  <p class="font-14 font-weight-bold mb-0">Perfect</p>
                  <p class="font-12 text-secondary mb-0">price</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 px-0 pb-3 d-flex justify-content-between align-items-end">
            <div class="row col-6">
              <div
                class="service col-3 justify-content-start"
                v-for="(service ,i) in center.services"
                :key="i"
              >
                <p class="mb-0 text-secondary">
                  <img
                    :src="service.image"
                    alt
                    data-toggle="tooltip"
                    data-placement="top"
                    :title="service.name"
                  />
                </p>
              </div>
            </div>
            <router-link
              class="mr-3 btn btn-primary btn-block py-2 col-4 font-14"
              :to="'/app/centers/' + center.id"
            >Details...</router-link>
          </div>
        </div>
      </div>
    </div>
    <infinite-loading @infinite="moreFeeds"></infinite-loading>
  </section>
</template>

<script>
export default {
  computed: {
    centers() {
      return this.$store.getters.getCenterCard;
    }
  },
  methods: {
    moreFeeds(state) {
      this.$store
        .dispatch("CENTERCARD")
        .then(res => {
          if (res !== "end") {
            state.loaded();
          } else {
            state.complete();
          }
        })
        .catch(message => {
          this.$toasted.error(message);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#centerCard {
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
          height: 100%;
          min-height: 250px;
          object-fit: cover;
        }
      }

      .details {
        .desc {
          height: 54px;
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
          .font-18 {
            color: $blue;
          }
        }
      }
      .service {
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>