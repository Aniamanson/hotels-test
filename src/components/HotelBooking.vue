<template>
  <div class="hotel__form">
    <p class="hotel__form-title">Оставьте заявку на бронирование отеля</p>
    <form class="form__booking" @submit.prevent="onSubmit">
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Email</span>
          <input
            type="email"
            placeholder="Введите ваш email"
            name="email"
            class="form__input input"
            v-model.trim="form.email"
            required
          />
          <span class="form__error"></span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Имя</span>
          <input
            type="text"
            placeholder="Введите ваше имя"
            name="name"
            class="form__input input"
            v-model="form.name"
            required
          />
          <span class="form__error"></span>
        </label>
      </div>
      <div class="form__item">
        <label class="form__label">
          <span class="form__label-title">Номер телефона</span>
          <input
            type="number"
            placeholder="Введите номер телефона"
            name="tel"
            class="form__input input"
            v-model.trim="form.tel"
            required
          />
          <span class="form__error"></span>
        </label>
      </div>
      <input type="hidden" name="hotel_id" :value="hotelId" />
      <button type="submit" class="btn btn-primary form__btn--submit">Забронировать отель</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import { PersonData } from '@/types';
// import errors from '@/data/errors';

export default Vue.extend({
  name: 'HotelBooking',
  props: {
    hotelId: Number,
  },
  data: () => ({
    form: {
      email: '',
      name: '',
      tel: '',
    },
  }),
  methods: {
    onSubmit(e: { target: HTMLFormElement }): void {
      const form = e.target;

      if (this.form.name !== '' && this.form.email !== '' && this.form.tel !== '') {
        axios
          .post('/#', {
            body: new FormData(form),
          })
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });

        const formInfo: PersonData = this.form;
        formInfo.hotelId = this.hotelId;
        this.$emit('showSuccesModal', formInfo);
      }
    },
  },
});
</script>

<style lang="scss">
.form {
  &__booking {
    margin-top: 30px;
  }
  &__item {
    margin-top: 34px;
  }
  &__label {
    display: flex;
    flex-direction: column;

    &-title {
      font-weight: 500;
      color: #222;
      padding-bottom: 6px;
      text-align: left;
    }
  }
  &__input {
    background: #fff;
    border: 1px solid #dbe2ea;
    border-radius: 6px;
    padding: 16px;
    width: 100%;
    text-align: left;
    font-size: 16px;

    &::placeholder {
      text-align: left;
    }
  }
  &__btn--submit {
    margin-top: 30px;
  }
  &__error {
    position: absolute;
    font-size: 14px;
    line-height: 18px;
    color: red;
    bottom: -25px;
  }
}
</style>
