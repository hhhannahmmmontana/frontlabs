import { Router } from "@vaadin/router";

const baseUrl = import.meta.env.BASE_URL;
const outlet = document.querySelector("#app");
const router = new Router(outlet, { baseUrl: baseUrl });

router.setRoutes([
    {
        path: '/',
        component: 'promo-page'
    },
    {
        path: '/catalog',
        component: 'catalog-page'
    },
    {
        path: '/blog',
        component: 'blog-page'
    },
    {
        path: '/about',
        component: 'about-page'
    },
    {
        path: '(.*)',
        component: 'promo-page'
    }
]);