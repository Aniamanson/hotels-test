<template>
  <div class="body-wrapper">
    <Modal v-if="isOpenModal" :open-target="modalTarget" :params="params" @close="closeModal" />
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import eventBus from '@/eventBus';

export default Vue.extend({
  name: 'App',
  components: {},
  data: () => ({
    hotels: null,
    hotelsLoading: false,
    page: 1,
    itemsPerPage: 10,
    visiblePagesCount: 5,
    itemsCount: 0,
    isOpenModal: false,
    params: {},
    modalTarget: '',
  }),
  computed: {},
  methods: {
    getHotelsCount(): void {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.itemsCount = response.data.length;
        })
        .catch(error => console.log(error));
    },
    loadHotels(): void {
      this.hotelsLoading = true;
      axios
        .get(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}&_limit=10`)
        .then(response => {
          this.hotels = response.data;
          console.log(response.data);
        })
        .then(() => {
          this.hotelsLoading = false;
        })
        .catch(error => console.log(error));
    },
    paginatePage(clickPage: number): void {
      this.page = clickPage;
    },

    closeModal(): void {
      this.isOpenModal = false;
      const body: HTMLBodyElement | null = document.querySelector('body');
      if (body) {
        body.style.overflow = this.isOpenModal ? 'hidden' : 'auto';
      }
    },

    openModal(params: object, modalTarget: string): void {
      this.isOpenModal = true;
      this.params = params;
      this.modalTarget = modalTarget;
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
    eventBus.$on('showSuccesModal', (form: object, modalTarget: string): void => {
      this.openModal(form, modalTarget);
    });
  },
});
</script>

<style lang="scss">
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
input {
  outline: none;
}
.btn {
  border: none !important;
  outline: none !important;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: bold;
  color: white;

  &-primary {
    background-color: #42b983;
  }
}
.body-wrapper {
  max-width: 900px;
  margin: 60px auto 0;
}
h1 {
  margin-bottom: 50px;
}
</style>
