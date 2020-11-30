<template>
  <div class="text-left">
    <h1>{{ pilot.name }}</h1>
    <div v-for="(value, propertyName,index) in pilot" :key="value">
      <div v-if="index > 1 && index <= 7"> 
        <h4>{{ propertyName }}</h4> 
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
    pilot: []
  }
  },
  async mounted () {
    this.pilot = await SwApiService.getDetails('people',this.$route.params.id)
  }
}
</script>