<template>
  <main class="hotel__block">
    <h1 class="hotel__title"> {{ hotelData.title }} </h1>
    <div class="hotel__img"></div>
    <p class="hotel__text"> {{ hotelData.body }} </p>

    <HotelBooking :hotel-id="hotelId"/>

  </main>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import HotelBooking from '@/components/HotelBooking.vue';

export default Vue.extend({
  name: 'HotelPage',
  components: {
    HotelBooking,
  },
  data: () => ({
    hotelData: null,
  }),
  computed: {
    hotelId(): number {
      return +this.$route.params.id;
    },
  },
  methods: {
    loadHotel(): void {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.hotelId}`)
        .then((response) => {
          this.hotelData = response.data;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    this.loadHotel();
  },
});
</script>

<style lang="scss">
.hotel {
  &__block {
    margin-bottom: 60px;
  }
  &__text, &__title {
    &:first-letter {
      text-transform: uppercase;
    }
  }
  &__text {
    font-size: 18px;
    text-align: left;
    margin-top: 30px;
  }
  &__img {
    width: 100%;
    height: 300px;
    background: rgb(221, 230, 219);
    border-radius: 10px;
  }
  &__form {
    margin: 0 auto;
    max-width: 450px;
    &-title {
      font-size: 22px;
      font-weight: bold;
      margin-top: 50px;
      text-align: center;
      width: 100%;
    }
  }
}

</style>
