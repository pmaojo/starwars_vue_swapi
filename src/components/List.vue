<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="card" v-for="item in items" :key="item.url">
        <router-link :to="'/' + modelname + '/' + item.url.split('/')[5]">{{ item.name }}</router-link>
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
      nextavailable: 2 
      }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/'+this.model+'/')
      .then(response => (this.items = response.data.results))
  },
  updated () {
    if (this.nextavailable) 
      this.getAll()
  },
  props: {
    model: String,
    modelname: String,
    title: String
  },
  methods: {
    getAll(){
        axios
          .get('https://swapi.dev/api/'+this.model+'/?page='+this.nextavailable)
          .then(response => (
            this.items = response.data.next != null ? this.items.concat(response.data.results) : this.items,
            this.nextavailable = response.data.next != null ? this.nextavailable + 1 : false))
      }
    }
  }
</script>
