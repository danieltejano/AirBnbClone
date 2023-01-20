/**
 * Routes Declaration
 * Author: github.com/danieltejano
 * 
 */

import DefaultLayout from '@/layout/default.vue'
import HomePage from '@/pages/HomePage.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                name: 'home',
                path: "",
                component: HomePage,
                meta: {
                    title: import.meta.env.VITE_APP_NAME
                }
            }   
        ]
    }
]

export default routes;