import {defineStore} from "pinia";


export const useAuthStore = defineStore("auth", {
    state: () => ({
        user: {
            email: null,
            username: null,
            access_token: null,
        },
        profile: {
            birthdate: null,
            full_name: null,
        },
        permissions: [],
        roles: ['admin'],
    }),
    getters: {
        isLoggedIn(state){
            return state.user.access_token !== null
        },
        getAccess(state){
            return {
                permissions: state.permissions,
                roles: state.roles,
            }
        },
        getPermissions(state){
            return state.permissions
        },
        getRoles(state){
            return state.roles;
        },
        getToken(state){
            return state.user.access_token
        }
    },
    actions: {
        async login(payload){
            return new Promise((resolve, reject) => {
                this.$server
            })
        }
    }
})