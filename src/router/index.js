import { createRouter, createWebHistory } from 'vue-router';
import StartView from '../views/StartView.vue';
import Register from '@/components/Register.vue';
import Login from '@/components/Login.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Start', component: StartView },
    { path: '/register', name: 'Register', component: Register },
    { path: '/login', name: 'Login', component: Login },
  ],
});

export default router;
