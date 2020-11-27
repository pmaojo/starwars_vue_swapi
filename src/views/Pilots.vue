<template>
  <div class="">
    <div>
      <List :model="'people'" :title="'Pilots'" />
    </div>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
    data: function () {
      return {
        items: [],
        responseAvailable: false
      }
    },
    components: {
      List
    },
    methods: {
       
    }
}
</script>