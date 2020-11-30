<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3" v-for="item in items" :key="item.url">
        <div class="card bg-dark mb-5">
          <router-link :to="'/' + modelname + '/' + item.url.split('/')[5]">
            <h3>{{ item.name }}</h3>
            <div class="card-image" v-if="model === 'people'">
              <div class="image"><img :src="'./characters/'+item.url.split('/')[5]+'.jpg'" /></div>
            </div>
          </router-link>
        </div>
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
