<template>
  <div class="">
    <div>
      <List :model="'starships'" :title="'Starships'" />
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
    }
}
</script>