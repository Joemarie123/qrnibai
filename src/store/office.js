import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  offices: [],
  office: {},
})

const getters = {
  getOffices(state) {
    console.log("Get Offices",state);
    return state.offices;
  },

  getOffice(state){
    return state.office;
  },

}

const mutations = {

  setOffices(state, payload){
    console.log("Set Offices",payload);
    state.offices = payload;
  },


  setOffice(state, payload){
    state.office = payload;
  },

  
}

const actions = {

    async fetchOffices({commit}){
        let res = await axios.get(`/OfficeList.php`);
        commit('setOffices',  res.data.users);
      },
  
  }



export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
  }