<template>
  <section id="centers">
    <div class="d-flex justify-content">
      <div class="col-xl-3 col-md-4 d-md-block d-none px-lg-4 px-3 mt-4 overflow-hidden">
        <filter-section />
      </div>
      <div class="col-md-8 col-12 px-0">
        <div
          class="tabs d-flex mt-4 px-2 justify-content-md-center justify-content-between align-items-baseline font-16"
        >
          <div class="d-flex">
            <p class="mr-5">
              <router-link to="/app/events">Events</router-link>
            </p>
            <p class="mr-5">
              <router-link class="active" to="/app/centers">Centers</router-link>
            </p>
            <p class="mr-5">
              <router-link to="/app/spots">Spots</router-link>
            </p>
          </div>
          <div class="d-md-none d-block">
            <filter-modal />
          </div>
        </div>
        <div class="col-xl-11 col-12 px-2">
          <div class="search rounded mb-3 text-center font-16">
            <place-autocomplete-field
              v-model="place"
              name="place"
              api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
              placeholder="Enter an address, zipcode, or location"
            ></place-autocomplete-field>
          </div>
          <center-cards :cardsData="centersData()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import centerCards from "../../components/application/centers/centerCards";
import filterSection from "../../components/application/centers/filterSection";
import filterModal from "../../components/application/centers/filterModal";
export default {
  data() {
    return {
      place: null
    };
  },
  components: {
    centerCards,
    filterSection,
    filterModal
  },
  mounted() {
    this.$store.dispatch("CENTERCARD");
    this.centersData();
  },
  methods: {
    centersData() {
      return this.$store.getters.getCenterCard;
    }
  } // created() {
  //   this.$store.dispatch("CENTERCARD");
  // }
};
</script>

<style lang="scss">
#centers {
  .tabs {
    p {
      a {
        text-decoration: none;
        color: $gray;
        letter-spacing: 1px;

        &.active {
          border-bottom: 3px solid $blue;
          color: $blue;
          font-weight: bold;
        }
      }
    }
  }

  .autocomplete-field {
    .autocomplete-list-item > a {
      padding: 15px;
    }
    .form-group {
      margin-bottom: 0;

      input {
        text-align: center;
        border: none;
        padding: 1em 0;
        outline: none;
        &:focus,
        &:active {
          outline: none;
          border-color: inherit;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
      }
    }
  }

  .search {
    background: $background_white;
    box-shadow: 3px 3px 4px #ddd;
  }
}
</style>
