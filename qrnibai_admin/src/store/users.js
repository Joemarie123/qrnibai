import axios from 'axios';

// axios.defaults.baseURL = process.env.VUE_APP_API_URL;
const state = () => ({
  users: [],
  auth: {},
  empleyados:[],
  deletepass:{},
  resetpass:{},

/*   apiResponse: null,
    error: null, */
})

const getters = {
  getUsers(state) {
    /// console.log("Get Users",state);
    return state.users;
  },

  getEmpleyados(state) {
    /// console.log("Get Empleyados",state);
    return state.empleyados;
  },

  getDeletepassword(state)
  {
    /// console.log("Get DELETE PASS",state);
    return state.deletepass;
  },

  getResetpassword(state)
  {
    /// console.log("Get Reset PASS",state);
    return state.resetpass;
  },

  getAuth(state){
    return state.auth;
  },

}

const mutations = {

  setUsers(state, payload){
    /// console.log("Set Users",payload);
    state.users = payload;
  },

  setEmpleyados(state, payload){
    /// console.log("Set Empleyados",payload);
    state.empleyados = payload;
  },

  setDeletepassword(state, payload){
    /// console.log("Set Delete Password",payload);
    state.deletepass = payload;
  },

  seResetpassword(state, payload){
    /// console.log("Set Reset Password",payload);
    state.resetpass = payload;
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
      const response = await axios.post('https://database.tagumcity.gov.ph/HRQR/updateemployees.php');
      commit('setApiResponse', response.data);
      /// console.log('API Response:', response.data);
    } catch (error) {
      commit('setError', error);
      console.error('Error occurred:', error);
    }
  },
 */

  async Reset_user_Activate({commit},payload){

    let res = await axios.post(`/resetpassword.php`,payload);
    commit('seResetpassword', res.data);
    /// console.log("RESET USER", res.data)
  },




  async deleteuser_Activate({commit},payload){

      let res = await axios.post(`/deleteuser.php`,payload);
      commit('setDeletepassword', res.data);
      /// console.log("Delete USER", res.data)
    },



  async fetchEmpleyados({commit}){
    let res = await axios.get(`/adminemployeeslist.php`);
    commit('setEmpleyados', res.data.users);
  },


  async fetchUsers({commit}){
    let res = await axios.get(`/employees.php`);
    commit('setUsers', res.data.users);
    /// console.log("user List",res.data)
  },

  async login({commit}, payload){
    /// console.log("env=",)
   // let res = await axios.post('https://database.tagumcity.gov.ph/HRQR1/login.php', payload);

    let res = await axios.post(`/login.php`,payload);

    /// console.log("Res Data=",res.data)
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
