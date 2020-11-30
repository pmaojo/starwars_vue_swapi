<template>
  <div id="app">
    <Menu />
    <main>
      <router-view />
    </main>
  </div>
</template>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Michroma&family=Montserrat&display=swap');

</style>
<script>
 import Menu from '@/components/Menu'

export default { 
  components: {
    Menu
  }
}
</script>
