import Axios from "axios";

const state = {
    customerList: []
};

const getters = {
    customersAll: state => state.customerList
};

const actions = {
    performSearch: async ({ commit }, queryString) => {
        console.log("Searching behind the scenes...");
        console.log(queryString);
        console.log(this);
        const response = await Axios.get(`http://localhost:3000/test`);

        console.log(response);

        commit("setCustList", response.data);
    }
};

const mutations = {
    setCustList: (state, custList) => (state.customerList = custList)
};

export default {
    state,
    getters,
    actions,
    mutations
};
