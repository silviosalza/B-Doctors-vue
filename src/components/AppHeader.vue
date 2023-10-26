<script>
import { RouterLink } from 'vue-router';



export default {
  components: {
    RouterLink,
  },

  data() {
    return {

    }
  }
}

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">B-Doctors</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><router-link :to="{ name: 'home' }"
                  aria-current="page">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link :to="{ name: 'doctor' }" aria-current="page">I nostri
                  Dottori</router-link></a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </header>
</template>


<style scoped lang="scss">
@use "../styles/general.scss" as *;
</style>