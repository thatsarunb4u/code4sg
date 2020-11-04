<template>
  <header>
    <img src="/images/saltrice.svg" alt="SaltRice logo" class="logo">
    <nav>
      <a class="hide-desktop" @click="toggleMobileNav">
        <img src="/images/ham.png" alt="toogle menu" class="menu" style="cursor: pointer;">
      </a>
      <ul :class="`show-desktop ${mobileNav ? 'hide-mobile' : ''}`" style="margin-top: 0.2rem; padding-bottom: 0; margin-bottom: 0;">
        <li class="exit-btn" @click="toggleMobileNav"><img src="/images/exit.svg" alt=""></li>
        <li><router-link to="/" exact active-class="bold">Home</router-link></li>
        <li><router-link to="/login" exact active-class="bold">Login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      mobileNav: false
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
}

header {
  background-color: #fffae1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding: 0.8em 2em;
  z-index: 3;
}

header .logo {
  width: 120px;
}

header .menu {
  width: 25px;
  margin-top: 30%;
}

header nav ul {
  position: fixed;
  width: 60%;
  top: 0;
  right: 0;
  text-align: left;
  background: #24292c;
  height: 100%;
  z-index: 7;
  padding-top: 3em;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
  display: block;
  width: 100%;
  padding: 1em 2em;
  background: #31373b;
}

header nav ul li a:hover {
  background-color: #41494e;
}

header nav ul li.exit-btn {
  margin-bottom: 1em;
  margin-top: -1.3em;
  text-align: right;
  padding: 0 1.4em;
}

header nav ul li.exit-btn img {
  width: 15px;
  cursor: pointer;
}

@media (min-width: 650px) {
  header nav ul {
    width: 40%;
  }
}

@media (min-width: 1024px) {
  header {
    padding: 0.8em 5em;
  }

  header .logo {
    width: 150px;
  }

  header nav ul li {
    float: left;
    padding-right: 2em;
  }

  header nav ul li a {
    color: #000000;
    background-color: inherit;
    text-align: right;
  }

  header nav ul li a:hover {
    background-color: inherit;
  }

  header nav ul li.exit-btn {
    visibility: hidden;
  }

  header nav ul {
    position: inherit;
    width: auto;
    background: none;
    height: auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
  }
}
</style>
