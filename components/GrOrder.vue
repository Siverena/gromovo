<template>
  <div class="gr-order__layout">
    <div class="gr-order">
      <div class="gr-order__header">
        <div class="gr-order__title">
          {{
            getIsSubscription ? 'Подписаться на рассылку' : 'Заказать звонок'
          }}
        </div>
        <div class="gr-order__close" @click="closeOrder">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9375 3.85949L7.99996 7.79699L4.06246 3.85949C3.95812 3.76582 3.84096 3.71899 3.71096 3.71899C3.58096 3.71899 3.46629 3.76849 3.36696 3.86749C3.26762 3.96649 3.21812 4.08116 3.21846 4.21149C3.21879 4.34182 3.26562 4.45899 3.35896 4.56299L7.29646 8.50049L3.35896 12.438C3.22362 12.5733 3.17929 12.7348 3.22596 12.9225C3.27262 13.1102 3.38729 13.2273 3.56996 13.274C3.75262 13.3207 3.91662 13.2763 4.06196 13.141L7.99946 9.20349L11.937 13.141C12.0413 13.2347 12.1585 13.2815 12.2885 13.2815C12.4185 13.2815 12.5331 13.232 12.6325 13.133C12.7318 13.034 12.7813 12.9193 12.781 12.789C12.7806 12.6587 12.7338 12.5415 12.6405 12.4375L8.70296 8.49999L12.6405 4.56249C12.7758 4.42716 12.8201 4.26566 12.7735 4.07799C12.7268 3.89032 12.6096 3.77316 12.422 3.72649C12.2343 3.67982 12.0728 3.72416 11.9375 3.85949Z"
              fill="#010101"
            />
          </svg>
        </div>
      </div>
      <form
        class="gr-order__content"
        @submit.prevent="submitForm"
        novalidate="true"
      >
        <template v-for="(field, key) in fields" :key="key">
          <div class="gr-order__field" v-if="fieldsVisibility[field.name]">
            <label class="gr-order__label" :for="field.name"
              >{{ field.label
              }}<span class="gr-order__star" v-if="field.required"
                >*</span
              ></label
            >
            <InputMask
              v-if="field.mask"
              class="gr-order__input"
              :class="{
                'gr-order__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              :mask="field.mask"
              :unmask="true"
              :autoClear="false"
              :unstyled="true"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <input
              v-else
              class="gr-order__input"
              :class="{
                'gr-order__input--error': field.error,
              }"
              :type="field.type"
              :name="field.name"
              :id="field.name"
              v-model.trim="field.value"
              :placeholder="field.placeholder"
              @focusout="validateField(field)"
            />
            <span class="gr-order__error" v-if="field.error">{{
              field.error
            }}</span>
          </div>
        </template>
        <button class="gr-btn gr-btn--green gr-order__btn">
          {{ getIsSubscription ? 'Подписаться' : 'Отправить' }}
        </button>
        <div class="gr-order__field gr-order__field--agree">
          <label for="agree" class="gr-order__label gr-order__label--agree">
            <div
              class="gr-order__checkbox"
              :class="
                !agree && agreementError ? 'gr-order__checkbox--error' : ''
              "
            >
              <svg
                v-if="agree"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.37233 5.93846L1.10564 3.67177C1.0126 3.57873 0.901572 3.55008 0.772551 3.58583C0.64353 3.62158 0.562978 3.70213 0.530894 3.82749C0.498811 3.95284 0.52929 4.06559 0.622332 4.16574L3.37233 6.91574L8.87233 1.41574C8.93673 1.34401 8.96721 1.26162 8.96377 1.16858C8.96033 1.07554 8.92447 0.994985 8.85618 0.926923C8.78788 0.85886 8.70905 0.824829 8.61968 0.824829C8.5303 0.824829 8.44975 0.857027 8.37802 0.921423L3.37233 5.93846Z"
                  fill="#010101"
                />
              </svg>
            </div>
            <div
              class="gr-order__label-text"
              :class="
                !agree && agreementError ? 'gr-order__label-text--error' : ''
              "
            >
              <span>Согласен с </span>
              <NuxtLink to="/agree" target="_blank" class="gr-order__agree"
                >политикой обработки персональных данных</NuxtLink
              >
            </div>
          </label>
          <input type="checkbox" id="agree" name="agree" v-model="agree" />
        </div>
        <p class="gr-order__info">
          Мы свяжемся с вами в рабочее время пн-пт с 09:00 до 18:00
        </p>
        <div class="gr-order__attention">
          <span class="gr-order__star">*</span>Обязательное поле
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  props: ['callback', 'distribution'],
  data() {
    return {
      agree: false,
      agreementError: false,
      validationSuccess: true,
      fields: [
        {
          name: 'name',
          label: 'Имя',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Имя',
          error: '',
        },
        {
          name: 'tel',
          label: 'Телефон',
          value: '',
          required: true,
          type: 'tel',
          placeholder: '+7(___) ___-__-__',
          mask: '+7 (999) 999-99-99',
          error: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          value: '',
          required: true,
          type: 'email',
          mask: '',
          placeholder: 'example@mail.ru',
          error: '',
        },
      ],
      formData: {},
    };
  },

  computed: {
    ...mapState(useModalStore, ['getIsShowOrder', 'getIsSubscription']),
    fieldsVisibility() {
      return {
        name: true,
        tel: !this.getIsSubscription,
        email: this.getIsSubscription,
      };
    },
  },
  methods: {
    ...mapActions(useModalStore, ['closeOrder']),
    validateName() {
      if (this.name.length < 0) {
        this.errors.name = 'Поле ';
      }
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateTel(tel) {
      return tel.length === 10;
    },
    validateField(field) {
      field.error = '';
      if (
        this.fieldsVisibility[field.name] &&
        field.required &&
        field.value.length == 0
      ) {
        field.error = `Заполните поле ${field.label}`;
        return false;
      }
      if (
        field.type === 'email' &&
        field.value.length > 0 &&
        !this.validateEmail(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }
      if (
        field.type === 'tel' &&
        field.value.length > 0 &&
        !this.validateTel(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }
      return true;
    },
    checkForm() {
      this.validationSuccess = true;
      this.agreementError = false;
      this.fields.forEach((field) => {
        if (!this.validateField(field)) {
          this.validationSuccess = false;
        }
      });
      if (!this.agree) {
        this.validationSuccess = false;
        this.agreementError = true;
      }
    },
    submitForm() {
      this.checkForm();
      if (this.validationSuccess) {
        this.fields.forEach((field) => {
          if (this.fieldsVisibility[field.name]) {
            this.formData[field.name] = field.value;
          }
        });
        console.log(this.data);
      }
    },
  },
};
</script>
