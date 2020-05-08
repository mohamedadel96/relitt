<template>
  <section>
    <app-header />
    <app-features />
    <hr class="col-7 border" />
    <app-blogs />
    <apps-section />
    <app-footer />
  </section>
</template>

<script>
import appHeader from "../components/home/header";
import appFeatures from "../components/home/feateures";
import appBlogs from "../components/home/blogs";
import appsSection from "../components/home/appsSection";
import appFooter from "../components/home/footer";

export default {
  metaInfo: {
    title: "Best Online Dive Logbook For Divers and Diving Directory | Relitt",
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      {
        name: "description",
        content: "The first platform that gathers all water-related sports in one place. Create your free online dive logbook for all your diving activities. EXPLORE MORE"
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "http://relitt.com" },
      {
        property: "og:title",
        content: "Best Online Dive Logbook For Divers and Diving Directory | Relitt"
      },
      {
        property: "og:description",
        content: "The first platform that gathers all water-related sports in one place. Create your free online dive logbook for all your diving activities. EXPLORE MORE"
      },
      {
        property: "og:image",
        content: window.location.href + "img/logo.fdac59ee.svg"
      }
    ]
  },
  components: {
    appHeader,
    appFeatures,
    appBlogs,
    appsSection,
    appFooter
  }
};
</script>
