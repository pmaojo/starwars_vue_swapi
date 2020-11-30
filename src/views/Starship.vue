<template>
  <div>
    <Details 
      :model="'starships'"
      :relatedtitle="'Pilots'"
      :relatedmodel="'pilots'" 
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
