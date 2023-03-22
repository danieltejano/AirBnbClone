import { createPinia } from "pinia";
import { createPersistedStatePlugin } from "pinia-plugin-persistedstate-2";
import { useAuthStore } from "./auth";
import SecureLS from "secure-ls";

const pinia = createPinia();

let persistedStateOptions = {}

if(import.meta.env.VITE_APP_STORE_ENCRYPT == "true")
{
    const ls = new SecureLS({isCompression: true});
    persistedStateOptions = {
        storage: {
            getItem: (key) => ls.get(key),
            setItem: (key, value) => ls.set(key, value),
            removeItem: (key) => ls.remove(key)
        }
    };
}

pinia.use(createPersistedStatePlugin(persistedStateOptions))

export {pinia, useAuthStore}