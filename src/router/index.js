import { createRouter, createWebHashHistory } from "vue-router"
import Layout from '@/layout'

export const constantRoutes = [
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard',
                    elSvgIcon: 'Fold',
                }
            }
        ]
    },
    {
        path: "/workloads",
        component: Layout,
        name: "Workloads",
        redirect: "workloads/pods",
        meta: { title: 'Workloads', elSvgIcon: 'Platform' },
        children: [
            {
                path: "pods",
                name: "Pods",
                component: () => import("@/views/workloads/pods/index.vue"),
                meta: { title: 'Pods' }
            },
            {
                path: "deployments",
                name: "Deployments",
                component: () => import("@/views/workloads/deployments/index.vue"),
                meta: { title: 'Deployments' }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router