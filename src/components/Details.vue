<template>
  <div>
    <div class="card container bg-dark mt-4">
      <router-link class="right-float" :to="'/'+modelname.toLowerCase()+''">❮ {{ modelname }}</router-link>
      <div class="row">
        <div class="pl-3 col-12 text-success">
          <h1>{{ item.name }}</h1>
        </div>
        <div class="col-md-5 coffset-1" v-if="this.model == 'people'">
          <img :src="'./characters/'+$route.params.id+'.jpg'" />
        </div>
        <div :class="'col-12 col-md-3 mb-3 ' + model ">

          <div class="text-left" v-for="(value, propertyName,index) in item" :key="index">
            <div v-if="index > 1 && index <= (model == 'starships' ? 12 : 7)">
              <h6 class="text-secondary">{{ propertyName | snakeToTitleCase }}</h6>
              <h4>{{ value | snakeToTitleCase }}</h4>
              <hr>
            </div>
          </div>
        </div>
        <div class="col-12 col-xs-12 col-md-4">
          <div v-if="this.relatednames != ''" class="card bg-dark mb-2 mt-3">
            <div class="text-success">
              <h4>{{ relatedtitle }}</h4>
            </div>
            <div v-for="(relateditem, i) in this.relatednames" :key="i">
              <p>
                <router-link :to="'/'+relatedmodel+'/'+relateditem.split('=')[0].split('/')[5]">
                  {{ relateditem.split('=')[1] }}</router-link>
              </p>
            </div>
          </div>
          <div v-if="item.films" class="card bg-dark mb-5">
            <div class="title mb-3 text-success">
              <h4>Featured in this films</h4>
            </div>
            <div v-for="(film) in this.filmnames" :key="film">
              <p>{{ film.split('=')[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import SwApi from '@/services/api/SwApi.js'

  const SwApiService = new SwApi();

  export default {
    props: {
      model: String,
      relatedtitle: String,
      relatedmodel: String,
      modelname: String,
      limitproperties: Number 
    },
    data() {
      return {
        item: [],
        relatednames: {},
        filmnames: {},
      }
    },
    filters: {
      snakeToTitleCase: function (value) {
        if (!value) return ''
        return value.split('_').map(function (item) {
          return item.charAt(0).toUpperCase() + item.substring(1);
        }).join(' ');
      }
    },
    methods: {
      getID(url_i) {
        let url = this.starships[url_i]
        let url_array = url.split('/');
        let result = (url_array[5])
        return result
      },
    },
    async mounted() {
      this.item = await SwApiService.getDetails(this.model, this.$route.params.id)
      this.starships = this.item.starships || this.item.pilots
      let films = this.item.films
      this.relatednames = await SwApiService.getNames(this.starships);
      this.filmnames = await SwApiService.getNames(films);
    }
  }

</script>
