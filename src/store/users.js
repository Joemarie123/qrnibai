import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const state = () => ({
  users: [],
  auth: {},
})

const getters = {
  getUsers(state) {
    ///// console.log("Get Users",state);
    return state.users;
  },

  getAuth(state){
    return state.auth;
  },

}

const mutations = {

  setUsers(state, payload){
    ///// console.log("Set Users",payload);
    state.users = payload;
  },


  setAuth(state, payload){
    state.auth = payload;
  },



}

const actions = {

  async fetchUsers({commit}){
    let res = await axios.get(`/employees.php`);
    commit('setUsers', res.data.users);
  },

  async login({commit}, payload){
    ///// console.log("env=",)
   // let res = await axios.post('https://database.tagumcity.gov.ph/HRQR1/login.php', payload);

    let res = await axios.post(`/login.php`,payload);

    ///// console.log("Res Data=",res.data)
    localStorage.setItem('user', JSON.stringify(res.data.user));
    commit("setAuth", res.data.user);

    if(res.data.auth == "passed"){

    if(res.data.user.admin == 1){
      return 1
    }else{
      return 2
    }
  }else{

    return 0

  }


  }

}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
