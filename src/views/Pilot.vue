<template>
  <div>
    <Details 
      :model="'people'" 
      :relatedtitle="'Starships'"
      :relatedmodel="'starships'" 
      :modelname="'Pilots'"
      :limitproperties="8"
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
