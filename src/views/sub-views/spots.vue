<template>
  <section id="centers">
    <div class="d-flex justify-content">
      <div class="col-md-3 px-4 mt-3 overflow-hidden">
        <filter-section />
      </div>
      <div class="col-md-9">
        <div class="tabs d-flex mt-4 justify-content-center mr-5">
          <p class="mr-5">
            <router-link to="/app/events">Events</router-link>
          </p>
          <p class="mr-5">
            <router-link to="/app/centers">Centers</router-link>
          </p>
          <p class="mr-5">
            <router-link class="active" to="/app/spots">Spots</router-link>
          </p>
        </div>
        <div class="col-md-11 col-12 px-2">
          <div class="search rounded mb-3 text-center fontSM">
            <place-autocomplete-field
              v-model="place"
              name="place"
              api-key="AIzaSyAhSv9zWvisiTXRPRw6K8AE0DCmrRMpQcU"
              placeholder="Enter an an address, zipcode, or location"
            ></place-autocomplete-field>
          </div>
          <spot-cards  :cardsData="spotsData()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import spotCards from "../../components/application/centers/centerCards";
import filterSection from "../../components/application/centers/filterSection";
export default {
  data() {
    return {
      place: null
    };
  },
  components: {
    spotCards,
    filterSection
  },
  mounted() {
    this.$store.dispatch("CENTERCARD");
    this.spotsData();
  },
    methods:{
    spotsData(){
      return this.$store.getters.getCenterCard;
    }
  }

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
