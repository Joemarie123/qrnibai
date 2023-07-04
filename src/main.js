/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import QRCodeScanner from './components/QRCodeScanner.vue'
import ElementUI from "element-plus";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.component('qrcode-scanner', QRCodeScanner);

// Load the html5-qrcode script dynamically
const script = document.createElement('script');
script.src = 'https://unpkg.com/html5-qrcode';
document.body.appendChild(script);

registerPlugins(app)

app.mount('#app')
