<template>
  <div>
    <h1 class="mb-4 mt-4">{{ title }}</h1>
    <div class="row">
      <div class="col-12 col-md-3 col-lg-3 pb-4" v-for="item in items" :key="item.url">
          <router-link class="card h-100 bg-primary mb-2" :to="'/' + modelname + '/' + item.url.split('/')[5]">
              <div class="card-title p-3 mb-0 align-middle h-100 text-success"><h4>{{ item.name }}</h4></div>
              <div class="card-image mt-auto" v-if="model === 'people'">
                 <img :src="'./characters/'+item.url.split('/')[5]+'.jpg'" />
            </div>
          </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import SwApi from '@/services/api/SwApi.js'
  const SwApiService = new SwApi();

  export default {
    name: 'List',
    props: {
      model: String,
      modelname: String,
      title: String
    },
    data: function () {
      return {
        items: [],
        nextavailable: 2
      }
    },
    methods: {
      async getMore() {
        let data = await SwApiService.getNextPage(this.model, this.nextavailable)
        this.items = this.items.concat(data.results)
        this.nextavailable = data.next != null ? this.nextavailable + 1 : false
      }
    },
    async mounted() {
      this.items = await SwApiService.getFirstList(this.model);
      this.nextavailable = 2;
    },
    updated() {
      if (this.nextavailable) {
        this.getMore()
      }
    }
  }

</script>
