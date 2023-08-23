<template>
  <Head>
    <Title>Бронирование. Шаг 3 | Громово парк</Title>
  </Head>
  <div class="container" v-if="showBookingForm">
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

    <div class="gr-booking-1__attention">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V10C9 10.2652 9.10536 10.5196 9.2929 10.7071C9.48043 10.8946 9.73479 11 10 11C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5ZM10.92 13.62C10.8981 13.5563 10.8679 13.4957 10.83 13.44L10.71 13.29C10.5694 13.1512 10.3908 13.0572 10.1968 13.0199C10.0028 12.9825 9.80212 13.0034 9.62 13.08C9.49882 13.1306 9.38721 13.2017 9.29 13.29C9.19732 13.3834 9.124 13.4943 9.07423 13.6161C9.02447 13.7379 8.99924 13.8684 9 14C9.00159 14.1307 9.02876 14.2598 9.08 14.38C9.12492 14.5041 9.19657 14.6168 9.28989 14.7101C9.38321 14.8034 9.49591 14.8751 9.62 14.92C9.73971 14.9729 9.86913 15.0002 10 15.0002C10.1309 15.0002 10.2603 14.9729 10.38 14.92C10.5041 14.8751 10.6168 14.8034 10.7101 14.7101C10.8034 14.6168 10.8751 14.5041 10.92 14.38C10.9712 14.2598 10.9984 14.1307 11 14C11.0049 13.9334 11.0049 13.8666 11 13.8C10.9828 13.7362 10.9558 13.6755 10.92 13.62ZM10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18Z"
          fill="#E87B0E"
        />
      </svg>

      <p>
        Клиент должен своевременно проинформировать менеджера Громово Парк о
        произведенной оплате. В случае, если подтверждения оплаты услуг
        своевременно не поступает, менеджер вправе аннулировать произведенное
        бронирование.
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';
import { useCottagesStore } from '@/stores/cottagesStore.js';
import ending from '@/utils/mixins/ending';
import formatted from '@/utils/mixins/formatted.js';
import showBookingForm from '@/utils/mixins/show-booking-form';
export default {
  mixins: [ending, formatted, showBookingForm],
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),
    ...mapState(useCottagesStore, ['getCottage']),
  },
  created() {
    if (!this.showBookingForm) {
      this.$router.push('/cottages');
    }
  },
};
</script>
