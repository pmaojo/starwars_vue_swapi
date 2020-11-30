<template>
  <div>
    <Details 
      :model="'starships'"
      :relatedtitle="'Pilots'"
      :relatedmodel="'pilots'" 
      :modelname="'Starships'"
       />
  </div>
</template>
<script>

  import Details from '../components/Details'

  export default {
    components: {
      Details
    }
  }

</script>
