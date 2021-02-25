<template>
  <div>
    <h2>{{name}}</h2>
    <p>Temps : {{weather}} - Température : {{temperature}}°C</p>
    <p><em>Dernière mise à jour : {{currentDateTime(updatedAt)}}</em></p>
  </div>
</template>

<script lang="ts">
  // import {format, register} from 'timeago.js';
  // import timeAgoFr from  'timeago.js/esm/lang/fr';
  import {defineComponent} from "vue";
  import moment from "moment" ;
  // import moment from "moment";


  // register('fr', timeAgoFr);

  export default defineComponent({
    name: 'City',
    props: {
      name: String,
      weather: String,
      temperature: Number,
      updatedAt: Date
    },

methods:{
      currentDateTime(){
        return moment(this.updatedAt).fromNow();
      }
    }
  })
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }
</style>
