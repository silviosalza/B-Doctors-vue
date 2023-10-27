<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: { AppHeader, AppFooter, },
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <div class="app">
    <AppHeader />
    <router-view></router-view>
    <AppFooter />
  </div>
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
