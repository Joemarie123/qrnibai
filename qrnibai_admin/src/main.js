
// Components
import App from './App.vue'
import ElementUI from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import axios from 'axios';

// Composables
import { createApp } from 'vue'
import router from './router';
import store from './store';

/* axios.defaults.baseURL='https://database.tagumcity.gov.ph/HRQR'; */
axios.defaults.baseURL='https://database.tagumcity.gov.ph/HRQR';

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)
.use(router)
.use(store);


app.use(ElementUI)

registerPlugins(app)

app.mount('#app')
