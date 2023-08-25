import { createStore } from "vuex";
import usersModule from './users';
import eventsModule from './events';
import accountModule from './account';

const store = createStore({
  modules: {

    users: usersModule,
    events: eventsModule,
    account: accountModule, 

  }
});


export default store;