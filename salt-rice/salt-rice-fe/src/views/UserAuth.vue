<template>
  <section id="authSection">
    <div
      v-bind:class="rightPanelActive ? 'right-panel-active' : ''"
      class="authSectionContainer"
      id="authSectionContainer"
    >
      <div class="form-container sign-up-container">
        <form @submit.prevent="registerComp">
          <h1>Create Account</h1>
          <span>Use your mobile for registration</span>
          <label for="name-reg">Name</label>
          <input type="text" v-model="regnickname" id="name-reg" placeholder="Name" />
          <label for="phone-reg">Mobile-Number</label>
          <input id="phone-reg" v-model="regmobile" type="number" placeholder="xxxxxxxx" />
          <label for="pass-reg">Password</label>
          <input id="pass-reg" v-model="regpassword" type="password" placeholder="Password" />
          <label for="pass-reg">Confirm Password</label>
          <input id="pass-reg" v-model="regconfirmPassword" type="password" placeholder="Confirm Password" />
          <button class="color-white margin-top" type="submit">Sign Up</button>
        </form>
      </div>
      <div class="form-container sign-in-container">
        <form @submit.prevent="loginComp">
          <h1>Sign in</h1>
          <span>or use your account</span>
          <label for="phone-login">Phone-Number</label>
          <input id="phone-login" v-model="mobile" type="number" placeholder="xxxxxxxx" />
          <label for="pass-login">Password</label>
          <input id="pass-login" v-model="password" type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button class="color-white" type="submit">Sign In</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button
              class="ghost"
              id="signIn"
              @click="rightPanelActive = !rightPanelActive"
            >
              Sign In
            </button>
          </div>
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button
              class="ghost"
              id="signUp"
              @click="rightPanelActive = !rightPanelActive"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
/* import store from '../store'; */

export default {
  name: "UserAuth",
  components: {},
  data() {
    return {
      rightPanelActive: false,
      mobile: "",
      password: "",
      regmobile: "",
      regpassword: "",
      regconfirmPassword: "",
      regnickname: "",
    };
  },
  methods: {
    ...mapActions(['register', 'login']),
    async loginComp() {
      
      if (!this.mobile) return;
      if (!this.password) return;

      let response = await this.login({
            username: this.mobile,
            password: this.password,
          });
          console.log(response);
        if (response.status == 200) {
          //store jwt token here in store.
          console.log("Token:" + response.access_token);
          this.$router.push(`/`);
        }else if(response.status == 401 ) {
          console.error("Unauthorized")
        } else {
          console.error("Error authenticating:" + response)
        }
        
    },
    async registerComp() {
      try {
        
        if (!this.regmobile) return;
        if (!this.regpassword) return;
        if (!this.regconfirmPassword) return;
        if(!this.regnickname) return;

        if(this.regpassword != this.regconfirmPassword) {
          return;
        }

        const response = await this.register(
          {
            username: this.regmobile,
            password: this.regpassword,
            nickname: this.regnickname,
          });

        console.log(response)
        //let jsonResponse = await response.json();
        if (response.status == 200) {
          //store jwt token here in store.
          //console.log("Token:" + jsonResponse.access_token);
          this.$router.push(`/`);
        } else {
          console.error("Error registering in comp")
        }
        
      } catch (err) {
        console.error(err);
      }
    },
    reset() {
      this.mobile = "";
      this.password = "";
      
    },
  },
  /*  async beforeRouteEnter(to, from, next) {
    try {
      if(to.path === '/login'){
            console.log('target login page:'+store.getters.isLoggedIn);
            if(store.getters.isLoggedIn){
                console.log('logged in already');
                this.$router.push(`/`);
                return
            }   
        }
        next()
    } catch (err) {
      console.error(err);
      // todo: put up 500 page error
    }
  }, */
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
section#authSection {
  padding: side-space(mobile-mini) side-space(mobile);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: -20px 0 50px;
  margin-top: 20px;

  @include layout(tablet) {
    padding: side-space(mobile);
  }

  @include layout(pc) {
    padding: side-space(mobile) side-space(pc);
  }

  .cancel-button {
    float: left;
  }

  .genderLabel {
    margin-left: 0.5em;
  }

  #gender {
    display: flex;
  }

  ul.avatar {
    display: block;
    padding-left: 0;
    margin-top: 1em;
    li.avatar-img {
      display: inline-block;
      margin: 1em 1em 1em 0;
    }
  }

  button {
    border-radius: 20px;
    border: 1px solid color(yellow);
    background: color(yellow);
    color: color(black);
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
    &:focus {
      outline: none;
    }
  }

  .color-white {
    color: color(white);
  }

  .ghost {
    background: transparent;
    border-color: color(black);
  }

  .authSectionContainer {
    background: #fff;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 480px;

    .form-container {
      position: absolute;
      top: 0;
      height: 100%;
      transition: all 0.6s ease-in-out;

      form {
        background: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        justify-content: center;
        text-align: center;

        label {
          text-align: left;
        }

        input {
          border: 1px solid #ccc;
          padding: 12px 20px;
          margin: 8px 0;
          width: 100%;
        }
      }
    }

    .sign-in-container {
      left: 0;
      width: 50%;
    }

    .sign-up-container {
      left: 0;
      width: 50%;
      opacity: 0;
      background-color: #333;
    }

    .overlay-container {
      position: absolute;
      top: 0;
      left: 50%;
      width: 50%;
      height: 100%;
      overflow: hidden;
      transition: transform 0.6s ease-in-out;
    }

    .overlay {
      color: color(black);
      position: relative;
      left: -100%;
      height: 100%;
      width: 200%;
      transform: translateY(0);
      transition: transform 0.6s ease-in-out;
      background: #ffc529;
      background: linear-gradient(to right, #ffc529, #ffdf85) no-repeat 0 0 /
        cover;
    }

    .overlay-panel {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 40px;
      height: 100%;
      width: 50%;
      text-align: center;
      transform: translateY(0);
      transition: transform 0.6s ease-in-out;
    }

    .overlay-right {
      right: 0;
      transform: translateY(0);
    }

    .overlay-left {
      transform: translateY(-20%);
    }

    h1 {
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 14px;
      font-weight: 100;
      line-height: 20px;
      letter-spacing: 0.5px;
      margin: 20px 0 30px;
    }

    span {
      font-size: 12px;
      margin-bottom: 1.5em;
    }

    a {
      color: #333;
      font-size: 14px;
      text-decoration: none;
      margin: 15px 0;
    }
  }

  .right-panel-active {
    .overlay-container {
      transform: translateX(-100%);
    }

    .sign-up-container {
      transform: translateX(100%);
      opacity: 1;
    }

    .overlay {
      transform: translateX(50%);
    }

    .overlay-left {
      transform: translateY(0);
    }

    .overlay-right {
      transform: translateY(20%);
    }
  }
}
</style>