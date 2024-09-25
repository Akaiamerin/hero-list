import { createRouter, createWebHistory } from 'vue-router';
import home from '@/router/modules/home';
import heroList from '@/router/modules/hero-list';
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...home,
        ...heroList
    ]
});