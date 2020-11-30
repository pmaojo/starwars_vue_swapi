<template>
  <div class="">
    <div class="container">
      <List :model="'people'" :modelname="'pilots'" :title="'Pilots'" />
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
