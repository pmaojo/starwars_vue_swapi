<template>
  <div>
    <Details 
      :model="'people'" 
      :relatedtitle="'Starships'"
      :relatedmodel="'starships'" 
      :modelname="'Pilots'"
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
