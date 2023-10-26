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
      doctors: [],
      myUrl: 'http://localhost:8000',
    }
  },
  methods: {
    getDoctors() {
      axios.get(`${this.myUrl}/api/doctors`)
        .then(response => {
          this.doctors = response.data.results;
          this.typologies = response.data.typologies;
          console.log(this.doctors);
        })
        .catch(error => {
          console.error(error);
        });
    }


  },
  mounted() {
    this.getDoctors();
  }
}

</script>

<template>
  <div class="container">
    <h1>homepage</h1>
    <div class="search">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Cerca</button>
      </form>
      <div class="typologies">
        <div v-for="(typology, index) in typologies" class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            {{ typology.name }}
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-6 col-sm-4 col-xl-3" v-for="(element, index) in doctors" :key="index">
        <DoctorCard :doctor="element" />
      </div>
    </div>

  </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>