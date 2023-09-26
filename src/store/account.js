import axios from 'axios';

const state = () => ({
  account: [],
  auth: {},
})

const getters = {
  getUsers(state) {
    console.log("Get Users",state);
    return state.account;
  },

  getAuth(state){
    return state.auth;
  },

}

const mutations = {

  setUsers(state, payload){
    console.log("Set Users",payload);
    state.account = payload;
  },


  setAuth(state, payload){
    state.auth = payload;
  },

  

}

const actions = {

  async fetchAccountUsers({commit}){
    let res = await axios.get(`/users.php`);
    commit('setUsers', res.data.users);
  },


  async registerAccountUsers({commit}, payload){
    let res = await axios.post(`/new_user.php`,payload);
    commit('setUsers', res.data.user);
  },



}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}