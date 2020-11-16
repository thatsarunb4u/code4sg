<template>
  <div id="app" class="container">
    <div :class="`snackbar ${updateExists ? 'show': ''}`">
      <span>An update is available.</span>
      <button class="submit-button" @click="refreshApp">Update</button>
    </div>
<!--    <Header />-->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import update from "@/mixins/update";

export default {
  name: "App",
  components: {
    // Header: () => import("@/components/Header.vue"),
    Footer: () => import("@/components/Footer.vue")
  },
  mixins: [update]
};
</script>
