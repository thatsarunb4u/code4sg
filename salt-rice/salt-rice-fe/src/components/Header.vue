<template>
  <header>
    <router-link to="/" tag="a">
      <img src="/images/saltrice.svg" alt="SaltRice logo" class="logo" />
    </router-link>
    
    <nav v-if="isLoggedIn">
      <div class="icon-login">
        <a
          @click="showEditProfile = !showEditProfile"
          href="#"
          class="hide-desktop"
        >
          <img
            src="@/assets/images/iconfinder_1_avatar_2754574.svg"
            alt="toogle user-icon"
            class="usericon-menu"
            id="user-icon-mobile"
          />
        </a>
        <a href="#" class="hide-desktop">
          <img
            src="@/assets/images/ham.png"
            alt="toogle menu"
            class="menu"
            id="menu"
            @click="showMenu = !showMenu"
          />
        </a>
      </div>
      <ul v-bind:class="showMenu ? '' : 'show-desktop'" id="nav">
        <li
          @click="showMenu = !showMenu"
          id="exit"
          class="exit-btn hide-desktop"
        >
          <img src="@/assets/images/exit.svg" alt="" />
        </li>
        <li>
          <router-link to="/" exact active-class="bold">Home</router-link>
        </li>
        <li>
          <router-link to="/post" exact active-class="bold"
            >Create post</router-link
          >
        </li>
        <li>
          <a
            @click="showEditProfile = !showEditProfile"
            id="editprofile"
            class="hide-mobile"
            ><span class="inline-flex"
              ><img
                src="@/assets/images/iconfinder_1_avatar_2754574.svg"
                alt="toogle user-icon"
                class="usericon-menu"
                id="user-icon-desktop"
              /><span class="usericon-label">{{username}}</span></span
            ></a
          >
        </li>
      </ul>
    </nav>
    <div
      v-bind:class="showEditProfile ? 'show' : ''"
      class="edit-profile hide"
      id="editprofile-screen"
      v-if="isLoggedIn"
    >
      <div class="head">
        <img
          src="@/assets/images/iconfinder_1_avatar_2754574.svg"
          alt="toogle user-icon"
          class="usericon-edit"
          id="user-icon-edit"
        />

        <a href="#">
          <img
            src="@/assets/images/edit.png"
            alt="toogle icon-pen"
            class="icon-pen"
            id="icon-pen-picture"
          />
        </a>
      </div>
      <div class="border"></div>
      <div class="body">
        <div class="nickname">
          <p>{{rank}}</p>
          <!-- <a href="#"
            ><img
              src="@/assets/images/edit.png"
              alt="toogle icon-pen"
              class="icon-pen"
              id="icon-pen-nickname"
          /></a> -->
        </div>
        
        <!-- <div class="margin-top">
          <span>25 </span><span>Posts</span>
        </div>
        <div class="margin-top"><span>25 </span><span>Comments</span></div> -->
        <div class="margin-top logout" @click="logoutComp"><span>logout</span></div>
      </div>
    </div>
  </header>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex';

export default {
  name: "Header",
  data() {
    return {
      showMenu: false,
      showEditProfile: false,
      /* username: '', */
      /* username: store.getters.getUsername, */
    };
  },
  methods: {
    ...mapActions(['logout']),
    async logoutComp(){
      let response = await this.logout()
      if (response.status == 200) {
        await this.$router.push('/login');
      }
    }

  },
  computed: {
    ...mapState({
      /* isLoggedIn : 'isLoggedIn', */
      username: state => state.auth.username,
      rank: state => state.auth.principal.rank,
    }),
    ...mapGetters(['isLoggedIn']),
  }
};
</script>
<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  padding: side-space(mobile);
  z-index: 4;
  position: sticky;
  top: 0;
  background-color: color(beidge);

  @include layout(pc) {
    padding: 0.8em side-space(pc) 0 side-space(pc);
  }

  .icon-login {
    display: flex;

    a {
      margin-left: 1em;
    }
  }

  .usericon-label {
    padding: 0em 0 0 0.5em;
  }

  .logout {
    cursor: pointer;
    font-weight: bold;
  }

  .inline-flex {
    display: inline-flex;
  }

  .logo {
    width: 120px;
    @include layout(pc) {
      width: 150px;
      padding-top: .4em;
    }
  }

  .menu {
    width: 25px;
    margin-top: 30%;
  }

  .usericon-menu {
    width: 25px;
    margin-top: 15%;

    @include layout(pc) {
      margin-top: -0.1em;
    }
  }

  nav {
    ul {
      position: fixed;
      width: 60%;
      top: 0;
      right: 0;
      text-align: left;
      background: color(gray-transparent);
      height: 100%;
      z-index: 7;
      padding-top: 3em;

      @include layout(tablet) {
        width: 40%;
      }

      @include layout(pc) {
        position: inherit;
        width: auto;
        background: none;
        height: auto;
        display: flex;
        padding-top: 0;
      }

      li {
        cursor: pointer;
        @include layout(pc) {
          float: left;
          padding-right: 2em;
        }
      }

      li a {
        color: color(white);
        text-decoration: none;
        display: block;
        width: 100%;
        padding: 1em 2em;
        background: color(gray-transparent2);

        @include layout(pc) {
          color: color(black);
          background-color: inherit;
          text-align: right;
          padding: 1em 2em;
        }

        &:hover {
          background-color: color(gray-transparent3);

          @include layout(pc) {
            background-color: inherit;
          }
        }
      }

      li.exit-btn {
        margin-bottom: 1em;
        margin-top: -1.3em;
        text-align: right;
        padding: 0 1.4em;

        img {
          width: 15px;
          cursor: pointer;
        }
      }
    }
  }

  .edit-profile {
    position: absolute;
    background-color: color(white);
    width: 155px;
    right: margin-top-card-element-responsive(mobile);
    top: 73px;
    border: 1px solid color(black);
    padding: 2em;
    text-align: center;

    @include layout(tablet) {
      right: margin-top-card-element-responsive(tablet);
      width: 198px;
    }

    @include layout(pc) {
      right: 5em;
      top: 69px;
    }

    .head {
      display: inline-block;
      margin-bottom: 1em;

      #icon-pen-picture {
        width: 25px;
        position: absolute;
        top: 4em;
        right: 4em;
      }
    }

    .body {
      .nickname {
        display: inline-flex;

        #icon-pen-nickname {
          width: 25px;
          height: 22px;
          margin: 1em 0.5em;
        }
      }
      #rating_value {
        margin-left: 0.5em;
      }
    }
  }
}
</style>
