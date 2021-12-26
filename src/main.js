import { createApp } from 'vue'
import App from './App.vue'
import viPlugin from "../packages"
import router from './router'
import Preview from './components/Preview.vue';
import './assets/markdown.css';
// import {Button} from "../packages"
const app = createApp(App)
app.component('Preview', Preview)
app.use(router).use(viPlugin).mount('#app');
