<template>
  <Head>
    <Title>Бронирование. Шаг 3 | Громово парк</Title>
  </Head>
  <div class="container">
    <GrPageTitles>
      <template v-slot:h1>Бронирование. Шаг 3</template>
    </GrPageTitles>
    <GrStepsHeader />
    <div class="gr-booking-1__nav">
      <NuxtLink
        to="/booking/step-1"
        class="gr-booking-1__link gr-booking-1__link--preм"
        ><svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.34945 2.64183L9.34262 2.64791L9.33625 2.65447L4.16543 7.98076C4.02666 8.12022 3.95312 8.29494 3.95312 8.49211C3.95312 8.68903 4.02617 8.8647 4.15786 9.01092L4.15773 9.01104L4.16424 9.01774L9.33624 14.3457L9.34262 14.3523L9.34945 14.3584C9.48874 14.4823 9.65716 14.5466 9.84363 14.5466C10.0392 14.5466 10.211 14.4703 10.3484 14.3329C10.4858 14.1954 10.5621 14.0237 10.5621 13.8281C10.5621 13.6331 10.4863 13.4618 10.3496 13.3246L5.64579 8.50011L10.3496 3.67568C10.4863 3.53844 10.5621 3.36711 10.5621 3.17211C10.5621 2.97654 10.4858 2.80478 10.3484 2.66734C10.211 2.52989 10.0392 2.45361 9.84363 2.45361C9.65716 2.45361 9.48874 2.51791 9.34945 2.64183Z"
            fill="#010101"
            stroke="#010101"
            stroke-width="0.5"
          />
        </svg>

        <span>К вводу данных</span>
      </NuxtLink>
      <p class="gr-booking-1__step-name">Оплата</p>
      <NuxtLink
        to="/payment "
        class="gr-booking-1__link gr-booking-1__link--next"
      >
        <span>Оплата</span>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.15017 14.3584L6.15701 14.3523L6.16338 14.3458L11.3342 9.019C11.4751 8.87742 11.5465 8.69915 11.5465 8.49964C11.5465 8.30013 11.4751 8.12185 11.3342 7.98028L6.16338 2.65351L6.15701 2.64694L6.15017 2.64086C6.01088 2.51693 5.84247 2.45264 5.656 2.45264C5.46953 2.45264 5.30112 2.51693 5.16183 2.64086L5.078 2.71544V2.74097C4.98813 2.86758 4.9375 3.01252 4.9375 3.17214C4.9375 3.36713 5.01333 3.53846 5.15001 3.6757L9.85384 8.50014L5.14998 13.3246C5.01332 13.4618 4.9375 13.6332 4.9375 13.8281C4.9375 14.0237 5.01378 14.1955 5.15122 14.3329C5.28867 14.4704 5.46043 14.5466 5.656 14.5466C5.84247 14.5466 6.01088 14.4823 6.15017 14.3584Z"
            fill="#010101"
            stroke="#010101"
            stroke-width="0.5"
          />
        </svg>
      </NuxtLink>
    </div>

    <div class="gr-booking-payment">
      <div class="gr-booking-payment__method">
        <div class="gr-booking-payment__left">
          <div class="gr-booking-payment__payment-system">
            Банковской картой
            <p>Visa, MasterCard, МИР</p>
          </div>
          <div class="gr-booking-payment__info">
            Оплачивается вся сумма брони
          </div>
        </div>
        <div class="gr-booking-payment__right">
          <div class="gr-booking-1__summa">
            Стоимость за {{ getBookingInformation.nightCount }}
            {{ getEnding(getBookingInformation.nightCount) }}
            <span>{{ formattedPrice(getBookingInformation.summa) }}</span>
          </div>
          <button class="gr-btn gr-btn--green">Оплатить</button>
        </div>
      </div>

      <div class="gr-booking-payment__method">
        <div class="gr-booking-payment__left">
          <div class="gr-booking-payment__payment-system">
            Через терминал ПСКБ
          </div>
          <div class="gr-booking-payment__info">
            Оплачивается вся сумма брони
          </div>
        </div>
        <div class="gr-booking-payment__right">
          <div class="gr-booking-1__summa">
            Стоимость за {{ getBookingInformation.nightCount }}
            {{ getEnding(getBookingInformation.nightCount) }}
            <span>{{ formattedPrice(getBookingInformation.summa) }}</span>
          </div>
          <button class="gr-btn gr-btn--green">Оплатить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';

import ending from '@/utils/mixins/ending';
import formatted from '@/utils/mixins/formatted.js';
export default {
  mixins: [ending, formatted],
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),

    show() {
      if (!this.getBookingInformation?.dateStart) {
        return false;
      }
      return true;
    },
  },
};
</script>
