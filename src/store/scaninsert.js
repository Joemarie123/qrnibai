import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  scans: [],
  scan: {},
})

const getters = {
  getScans(state) {
    console.log("Get Users",state);
    return state.scans;
  },

  getScan(state){
    return state.scan;
  },

}

const mutations = {

  setScans(state, payload){
    console.log("Set Scans",payload);
    state.scans = payload;
  },


  setScan(state, payload){
    state.scan = payload;
  },

  

}

const actions = {

    async registerScan({commit}, payload){
      let res = await axios.post(`http://10.0.1.23:82/HRQR/ScanInsert.php`,payload);
      commit('setScans', res.data.user);
    },
  
  
  }



export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
  }