<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="card" v-for="item in items" :key="item.url">
      <router-link :to="'/' + modelname + '/' + item.url.split('/')[5]">{{ item.name }}</router-link>
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
