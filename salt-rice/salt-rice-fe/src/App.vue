<template>
  <div id="app" class="container">
    <div :class="`snackbar ${updateExists ? 'show': ''}`">
      <span>An update is available.</span>
      <button class="submit-button" @click="refreshApp">Update</button>
    </div>
 <Header/>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import update from "@/mixins/update";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mixins: [update]
};
</script>
