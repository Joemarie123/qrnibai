import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  scans: [],
  scan: {},
  server_datetime:{},
})

const getters = {
  getScans(state) {
    console.log("Get Users",state);
    return state.scans;
  },

  getScan(state){
    return state.scan;
  },

  getServerDateTime(state)
  {
    return state.server_datetime;

  },

}

const mutations = {

  setServerDateTime(state,payload){
     // console.log("Set Server Date Time:",payload);
           state.server_datetime = payload;
    },


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
      let res = await axios.post(`http://10.0.1.23:82/ScanInsert.php`,payload);
      commit('setScans', res.data.user);
    },

    async fetchServerDateTime({commit}){
      let res = await axios.get(`/getdatetime.php`);
      //  console.log("Get Server Date Time",res.data)
      commit('setServerDateTime', res.data);

    },
  }



export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
  }
