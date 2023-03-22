<template>
    <div class="w-3/5 h-full bg-slate-200 bg-[url('https://a0.muscache.com/im/pictures/35bdba3b-6891-4206-9b3e-c808611034af.jpg?im_w=1200')] bg-cover">
    </div>
    <div class="flex flex-col justify-center w-2/5 p-12 text-rose-600">
        <button type="button" @click="goHome" class="flex gap-3 items-center hover:text-white rounded hover:bg-rose-600 select-none cursor-pointer px-3 py-1 w-24">
            <Icon icon="mdi:arrow-left"></Icon>
            <span class="">Home</span>
        </button>
        <h1 class="text-8xl font-normal  lowercase select-none">Air<span class="font-semibold">BnB</span></h1>
        <div class="flex flex-col pl-5 gap-5">
            <span class="text-black mt-5">Your travel concierge.</span>
            <div class="flex flex-col text-lg">
                <label class="font-semibold" for="">Username/Email:</label>
                <input type="text" class="border border-rose-200 focus:outline-rose-500 py-2 px-3 font-semibold rounded max-w-md">
            </div>
            <div class="flex flex-col text-lg">
                <label class="font-semibold" for="">Password:</label>
                <input type="text" class="border border-rose-200 focus:outline-rose-500 py-2 px-3 font-semibold rounded max-w-md">
            </div>
            <div class="flex flex-row-reverse w-full max-w-md gap-5">
                <button type="button" class="border-rose-500 rounded-lg border text-rose-600 font-bold py-3 w-full"> Login</button>
                <button type="button" class="border-rose-500 rounded-lg border text-rose-600 font-bold py-3 w-full"> Sign Up</button>
            </div>
            <div class="flex flex-col gap-3">
                <h5 class="font-semibold">Login with SSO:</h5>
                <div class="flex pl-5 w-full max-w-md gap-5 items-cen">
                    <Icon icon="ic:sharp-facebook" class="w-8 h-8 cursor-pointer"></Icon>
                    <Icon icon="mdi:instagram" class="w-8 h-8 cursor-pointer"></Icon>
                    <Icon icon="mdi:twitter" class="w-8 h-8 cursor-pointer"></Icon>
                    <Icon icon="mdi-google" class="w-8 h-8 cursor-pointer"></Icon>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {inject} from 'vue'

const $router = inject('$router');
const goHome = () => $router.push({name: 'home'})
</script>