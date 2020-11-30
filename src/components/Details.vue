<template>
  <div>
    <div class="card container bg-dark mt-4">
      <div>
        <h1>{{ item.name }}</h1>
      </div>

      <div class="row">
        <div class="col-md-4" v-if="this.model == 'people'">
          <img :src="'./characters/'+$route.params.id+'.jpg'" />
        </div>
        <div class="col-md-4">
          <div class="text-left" v-for="(value, propertyName,index) in item" :key="index">
            <div v-if="index > 1 && index <= 7">
              <h4>{{ propertyName | snakeToTitleCase }}</h4>
              <p>{{ value }}</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div v-if="item.starships != ''" class="card bg-dark mb-5">
            <div class="title">
              <h4>{{ relatedtitle }}</h4>
            </div>
            <div v-for="(relateditem, i) in this.starshipnames" :key="i">
              <p>
                <router-link :to="'/'+relatedmodel+'/'+getID(i)">{{ relateditem }}</router-link>
              </p>
            </div>
          </div>
          <div v-if="item.films" class="card bg-dark">
            <div class="title mb-3">
              <h4>Appears in this films</h4>
            </div>

            <div v-for="(film) in this.filmnames" :key="film">
              <p>{{ film }}</p>
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
      relatedmodel: String
    },
    data() {
      return {
        item: [],
        starshipnames: {},
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
      this.starshipnames = await SwApiService.getNames(this.starships);
      this.filmnames = await SwApiService.getNames(films);
      console.log(this.starshipnames);
    }
  }

</script>
