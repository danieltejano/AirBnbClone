import { useAuthStore } from "@/stores";
import { useRouter } from "vue-router";
export default function(to, from, next){
    const auth = useAuthStore()
    if(!auth.getToken){
        next({name: 'Login'})
    }    
}