<template>
  <main class="hotel__block">
    <router-link class="back-link" :to="{ name: 'main' }"> Назад </router-link>
    <a class="back"></a>
    <h1 class="hotel__title">{{ hotel.title }}</h1>
    <div class="hotel__img">
      <img src="img/hotel.jpg" alt="отель" />
    </div>
    <p class="hotel__text">{{ hotel.body }}</p>

    <HotelBooking :hotel-id="hotelId" />
  </main>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import HotelBooking from '@/components/HotelBooking.vue';
import { IHotel } from '@/types';

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
    hotel(): IHotel {
      return this.hotelData ? this.hotelData : [];
    },
  },
  methods: {
    loadHotel(): void {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${this.hotelId}`)
        .then(response => {
          this.hotelData = response.data;
        })
        .catch(error => console.log(error));
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
  &__text,
  &__title {
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
    overflow: hidden;

    img {
      object-fit: cover;
      width: 100%;
      object-position: 0 -200px;
    }
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
.back-link {
  color: #42b983;
  margin-right: auto;
  display: flex;
}
</style>
