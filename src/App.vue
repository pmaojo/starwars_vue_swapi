<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/pilots">Pilots</router-link> |
      <router-link to="/starships">Starships</router-link>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>Pelayo Maojo Star Wars Frontend Challenge © 2020</footer>
  </div>
</template>

<style>
body {
  background: #01070e;
  padding: 16px;
  font-size: 16px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100vh;
}

#nav {
  padding: 32px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #ffee00;
}
img{
  max-width: 100%;
}

</style>
