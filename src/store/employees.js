import axios from 'axios';

/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */

const state = () => ({
  employees: [],
  add_employees:[],
  employee: {},
  add_signatory:[],
 /*  fetch_signatory:[], */

})

const getters = {
  getEmployees(state) {
    //console.log("Get Users",state);
    return state.employees;
  },

  getAdd_Employees(state) {

    return state.add_employees;
  },

  getEmployee(state){
    return state.employee;
  },

  getAdd_Signatory(state)
  {
    return state.add_signatory;
  },

/*   getFetch_Signatory(state)
  {
    return state.fetch_signatory;
  }
 */

}

const mutations = {
  setEmployees(state, payload){
    state.employees = payload;
  },

  setAdd_Employees(state, payload){
    state.add_employees = payload;
  },

  setAddSignatory(state, payload)
  {
    state.add_signatory = payload;
  },

/*   setFetchSignatory(state, payload)
  {
    state.fetch_signatory = payload;
  }, */

  setEmployee(state, payload){
    state.employee = payload;
  },



}

const actions = {

  /* async removeemployees({ commit }, id) {
    try {
      await axios.delete(`/removeemployee.php/${id}`); // Replace with your API endpoint
      commit('setEmployee', id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  },
   */
/*   async Fetchsignatory({commit},payload){
    let res = await axios.post(`/signatory.php`,payload);
    commit('setFetchSignatory', res.data.signatory);
    console.log("Signatory Display",res.data.signatory)
  },
 */

  async Addsignatory({commit},payload){
    let res = await axios.post(`/signatory.php`,payload);
    commit('setAddSignatory', res.data.signatory);
    console.log("Signatory",res.data.signatory)
  },

  async fetchemployees({commit},payload){
    let res = await axios.post(`/officeemployees.php`,payload);
    commit('setEmployees', res.data.employees);
    console.log("Res Dat DATA",res.data.employees)
  },

  async fetchAdd_employees({commit},payload){
    let res = await axios.post(`/outemployees.php`,payload);
    commit('setAdd_Employees', res.data.users);
 /*    //console.log("Res Dat DATA ADD Employees",res.data.users) */
  },
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
