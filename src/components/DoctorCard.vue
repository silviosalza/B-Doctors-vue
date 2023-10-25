<script>

export default {
  namae: "DoctorCard",
  props: {
    doctor: Object,
  },

  data() {
    return {
      // myUrl: 'http://localhost:8000',
      // doctors: [],
    }
  }
}
</script>

<template>
  <div class="card mb-5" style="height: 25rem;">
    <img :src="`${doctor.photo}`" class="card-img-top" alt="...">
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{{ doctor.user_id }}</h5>
      <p class="card-text">{{ doctor.services }}</p>
      <div class="">
        <span v-for="(element, index) in doctor.typologies" :key="index" class="card-text">{{ element.name }}{{ index
          !==
          doctor.typologies.length - 1 ? ', ' : '' }}</span>
      </div>
      <div class="align-self-end">
        <a href="#" class="my-btn">Dettagli</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;

.my-btn {
  padding: 10px 10px;
  color: white;
  background-color: rgb(53, 120, 158);
  text-decoration: none;
  border-radius: 10px;

}
</style>


