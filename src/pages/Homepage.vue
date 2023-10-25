<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
import DoctorCard from '../components/DoctorCard.vue';





export default {
    components: {
    RouterLink,
    DoctorCard
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
    <div class="container">
        <div class="row">
            <div class="col-md-3 col-6 col-sm-4 col-xl-2" v-for="(element , index) in doctors" :key="index">
                <DoctorCard :doctor="element"/>
            </div>
        </div>

    </div>

        
</template>


<style lang="scss">
@use "../styles/general.scss" as *;

</style>