import { useAuthStore } from "@/stores";
export default function(to, from, next, ...args){
    const authUser = useAuthStore()
    const userRoles = authUser.getRoles
    const [roles] = args
    roles.split(',').forEach((e) => {
        if(!userRoles.some(x => x == e))
        next({name: 'Unauthorized'})
    })
}