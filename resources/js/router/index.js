import { createRouter, createWebHistory } from "vue-router";

import landingPage from '../components/landing.vue';

import notFound from '../components/NotFound.vue';


const routes = [
    {
        path: '/',
        component: landingPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
