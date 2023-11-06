import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_API_URL; 
const state = () => ({
  users: [],
  auth: {},
  empleyados:[],

/*   apiResponse: null,
    error: null, */
})

const getters = {
  getUsers(state) {
    console.log("Get Users",state);
    return state.users;
  },

  getEmpleyados(state) {
    console.log("Get Empleyados",state);
    return state.empleyados;
  },

 /*  getApiResponse: state => state.apiResponse, */

/*   getApiResponse(state){
  console.log("Get API Response",state);
  return state.apiResponse;
}, */

   /*  getError: state => state.error, */

  getAuth(state){
    return state.auth;
  },

}

const mutations = {

  setUsers(state, payload){
    console.log("Set Users",payload);
    state.users = payload;
  },

  setEmpleyados(state, payload){
    console.log("Set Empleyados",payload);
    state.empleyados = payload;
  },


  setAuth(state, payload){
    state.auth = payload;
  },
/* 
  setApiResponse(state, response) {
    state.apiResponse = response;
  },
  setError(state, error) {
    state.error = error;
  },
 */
}


const actions = {

/*   async sendPostRequest({ commit }) {
    try {
      const response = await axios.post('http://10.0.1.23:82/HRQR/updateemployees.php');
      commit('setApiResponse', response.data);
      console.log('API Response:', response.data);
    } catch (error) {
      commit('setError', error);
      console.error('Error occurred:', error);
    }
  },
 */
  async fetchEmpleyados({commit}){
    let res = await axios.get(`/adminemployeeslist.php`);
    commit('setEmpleyados', res.data.users);
  },


  async fetchUsers({commit}){
    let res = await axios.get(`/employees.php`);
    commit('setUsers', res.data.users);
  },

  async login({commit}, payload){
    console.log("env=",)
   // let res = await axios.post('http://10.0.1.23:82/HRQR1/login.php', payload);
 
    let res = await axios.post(`/login.php`,payload);

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

   
  },


}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}