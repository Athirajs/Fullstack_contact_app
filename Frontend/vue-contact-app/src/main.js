import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './Store/ContactStore' 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App)
// Use Vue Toastification
const options = {
    // You can customize options here
    position: 'top-right',
    timeout: 5000,
  };
app.use(Toast, options);
app.use(router) // Register the router
app.use(store)
app.mount('#app')
