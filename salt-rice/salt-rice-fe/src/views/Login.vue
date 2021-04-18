<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="mobile">Username</label>
      <input
          id="mobile"
          v-model="mobile"
          autocomplete="off"
          name="title"
          placeholder="Enter your mobile no./email.."
          required
          maxlength="8"
          type="text"
          
      />
      <label for="password">Password</label>
      <input
          id="password"
          v-model="password"
          autocomplete="off"
          name="title"
          placeholder="Enter your password.."
          required
          type="password"
      />
      
      <div class="button-group">
        <button class="reset-button" type="button" @click="reset">Reset</button>
        <button class="submit-button" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      mobile: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        
        if (!this.mobile) return;
        if (!this.password) return;

        const response = await fetch(`${process.env.VUE_APP_BASE_API}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
            username: this.mobile,
            password: this.password,
          })
        });
        
        if (response.status == 200) {
          //store jwt token here in store.
          console.log("Token:" + response.body.access_token);
          this.$router.push(`/`);
         
        }else if(response.status == 401 ) {
          console.error("Unauthorized")
        } else {
          console.error("Error authenticating:" + response.body)
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
  computed: {
    categories() {
      // get categories from server
      return [
        {"categoryId": 1, "categoryName": "Reflections"},
        {"categoryId": 2, "categoryName": "Family-Children"},
        {"categoryId": 3, "categoryName": "Growing Old"},
        {"categoryId": 4, "categoryName": "Health"},
        {"categoryId": 5, "categoryName": "Mental Health"},
        {"categoryId": 6, "categoryName": "Dating"},
        {"categoryId": 7, "categoryName": "Food Recipes"},
        {"categoryId": 8, "categoryName": "Past time/Passion"},
        {"categoryId": 9, "categoryName": "Professional Work/Occupation"}
      ];
    }
  }
};
</script>

<style scoped>
div {
  padding: 0 2em calc(1.5em * 2) 2em;
  text-align: justify;
}

h1 {
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 1cm;
}

label {
  font-weight: 900;
  font-size: large;
}

input[type=text], textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font: 1em/1.25em Arial, Montserrat, sans-serif;
}

input::placeholder, textarea::placeholder {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}

input[type=checkbox] {
  height: 20px;
  width: 20px;
  margin-left: 10px;
}

.tag-suggestion {
  padding: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086);
  min-height: 90px;
  background: white;
  position: relative;
  margin-top: -20.5px;
  border-radius: 0 0 10px 10px;
}

.tag-suggestion ul {
  padding-left: 0;
  list-style-type: none;
}

.tag-suggestion ul li {
  padding: 5px 15px;
  cursor: pointer;
}

.tag-suggestion ul li:hover {
  background-color: #eee;
}

.button-group {
  padding-top: 5%;
  text-align: end;
}

.button-group button {
  margin: 0 10px;
}
</style>
