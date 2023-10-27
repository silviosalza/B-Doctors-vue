<script>
import { RouterLink } from 'vue-router';
import { store } from '../store';


export default {
  components: {
    RouterLink,
  },

  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <h1>doctordetails</h1>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>