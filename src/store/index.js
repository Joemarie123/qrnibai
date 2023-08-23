import { createStore } from "vuex";
import usersModule from './users';
import eventsModule from './events';

const store = createStore({
  modules: {

    users: usersModule,
    events: eventsModule,

  }
});


export default store;