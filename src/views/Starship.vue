<template>
  <div class="text-left">
    <h1>{{ starship.name }}</h1>
    <div v-for="(value, propertyName,index) in starship" :key="value">
      <div v-if="index > 1 && index <= 12"> 
        <h3>{{ propertyName }}</h3> 
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import SwApi from '@/services/api/SwApi.js'
const SwApiService = new SwApi();

export default {
  data () { return {
    name: '',
    id: '',
    starship: []
  }
  },
  async mounted () {
    this.starship = await SwApiService.getDetails('starships',this.$route.params.id)
  }
}
</script>