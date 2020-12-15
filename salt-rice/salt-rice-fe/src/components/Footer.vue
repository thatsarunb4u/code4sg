<template>
  <footer>
    <a href="#" class="footer-link"
      >© 2020 saltrice. All Rights Reserved. http://saltrice.com</a
    >
  </footer>
</template>

<style lang="scss">
footer {
  background-color: color(black);
  padding: side-space(mobile);
  .footer-link {
    text-decoration: none;
    color: color(white);
    font-size: calc(#{$font-size} - 2pt);
  }
}
</style>
