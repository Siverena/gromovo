<template>
  <div class="gr-booking-check-data" v-if="show">
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">ФИО</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.name }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Телефон</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.phone }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">E-mail</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.email }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Серия и номер паспорта</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.email }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Кем выдан</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.issued }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Когда выдан</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.whenIssued }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Адрес регистрации</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.address }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Дата рождения</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.birth ? getBookingInformation.birth : '-' }}
      </div>
    </div>
    <div class="gr-booking-check-data__item">
      <div class="gr-booking-check-data__name">Размещение</div>
      <div class="gr-booking-check-data__value">
        {{
          `${getBookingInformation.numberOfAdults}  ${getEndingGuests(
            getBookingInformation.numberOfAdults
          )}`
        }}
        {{
          getBookingInformation.numberOfTeenagers
            ? `, ${getBookingInformation.numberOfTeenagers} ${getEndingChildren(
                getBookingInformation.numberOfTeenagers
              )} 3-12 лет`
            : ''
        }}
        {{
          getBookingInformation.numberOfchildren
            ? `, ${getBookingInformation.numberOfchildren} ${getEndingChildren(
                getBookingInformation.numberOfchildren
              )} до 3-х лет`
            : ''
        }}
        {{
          getBookingInformation.placesWithoutAccommodation
            ? `, ${
                getBookingInformation.placesWithoutAccommodation
              }  ${getEndingPlace(
                getBookingInformation.placesWithoutAccommodation
              )} мест без размещения`
            : ''
        }}
      </div>
    </div>
  </div>
</template>
<script>
import ending from '@/utils/mixins/ending';
import { mapState } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';
import { useCottagesStore } from '@/stores/cottagesStore.js';

export default {
  mixins: [ending],
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),
    ...mapState(useCottagesStore, ['getCottage']),
    show() {
      if (!this.getBookingInformation?.dateStart) {
        return false;
      }
      return true;
    },
  },
};
</script>
