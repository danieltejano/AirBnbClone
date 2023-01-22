/**
 * Routes Declaration
 * Author: github.com/danieltejano
 * 
 */
// Layouts
import DefaultLayout from '@/layout/default.vue'
import MainLayout from '@/layout/main.vue'
// Pages
import HomePage from '@/pages/HomePage.vue'
import DestinationPage from '@/pages/Destination/DestinationPage.vue'

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
            },      
        ],
    },
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                name: 'DestinationPage',
                path: "/destination",
                component: DestinationPage,
                meta: {
                    title: import.meta.env.VITE_APP_NAME
                }
            },
        ]
    }
]

export default routes;