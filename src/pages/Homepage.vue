<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';




export default {
    components: {
        RouterLink,
    },

    data() {
        return {
           doctors:[],
           myUrl: 'http://localhost:8000',
        }
    },
    methods: {
        getDoctors(){
            axios.get(`${this.myUrl}/api/doctors`)
                .then(response => {
                    this.doctors = response.data.results;
                    console.log(this.doctors);
                })
                .catch(error => {
                    console.error(error);
                });
        }


    },
    mounted(){
        this.getDoctors();
    }
}
    
</script>

<template>
    <h1>homepage</h1>

        
</template>


<style lang="scss">
@use "../styles/general.scss" as *;

</style>