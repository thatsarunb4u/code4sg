
const state = {
    token : null,
    username: null,
};

const getters = {
    getToken: () => state.token,
    getUsername: () => state.username,
    isLoggedIn: () => !!state.token,
};

const mutations = {
    setToken: (state, token) => { state.token = token},
    setUsername: (state, username) => { state.username = username}
};

const actions = {
    login: async ({commit},formObj) => {
        console.log('Logging in store')
        try {
          
          if (!formObj.username) return;
          if (!formObj.password) return;
  
          const response = await fetch(`${process.env.VUE_APP_BASE_API}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
              username: formObj.username,
              password: formObj.password,
            })
          });
          console.log(response);

          let jsonResponse = await response.json();
          if (response.status == 200) {
            //store jwt token here in store.
            console.log("Token:" + jsonResponse.access_token);
            commit('setToken', jsonResponse.access_token);
            commit('setUsername', jsonResponse.principal.nickname);
            jsonResponse.status = 200;
            //this.$router.push(`/`);
          }else if(response.status == 401 ) {
            console.error("Unauthorized")
            jsonResponse.status = 401;
          } else {
            console.error("Error authenticating:" + response)
            jsonResponse.status = 500;
          }

          return jsonResponse
          
        } catch (err) {
          console.error(err);
        }
      },
      logout: async ({commit}) => {
        console.log("Logout triggered.");


        const response = await fetch(`${process.env.VUE_APP_BASE_API}/logout`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
        });
        console.log(response);

        let jsonResponse = await response.json();
        if (response.status == 200) {
          //store jwt token here in store.
          commit('setToken', null);
          commit('setUsername', null);
          this.$router.push(`/`);
        } else {
          console.error("Error logging out:" + response)
          jsonResponse.status = 500;
        }

        return jsonResponse
       
      },
      register: async ({commit}, formObj) => {
        try {
          console.log('Registration in progress...')
            
          console.log(formObj.nickname);
          console.log(formObj.username);
          console.log(formObj.password);
          
          const response = await fetch(`${process.env.VUE_APP_BASE_API}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
              username: formObj.username,
              password: formObj.password,
              nickname: formObj.nickname,
            })
          });
  
          let jsonResponse = await response.json();
          if (response.status == 200) {
            //store jwt token here in store.
            console.log("Token:" + jsonResponse.access_token);
            commit('setToken', jsonResponse.access_token);
            commit('setUsername', jsonResponse.principal.nickname);
            //this.$router.push(`/`);
          } else {
            console.error("Error registering:" + jsonResponse)
          }
          return response
          
        } catch (err) {
          console.error(err);
        }
      },
};

export default {
    state, getters, mutations, actions
}