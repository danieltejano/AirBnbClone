/**
 * Vue Router Declaration
 * Author: github.com/danieltejano
 * 
 */

import {createRouter, createWebHistory} from 'vue-router';
import {middleware} from '@/middlewares/index.js';

import routes from './routes.js'
import auth from '@/middlewares/route/auth.js';

const middlewares = middleware
const Router = createRouter({
    scrollBehavior,
    history: createWebHistory(),
    routes,
})

Router.beforeEach(beforeEach)

function scrollBehavior (to, from, savedPosition){
    if(savedPosition){
        return savedPosition
    }

    return {top: 0, left: 0}
}


function beforeEach(to, from, next){
    console.time('beforeEach Router')
    setTitle(to)
    const ml = middleware.getMiddlewares(to)
    middleware.call(ml,to, from , next)
    next()
    console.timeEnd('beforeEach Router')
}

function setTitle(to){
    const nearestTitle = to.matched.slice()
                                    .reverse()
                                    .find((r) => r.meta)
    const previousTitle = to.matched.slice()
                                    .reverse()
                                    .find((r) => r.meta)
    

    if(nearestTitle){
        document.title = nearestTitle?.meta?.title
    } else if(previousTitle){
        document.title = previousTitle?.meta?.title
    }
}



export default Router;