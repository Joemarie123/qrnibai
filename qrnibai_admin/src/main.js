
// Components
import App from './App.vue'
import ElementUI from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import axios from 'axios';

// Composables
import { createApp } from 'vue'
import router from './router';
import store from './store';

axios.defaults.baseURL='http://10.0.1.23:82/HRQR';
// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)
.use(router)
.use(store);


app.use(ElementUI)

registerPlugins(app)

app.mount('#app')
