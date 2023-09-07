import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  events: [],
  pangalans: [],
  event: {},
})

const getters = {
  getEvents(state) {
    console.log("Get Events",state.events);
    return state.events;
  },
  getEvent(state){
    return state.event;
  },

  getName(state) {
    console.log("get Employees =", state.pangalans)
    return state.pangalans;
},
}

const mutations = {
  setEvents(state, payload){
    console.log("Set events",payload);
    state.events = payload;
  },

  setEvent(state, payload){
    state.event = payload;
  },

  setName(state, payload) {
    state.pangalans = payload;
},
}

const actions = {

  async fetchEvents({commit}){

  //  let res = await axios.get(`http://10.0.1.23:82/HRQR/eventlist.php`);
    let res = await axios.get(`/eventlist.php`);
   /*  console.log("data from db=", res.data.event_details[0]); */
    commit('setEvents', res.data.events);
  },

  async registerEvents({commit}, payload){
   // let res = await axios.post(`http://10.0.1.23:82/HRQR/event.php`, payload);
    let res = await axios.post(`/event.php`,payload);
    localStorage.setItem('event', JSON.stringify(res.data.events[0]));
    commit('setEvents', res.data.events);
  },

  async fetchPangalan({ commit }, payload) {
    try {
      ///  let res = await axios.post(`http://10.0.1.23:82/HRQR/eventdetails.php`, payload);
        let res = await axios.post(`/eventdetails.php`,payload);

        console.log("data from db=", res.data.event_details[0])
        commit('setName', res.data.event_details[0]);
    }
    catch (error) {
        console.error('Error fetching students:', error);
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