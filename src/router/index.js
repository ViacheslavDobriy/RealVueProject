import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../views/MainPage.vue"
import BlogPage from "../views/BlogPage.vue"
import BlogDetailsPage from "../views/BlogDetailsPage.vue"
import ProjectTagerPage from "../views/ProjectTagerPage.vue"
import ProjectDetailsPage from "../views/ProjectDetailsPage.vue"
import ErrorPage from '../components/ErrorPage.vue'

const routes = [

    {
        path: '/',
        name: "MainPage",
        component: MainPage
    },

    {
        path: '/blog',
        name: "BlogPage",
        component: BlogPage
    },

    {
        path: '/BlogDetails',
        name: "BlogDetailsPage",
        component: BlogDetailsPage
    },

    {
        path: '/projects',
        name: "ProjectTagerPage",
        component: ProjectTagerPage
    },
    {
        path: '/projectDetails',
        name: "ProjectDetailsPage",
        component: ProjectDetailsPage
    },
    {
        path: '/:CatchAll(.*)',
        name: "ErrorPage",
        component: ErrorPage
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;