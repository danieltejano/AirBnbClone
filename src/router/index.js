/**
 * Vue Router Declaration
 * Author: github.com/danieltejano
 * 
 */

import {createRouter, createWebHistory} from 'vue-router';
import routes from './routes.js'

const Router = createRouter({
    history: createWebHistory(),
    routes
})

export default Router;