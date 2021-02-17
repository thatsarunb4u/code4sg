import {protectedFetch} from '../../mixins/appUtils'

const state = {
    //token: !!localStorage.getItem("token"),
    token: null,
    username: null,
    principal: null,
};

const getters = {
    getToken: () => state.token,
    getUsername: () => state.username,
    getPrincipal: () => state.principal,
    isLoggedIn: () => !!state.token,
};

const mutations = {
    setToken: (state, token) => { state.token = token;},
    setUsername: (state, username) => { state.username = username;},
    setPrincipal: (state, principal) => {state.principal = principal;}
};

const actions = {
    login: async ({ commit }, formObj) => {
        console.log("Logging in store");
        try {
            if (!formObj.username || !formObj.password) return;

            const response = await fetch(`${process.env.VUE_APP_BASE_API}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formObj.username,
                    password: formObj.password,
                })
            });

            let jsonResponse = await response.json();
            jsonResponse.status = response.status;

            if (response.status == 200) {
                //store jwt token here in store.
                commit("setToken", jsonResponse.access_token);
                //localStorage.setItem("token",jsonResponse.access_token);
                commit("setUsername", jsonResponse.principal.nickname);
                commit('setPrincipal', jsonResponse.principal);
                jsonResponse.status = 200;
            }

            return jsonResponse;
        } catch (err) {
            console.error(err);
        }
      },
      logout: async ({commit}) => {
        console.log("Logout triggered.");


        const response = await protectedFetch(`${process.env.VUE_APP_BASE_API}/logout`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
        });
        console.log(response);

        let jsonResponse = await response.json();
        jsonResponse.status = response.status;
        
        if (response.status == 200) {
          //store jwt token here in store.
          commit('setToken', null);
          //localStorage.setItem("token", null);
          commit('setUsername', null);
          commit('setPrincipal', null);
          
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
            //localStorage.setItem("token",jsonResponse.access_token);
            commit('setUsername', jsonResponse.principal.nickname);
            commit('setPrincipal', jsonResponse.principal);
            //this.$router.push(`/`);
          } else {
            console.error("Error registering:" + jsonResponse)
          }
          return response
          
        } catch (err) {
            console.error(err);
        }
    }, resetPassword: async ({commit}, formObj) => {
      try {
        console.log('Reset Password in progress...')
        
        console.log(formObj.username);
        console.log(formObj.password);
        commit('setToken', null);

        const response = await fetch(`${process.env.VUE_APP_BASE_API}/resetPassword`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
            username: formObj.username,
            password: formObj.password,
            
          })
        });
        console.log(response.status);
        return response

      }catch (err) {
        console.error(err);
    }
},
};



export default {
    state, getters, mutations, actions
};
