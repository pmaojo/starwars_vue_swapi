<template>
  <div class="home">
    <h1>A list of all the  starships and  pilots featured on Star Wars films.</h1>
    <div>
    <div v-if="starshipscount>0"><h2>{{ starshipscount }}  starships</h2></div>
    <div><router-link class="btn force" to="/starships"> See all starships</router-link></div>
    </div>
    <div>
    <div v-if="pilotscount>0"><h2>{{ pilotscount }} pilots </h2></div>
    <div><router-link class="btn force" to="/pilots"> See all pilots</router-link></div></div>
  </div>
</template>

<script>
  import SwApi from '@/services/api/SwApi.js'
  const SwApiService = new SwApi();

export default {
  name: 'Home',
  data () {
    return {
    starshipscount: 0,
    pilotscount: 0 
    }
  },
  async beforeMount () {
    this.pilotscount = await SwApiService.getTotal('people')
    this.starshipscount = await SwApiService.getTotal('starships')
    window.scrollTo(0, 0)
  }
}
</script>

<style>
  .home{max-width: 650px;
  margin: auto;}

</style>