
// Components
import App from './App.vue'
import ElementUI from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'


const app = createApp(App)


app.use(ElementUI)

registerPlugins(app)

app.mount('#app')
