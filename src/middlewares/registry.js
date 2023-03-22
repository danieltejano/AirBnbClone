import authMiddleware from "./route/auth"
import roleMiddleware from './route/role'

const routes = [
    ["auth", authMiddleware],
    ["role", roleMiddleware]
]

const global = [
    
];

export {global, routes}