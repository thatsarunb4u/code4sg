<template>
  <footer class="container">
    <a href="http://saltrice.com" class="footer-link">© 2020 saltrice. All Rights Reserved. http://saltrice.com</a>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  background-color: #000000;
  padding: 2em;
}

footer .footer-link {
  text-decoration: none;
  color: #fff;
  font-size: calc(12pt - 2pt);
}
</style>
