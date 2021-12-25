<template>
  <ul class="catalog__list">
    <HotelItem
      v-for="hotel in hotels"
      :hotel="hotel"
      :key="hotel.title"
    />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import HotelItem from '@/components/HotelItem.vue';

export default Vue.extend({
  name: 'HoteltList',
  components: {
    HotelItem,
  },
  props: {
    hotels: Array,
  },
});
</script>

<style scoped lang="scss">
.catalog__list {
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 65px 30px;
  margin: 0 auto;
  text-align: left;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
