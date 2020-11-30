<template>
  <div class="container">
    <div>
      <List :model="'starships'" :modelname="'starships'" :title="'Starships'" />
    </div>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
    components: {
      List
    }
}
</script>
