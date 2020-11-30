<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" class="text-right">
      <b-navbar-brand to="/">
        <img class="mt-1" alt="Vue logo" src="@/assets/img/logo.png">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="home">Home</b-nav-item>
          <b-nav-item to="/pilots/">Pilots</b-nav-item>
          <b-nav-item to="/starships/">Starships</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
  export default {
    name: 'Menu'
  }

</script>
