import { createRouter, createWebHistory } from "vue-router";

import MainPage from "../views/MainPage.vue"
import BlogPage from "../views/BlogPage.vue"
import BlogDetailsPage from "../views/BlogDetailsPage.vue"
import ProjectTagerPage from "../views/ProjectTagerPage.vue"
import ProjectDetailsPage from "../views/ProjectDetailsPage.vue"

const routes = [

    {
        path: '/',
        name: "MainPage",
        component: MainPage
    },

    {
        path: '/Blog',
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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;