<template>
 <li class="catalog__item">
    <router-link
      :to="{name: 'hotel', params: {id: hotel.id}}"
    >
      <div class="catalog__img"></div>
      <h3 class="catalog__title">
        {{ hotel.title }}
      </h3>
      <p class="catalog__text">
        {{ hotel.body }}
      </p>
    </router-link>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HoteltList',
  props: {
    hotel: Object,
  },
});
</script>

<style scoped lang="scss">

.catalog {
  &__item {
    a {
      text-decoration: none !important;
    }
  }
  &__title {
    font-size: 20px;
    color: #42b983;
  }
  &__text {
    color: #222;
  }
  &__text, &__title {
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &__img {
    width: 100%;
    height: 200px;
    background: rgb(221, 230, 219);
    border-radius: 10px;
  }
}
</style>
