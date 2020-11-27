<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="card" v-for="item in items" :key="item.url">
        <router-link :to="'/' + model + '/' + item.url.slice(-2)">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'List',
  data: function () { 
    return {
      items: [],
      responseAvailable: false }
  },
  beforeMount () {
    axios
      .get('https://swapi.dev/api/'+this.model+'')
      .then(response => (this.items = response.data.results))
  },
   props: {
    model: String,
    title: String
  }
}
</script>
