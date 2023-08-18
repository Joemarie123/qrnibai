import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  users: [],
  auth: {},
})

const getters = {
  getUsers(state) {
    console.log("Get Users",state);
    return state.users;
  },
  getAuth(state){
    return state.auth;
  }
}

const mutations = {
  setUsers(state, payload){
    console.log("Set Users",payload);
    state.users = payload;
  },

  setAuth(state, payload){
    state.auth = payload;
  }
}

const actions = {

  async fetchUsers({commit}){
    let res = await axios.get(`http://10.0.1.23/HRQR/employees.php`);
    commit('setUsers', res.data.users);
  },

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}