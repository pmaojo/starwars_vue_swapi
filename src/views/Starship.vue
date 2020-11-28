<template>
  <div class="">
    <h1>{{ name }}</h1>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data () { return {
    name: '',
  }
  },
  beforeMount () {
    axios
      .get('https://swapi.dev/api/starships/'+this.$route.params.id)
      .then(response => (this.name = response.data.name))
  }
}
</script>