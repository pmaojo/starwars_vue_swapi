<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :class="$route.params.id && $route.name === 'Pilot' ? 'router-link-exact-active' : ''" to="/pilots/">Pilots</router-link> |
      <router-link :class="$route.params.id && $route.name === 'Starship' ? 'router-link-exact-active' : ''" to="/starships/">Starships</router-link>
    </nav>
    <main>
      <transition name="slide-fade">
        <router-view/>  
      </transition>
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

a {
  font-weight: bold;
  color: white;
}

a.router-link-exact-active {
  color: #ffee00;
}

img{
  max-width: 100%;
}
.slide-fade-enter-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(-16px);
  opacity: 0;
}
.card {
  border-radius: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  border: 2px solid #ffee00;
  clear:both;
  padding:16px;
  max-width:650px;
  margin:auto;
  margin-bottom:16px;
}

</style>
