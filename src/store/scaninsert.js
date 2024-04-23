import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  scans: [],

  scan: {},
  remarks:[],
  server_datetime:{},
})

const getters = {
  getScans(state) {
    //console.log("Get Users",state);
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

  setScans(state, payload){
    //console.log("Set Scans",payload);
    state.scans = payload;
  },


  setScan(state, payload){
    state.scan = payload;
  },

  setServerDateTime(state,payload){
    //console.log("Set Server Date Time:",payload);
         state.server_datetime = payload;
  },


}

const actions = {

    async registerScan({commit}, payload){
      let res = await axios.post(`/ScanInsert.php`,payload);
      //console.log("radsf",res.data)
      commit('setScans', res.data.user);
    },

    async saveallremarks(){
      // //console.log("payload=",)
      let res = await axios.post(`/saveremarks.php`, this.remarks );
      //console.log("radsf",res.data)

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
