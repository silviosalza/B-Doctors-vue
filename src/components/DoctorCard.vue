<script>

export default{
    namae: "DoctorCard",
    props: {
        doctor: Object,
    },

    data(){
        return{
            // myUrl: 'http://localhost:8000',
            // doctors: [],
        }
    }
}
</script>

<template>

<div class="card" style="width: 18rem;">
  <img :src= "`${doctor.photo}`" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">{{doctor.services}}</p>
    <div v-for="(element, index) in doctor.typologies" :key="index">
        <span class="card-text">{{element.name}}</span>
    </div> 
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>


