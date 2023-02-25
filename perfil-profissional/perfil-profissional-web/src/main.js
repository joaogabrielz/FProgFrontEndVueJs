import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/vue-router'
import pinia from './plugins/pinia'
import AlertApp from './components/AlertApp.vue';

const app = createApp(App)
app.component('AlertApp', AlertApp)
  app.use(router)
  app.use(pinia)
  app.mount('#app');
