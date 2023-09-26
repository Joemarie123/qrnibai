import { createStore } from "vuex";
import usersModule from './users';
import eventsModule from './events';
import accountModule from './account';
import scaninsertModule from './scaninsert';
import officeModule from './office';
import employeesModule from './employees';


const store = createStore({
  modules: {

    users: usersModule,
    events: eventsModule,
    account: accountModule, 
    scaninsert: scaninsertModule,
    office: officeModule,
    employees: employeesModule,
    
  }
});


export default store;