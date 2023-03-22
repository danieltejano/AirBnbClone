import { createApp } from 'vue'
import './app.css'
import App from './App.vue'

import Router from './router'
import {Icon} from '@iconify/vue'
import { api, axios } from './connector/axios'
import { pinia } from './stores'


function init()
{
    const app = createApp(App)

    pinia.use(() => ({
        $router: Router
    }))

    app.use(Router)
    app.use(pinia)
    
    app.component("Icon", Icon)
    app.config.globalProperties.$api = api
    app.config.globalProperties.$axios = axios

    Object.entries(app.config.globalProperties)
            .forEach(([key, value]) =>{
                app.provide(key, value)
            })
    app.mount('#app')
}

init()