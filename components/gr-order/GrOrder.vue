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
          <GrCross />
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
              <GrCheckInput v-if="agree" />
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
<script src="./gr-order.js"></script>
