<template>
  <div class="modal__inner">
    <h2 class="modal__title">Спасибо за заявку!</h2>
    <p class="modal__text">
      Через несколько минут с Вами свяжется наш менеджер для подтверждения бронирования.
    </p>
    <div class="modal__info">
      <button class="btn btn-primary modal__info-btn" @click.prevent="cancelled">Закрыть</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Modal',
  props: {
    openTarget: String,
  },
  data: () => ({}),
  computed: {},
  methods: {
    cancelled() {
      this.$emit('cancelled');
    },
  },
});
</script>

<style lang="scss" scoped>
.modal {
  &__title {
    padding: 40px 30px 20px;
    margin: 0 -30px;
    background-color: #42b983;
    color: white;
    font-weight: bold;
  }

  &__text {
    font-size: 16px;
    margin-top: 30px;
  }
}

.btn {
  // border: none !important;
  outline: none !important;
  width: 100%;
  max-width: 200px;
  height: 56px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 16px;
  font-weight: bold;

  &__simple {
    background-color: #42b983;
    color: white;
    border-radius: 10px;
    margin: 20px auto 0;
    &:hover {
      background-color: darken($color: #42b983, $amount: 10);
    }
  }

  .modal__info-btn {
    margin: 30px auto 0;
  }
}
</style>
