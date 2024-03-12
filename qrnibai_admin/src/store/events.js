import axios from 'axios';
/* axios.defaults.baseURL = process.env.VUE_APP_API_URL; */
const state = () => ({
  events: [],
  pangalans: [],
  eventattendance:[],
  eventhistory:[],
  attendancecount:[],

  event: {},
})

const getters = {
  getEvents(state) {
    // console.log("Get Events",state.events);
    return state.events;
  },
  getEvent(state){
    return state.event;
  },

  getattendancecount(state){
    return state.attendancecount;
  },

  getEventsHistory(state) {
    // console.log("Get Events History",state.eventhistory);
    return state.eventhistory;
  },

  getName(state) {
    // console.log("get Employees =", state.pangalans)
    return state.pangalans;
},

getEventAttendance(state) {
  // console.log("get Event Attendance =", state.eventattendance)
  return state.eventattendance;
},

}

const mutations = {
  setEvents(state, payload){
    // console.log("Set events",payload);
    state.events = payload;
  },

  setEventsHistory(state, payload){
    // console.log("Set events history",payload);
    state.eventhistory = payload;
  },



  setEvent(state, payload){
    state.event = payload;
  },

  setName(state, payload) {
    state.pangalans = payload;
},

setEventAttendance(state, payload) {
  state.eventattendance = payload;
},

setattendancecount(state, payload){
  // console.log("Set events history",payload);
  state.attendancecount = payload;
},

}

const actions = {

  async fetchAttendanceCount({commit},payload){

    //  let res = await axios.get(`https://database.tagumcity.gov.ph/HRQR/eventlist.php`);
      let res = await axios.post(`/attendancecountperoffice.php`,payload);
     /*  console.log("data from db=", res.data.event_details[0]); */
      commit('setattendancecount', res.data.users);
      console.log("Attendance Count 1", res.data.users)
    },

  async fetchEvents({commit}){

  //  let res = await axios.get(`https://database.tagumcity.gov.ph/HRQR/eventlist.php`);
    let res = await axios.get(`/admineventlist.php`);
   /*  console.log("data from db=", res.data.event_details[0]); */
    commit('setEvents', res.data.events);
    console.log("Events Listtt", res.data)
  },



  
  async fetchEventsHistory({commit}){

    //  let res = await axios.get(`https://database.tagumcity.gov.ph/HRQR/eventlist.php`);
      let res = await axios.get(`/eventlist.php`);
      commit('setEventsHistory', res.data.events);
    },

  async registerEvents({commit}, payload){
   // let res = await axios.post(`https://database.tagumcity.gov.ph/HRQR/event.php`, payload);
    let res = await axios.post(`/event.php`,payload);

    console.log("DELETE Event",res.data)
    if(res.data.events){
      localStorage.setItem('event', JSON.stringify(res.data.events[0]));
    commit('setEvents', res.data.events);
    }

      if(res.data.response == "Cannot update the Event because it has already a participant!")
      {
        return 0
      }
      else if(res.data.response == "Cannot delete the Event because it has already a participant!")
      {
          return 3
      }
      else if(res.data.response == "Deleted Successfully")
      {
        return 4
      }

      else{
        return 1
      }



  /*     if(res.data.response == "Cannot delete the Event because it has already a participant!")
      {
        return 3
      }
      else{
        return 4
      }
 */


  },

  async fetchPangalan({ commit }, payload) {
    try {
      ///  let res = await axios.post(`https://database.tagumcity.gov.ph/HRQR/eventdetails.php`, payload);
        let res = await axios.post(`/eventdetails.php`,payload);

        // console.log("data from db=", res.data.event_details[0])
        // console.log("Event Attendance=", res.data.event_attendance)
        commit('setName', res.data.event_details[0]);
        commit('setEventAttendance', res.data.event_attendance);
        console.log("Kini daw",res.data.event_attendance)
    }
    catch (error) {
        console.error('Error fetching students:', error);
    }

},


async Admin_fetchPangalan({ commit }, payload) {
  try {
    ///  let res = await axios.post(`https://database.tagumcity.gov.ph/HRQR/eventdetails.php`, payload);
      let res = await axios.post(`/admineventdetails.php`,payload);
      // console.log("data from db=", res.data.event_details[0])
       console.log("Event Attendance=", res.data.event_attendance)
      commit('setName', res.data.event_details[0]);
      commit('setEventAttendance', res.data.event_attendance);
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
