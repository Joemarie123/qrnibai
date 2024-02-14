import { createStore } from "vuex";
import usersModule from './users';
import eventsModule from './events';
import accountModule from './account';
import scaninsertModule from './scaninsert';
import officeModule from './office';
import employeesModule from './employees';
import createPersistedState from "vuex-persistedstate";


const store = createStore({
  modules: {

    users: usersModule,
    events: eventsModule,
    account: accountModule,
    scaninsert: scaninsertModule,
    office: officeModule,
    employees: employeesModule,

  },

  plugins: [createPersistedState()],
});


export default store
