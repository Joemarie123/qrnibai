
// Components
import App from './App.vue'
import ElementUI from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";

// Composables
import { createApp } from 'vue'
import router from './router';
import store from './store';

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)
.use(router)
.use(store);


app.use(ElementUI)

registerPlugins(app)

app.mount('#app')
