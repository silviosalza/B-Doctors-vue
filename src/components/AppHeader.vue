<script>
import { RouterLink } from 'vue-router';



export default {
    components: {
        RouterLink,
    },

    data() {
        return {
           
        }
    }}
    
</script>

<template>
    <router-link :to="{ name: 'home' }" aria-current="page">Homepage</router-link>
    <router-link :to="{ name: 'doctor' }" aria-current="page">DoctorDetails</router-link>

        
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;

</style>