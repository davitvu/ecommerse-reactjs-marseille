import { lazy } from "react";


const routes = [
    {
        path: '/',
        component: lazy(() => import('@/pages/Home/Home'))
    },
    {
        path: '/blog',
        component: lazy(() => import('@/pages/Blog/Blog'))
    },
]

export default routes;