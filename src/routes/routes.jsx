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
    {
        path: '/shop',
        component: lazy(() => import('@/pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        component: lazy(() => import('@/pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        component: lazy(() => import('@/pages/DetailProduct'))
    },
    {
        path: '/about-us',
        component: lazy(() => import('@/pages/About'))
    },
    {
        path: '/order',
        component: lazy(() => import('@/pages/Orders/Orders'))
    }
]

export default routes;