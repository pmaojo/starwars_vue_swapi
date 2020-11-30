<template>
  <div class="home container mt-5">
    <div class="row">
      <div class="col-5 offset-0 offset-md-1">
        <h1>A list of all the starships and pilots featured on Star Wars films.</h1>
      </div>
      <div v-if="starshipscount>0" class="offset-0 col-12 offset-md-1 col-md-4">
        <h2>{{ starshipscount }} starships</h2>
        <router-link class="btn btn-primary btn-lg btn-success" to="/starships"> See all starships</router-link>
      <div v-if="pilotscount>0" class="mt-4">
        <h2>{{ pilotscount }} pilots </h2>
        <div>
          <router-link class="btn btn-primary btn-lg btn-success" to="/pilots"> See all pilots</router-link>
        </div>
      </div>
      </div>


    </div>
    <div>
    </div>
  </div>
</template>

<script>
  import SwApi from '@/services/api/SwApi.js'
  const SwApiService = new SwApi();

  export default {
    name: 'Home',
    data() {
      return {
        starshipscount: 0,
        pilotscount: 0
      }
    },
    async beforeMount() {
      this.pilotscount = await SwApiService.getTotal('people')
      this.starshipscount = await SwApiService.getTotal('starships')
      window.scrollTo(0, 0)
    }
  }

</script>
