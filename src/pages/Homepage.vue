<script>
import axios from 'axios';
import { store } from '../store';
import { RouterLink } from 'vue-router';
import DoctorCard from '../components/DoctorCard.vue';

export default {
  components: {
    RouterLink,
    DoctorCard
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getDoctors() {

      // IF filter
      let typeUrl = '';

      for (let i = 0; i < this.store.selectedType.length; i++) {

        // it return the complete API URL for the Axios call, with filter too
        typeUrl = typeUrl + '&typology_id[]=' + this.store.selectedType[i];

        console.log(typeUrl);

      };

      axios.get(this.store.myUrl + typeUrl)
        .then(response => {
          this.store.doctors = response.data.results;
          this.store.typologies = response.data.typologies;
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
      <form @submit.prevent="">
        <ul class="list-group d-flex gap-3">
          <li class="list-group-item rounded-4 border-top-0 border-start-0 border-end-0 bg-dark text-white"
            v-for="(typology, index) in store.typologies" :key="index">
            <div class="form-check">
              <input :value="typology.id" class="form-check-input checkbox-filter" type="checkbox" id="typology_id"
                name="typologies_id[]" v-model="store.selectedType">
              <label for="typology_id" class="form-check-label">{{ typology.name }}</label>
            </div>
          </li>
        </ul>
        <div class="text-center">
          <button class="btn mt-4" @click="getDoctors" type="submit">Filtra</button>
        </div>
      </form>
    </div>
    <div class="row">
      <div class="col-md-3 col-6 col-sm-4 col-xl-3" v-for="(element, index) in store.doctors" :key="index">
        <DoctorCard :doctor="element" />
      </div>
    </div>

  </div>
</template>


<style lang="scss">
@use "../styles/general.scss" as *;
</style>