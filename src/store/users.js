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
  },

}

const mutations = {

  setUsers(state, payload){
    console.log("Set Users",payload);
    state.users = payload;
  },


  setAuth(state, payload){
    state.auth = payload;
  },

  

}

const actions = {

  async fetchUsers({commit}){
    let res = await axios.get(`http://10.0.1.23/HRQR/employees.php`);
    commit('setUsers', res.data.users);
  },

  async login({commit}, payload){
    let res = await axios.post('http://10.0.1.23/HRQR/login.php', payload);
    console.log("Res Data=",res.data)
    localStorage.setItem('user', JSON.stringify(res.data.user));
    commit("setAuth", res.data.user);
 
    if(res.data.auth == "passed"){

    if(res.data.user.admin){
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