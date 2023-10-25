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
  <div class="card">
    <img :src="`${doctor.photo}`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">{{ doctor.services }}</p>

      <span v-for="(element, index) in doctor.typologies" :key="index" class="card-text">{{ element.name }},</span>

      <a href="#" class="btn btn-primary">Info</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>


