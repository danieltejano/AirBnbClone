<template>
    <div class="flex items-center justify-center w-screen h-screen">
        <div class="flex flex-col gap-3 items-center">
            <router-view/>
            <button @click="goHome" type="button" class="px-5 py-1 font-semibold border hover:border-transparent hover:bg-gray-900 hover:text-white border-gray-900 mt-5 transition-all duration-500 ease-in-out text-xl ">Take me back</button>
        </div>
    </div>
</template>

<script setup>
import {inject} from 'vue'
const $router = inject('$router')

const goHome = () => $router.push({name: 'home'})
</script>