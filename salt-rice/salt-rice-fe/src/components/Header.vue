<template>
  <header>
    <router-link to="/" tag="a" style="margin-top: 6px; padding: 0;">
      <img src="/images/saltrice.svg" alt="SaltRice logo" class="logo">
    </router-link>
    <nav style="display: flex;align-items: center">
      <div class="icon-login">
        <a href="#" class="hide-desktop">
          <img src="images/iconfinder_1_avatar_2754574.svg" alt="toogle user-icon" class="usericon-menu"
               id="user-icon-mobile">
        </a>
        <a class="hide-desktop" @click="toggleMobileNav">
          <img src="/images/ham.png" alt="toogle menu" class="menu" style="cursor: pointer;">
        </a>
      </div>

      <ul :class="`show-desktop ${mobileNav ? 'hide-mobile' : ''}`"
          style="display: flex; align-items: center; margin: 0">

        <li class="exit-btn" @click="toggleMobileNav"><img src="/images/exit.svg" alt=""></li>

        <li><router-link to="/" exact active-class="bold">Home</router-link></li>
        <li><router-link to="/post" exact active-class="bold">Create post</router-link></li>
        <li><router-link to="/login" exact active-class="bold">Login</router-link></li>

        <li @click="show = !show">
          <a class="hide-mobile" href="#" style="display: flex;align-items: center;line-height: 0">
            <div class="inline-flex"><img
                src="images/iconfinder_1_avatar_2754574.svg"
                alt="toogle user-icon"
                class="usericon-menu" id="user-icon-desktop">
            </div>
            <div class="usericon-label">My Account</div>
          </a>
        </li>
      </ul>

    </nav>
    <popup v-if="show"></popup>
  </header>


</template>

<script>
import Popup from "@/components/popup";

export default {
  name: "Header",
  components: {Popup},
  data() {
    return {
      mobileNav: false,
      show: false
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
  padding: 0.3em 1.5em;
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

header .usericon-menu {
  width: 25px;
}

header .usericon-label {
  padding: 0.1em 0 0 0.5em;
}


@media (min-width: 650px) {
  header nav ul {
    width: 40%;
  }
}

@media (min-width: 1024px) {
  header {
    padding: 1em 5em;
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
