import {routes, global} from '@/middlewares/registry.js'

const routeMiddlewares = new Map(routes)
const globalMiddlewares = new Map(global)
const registry = new Map([...globalMiddlewares, ...routeMiddlewares])

function call (middleware, to, from, next) {
    const middlewareStack = middleware.reverse()

    const _next = (...args) => {
        if(args.length > 0 || middlewareStack.length === 0){
            return next(...args)
        }

        const {middleware, params} = parse(middlewareStack.pop())
        // console.log("Calling Middleware ", middleware)
        typeof middleware === 'funciton'
                ? middleware(to, from, _next, params)
                : registry.get(middleware)
                ? registry.get(middleware)(to, from, _next, params)
                : console.error(`Call to undefined middleware [${middleware}]`)
        }    
    while(middlewareStack.length > 0){
        _next()
    }
}

function getMiddlewares(route){

    const compliedMiddlewares = [...globalMiddlewares.keys()]
    route.meta?.middleware?.forEach((middleware) => {
        Array.isArray(middleware) ? compliedMiddlewares.push(...compliedMiddlewares) : compliedMiddlewares.push(middleware)
    })
    return compliedMiddlewares
}

function parse(middleware){
    if(typeof middleware === 'function'){
        return {middleware}
    }
    const [name, params] = middleware.split(':')
    return {middleware: name, params}
}

const middleware = {call, getMiddlewares}
export {middleware}