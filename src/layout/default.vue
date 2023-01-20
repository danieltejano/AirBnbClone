<template>
    <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'DefaultLayout',
    setup(){},
    data(){
        return{
            componentOptions: {}
        }
    }
})
</script>