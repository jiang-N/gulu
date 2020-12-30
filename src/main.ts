import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import Jiang from './components/Jiang.vue';
import Jiang2 from './components/Jiang2.vue';

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Jiang},
    {path: '/xxx', component: Jiang2}
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
