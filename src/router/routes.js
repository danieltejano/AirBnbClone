/**
 * Routes Declaration
 * Author: github.com/danieltejano
 * 
 */
// Layouts
import DefaultLayout from '@/layout/default.vue'
import MainLayout from '@/layout/main.vue'
import ErrorLayout from '@/layout/error.vue'
import AuthenticationLayout from '@/layout/auth.vue'
// Pages
import HomePage from '@/pages/HomePage.vue'
import DestinationPage from '@/pages/Destination/DestinationPage.vue'

// Authentication Pages
import LoginPage from '@/pages/Authentication/login.vue'

// Error Pages
import NotFound from '@/pages/Error/notFound.vue'
import Unauthorized from '@/pages/Error/unauthorized.vue'
import ServerError from '@/pages/Error/serverError.vue'
import Unauthenticated from '@/pages/Error/unauthenticated.vue'

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
                    title: import.meta.env.VITE_APP_NAME,
                }
            },
            {
                name: 'RoleBlockedRoute',
                path: "/destination/role",
                component: DestinationPage,
                meta: {
                    title: import.meta.env.VITE_APP_NAME,
                    
                }
            },
        ],
        meta: {
            middleware: ["auth", "role:admin,moderator"]
        }
    },
    {
        path: "/",
        component: AuthenticationLayout,
        children: [
            {
                path: "/login",
                name: "Login",
                component: LoginPage,
                meta:	{
                    title: "title"
                },
            }
        ]
    },
    {
        path:'/',
        component: ErrorLayout,
        children: [
            {
                path: "/:catchAll(.*)*",
                name: "notFound",
                component: NotFound,
                meta: {
                  title: "Not Found",
                },
            },
            {
                path: "error/unauthorized",
                name: "Unauthorized",
                component: Unauthorized,
                meta:	{
                    title: "Unauthroized"
                },
            },  
            {
                path: "error",
                name: "ServerError",
                component: ServerError,
                meta:	{
                    title: "Unable to Process at the moment"
                },
            },
            {
                path: "error/unauthenticated",
                name: "Unauthenticated",
                component: Unauthenticated,
                meta:	{
                    title: "Unable to Process at the moment"
                },
            },
        ]
    }
]

export default routes;