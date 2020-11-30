<template>
  <div>
    <nav class="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
    <div class="container-fluid"><router-link to="/"><img alt="Vue logo" src="@/assets/img/logo.png"></router-link>
    <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navcol-1">
            <ul class="nav navbar-nav text-right text-white ml-auto">
                <li class="nav-item" role="presentation"><router-link to="/" class="nav-link active">Home</router-link></li>
                <li class="nav-item" role="presentation"><router-link
            :class="$route.params.id && $route.name === 'Pilot' ? 'router-link-exact-active nav-link' : 'nav-link'"
            to="/pilots/">Pilots</router-link></li>
                <li class="nav-item" role="presentation"> <router-link
            :class="$route.params.id && $route.name === 'Starship' ? 'router-link-exact-active nav-link' : 'nav-link'"
            to="/starships/">Starships</router-link></li>
            </ul>
        </div>
    </div>
</nav>
  </div>
</template>
<script>
  export default {
    props: {
    },
    data() {
      return {
      }
    }
  }

</script>
