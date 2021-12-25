<template>
  <div id="app">
    <h1>Сервис бронирования отелей</h1>
    <HoteltList :hotels="hotels" />
    <BasePagination
      v-model="page"
      :per-page="itemsPerPage"
      :count="itemsCount"
      :visible-pages-count="visiblePagesCount"
      @paginate="paginatePage"
    />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import HoteltList from '@/components/HoteltList.vue';
import BasePagination from '@/components/BasePagination.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HoteltList,
    BasePagination,
  },
  data: () => ({
    hotels: null,
    hotelsLoading: false,
    page: 1,
    itemsPerPage: 10,
    visiblePagesCount: 5,
    itemsCount: 0,
  }),
  computed: {
  },
  methods: {
    getHotelsCount(): void {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.itemsCount = response.data.length;
        })
        .catch((error) => console.log(error));
    },
    loadHotels(): void {
      this.hotelsLoading = true;
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=10`)
        .then((response) => {
          this.hotels = response.data;
        })
        .then(() => { this.hotelsLoading = false; })
        .catch((error) => console.log(error));
    },
    paginatePage(clickPage: number): void {
      this.page = clickPage;
    },
  },
  watch: {
    page() {
      this.loadHotels();
    },
  },
  created() {
    this.getHotelsCount();
    this.loadHotels();
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  margin-bottom: 50px;
}
</style>
