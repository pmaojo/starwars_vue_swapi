<template>
  <div class="home">
    <h1>A list of all the  starships and  pilots featured on Star Wars films.</h1>
    <div class="card">
      <h2>{{ starshipscount }} starships</h2>
    <router-link class="btn" to="/starships"> See all starships</router-link>
    </div>
    <div class="card">
      <h2>{{ pilotscount }} pilots </h2>
    <router-link class="btn" to="/pilots"> See all pilots</router-link>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  data () {
    return {
    starshipscount: '-',
    pilotscount: '-' 
    }
  },
  mounted () {

  },
  components: {
  }
}
</script>

<style>
  .home{max-width: 650px;
  margin: auto;}

</style>