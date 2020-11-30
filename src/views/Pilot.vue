<template>
  <div>
    <Details 
      :model="'people'" 
      :relatedtitle="'Starships'"
      :relatedmodel="'starships'" 
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
