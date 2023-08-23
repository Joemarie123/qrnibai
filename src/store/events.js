import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  events: [],
  event: {},
})

const getters = {
  getEvents(state) {
    console.log("Get Events",state);
    return state.events;
  },
  getEvent(state){
    return state.event;
  }
}

const mutations = {
  setEvents(state, payload){
    console.log("Set events",payload);
    state.events = payload;
  },

  setEvent(state, payload){
    state.event = payload;
  }
}

const actions = {

  async fetchEvents({commit}){
    let res = await axios.get(`http://10.0.1.23/HRQR/eventlist.php`);
    commit('setEvents', res.data.events);
  },

  async registerEvents({commit}, payload){
    let res = await axios.post(`http://10.0.1.23/HRQR/event.php`, payload);
    localStorage.setItem('event', JSON.stringify(res.data.events[0]));
    commit('setEvents', res.data.events);
  },


}




export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}