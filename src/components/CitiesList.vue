<template>
  <div>
    <h1>Liste des villes</h1>
    <City v-for="city of cities" :key="city.id" :name="city.name" :weather="city.weather" :temperature="city.temperature" :updated-at="city.updatedAt"></City>
  </div>
</template>

<script lang="ts">
  import City from "./City.vue";
  import axios from "axios";
  import { defineComponent } from 'vue';
  // import store from '../store/store';
  import { useStore } from '@/store/store';


  export default defineComponent ({
    name: 'CitiesList',
    components: {
      City
    },
  computed:{
      useStore.this.state.
  }
  })
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }
</style>
