<template>
  <div class="gr-booking-check-data" v-if="showBookingForm">
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
        {{ getBookingInformation.seria }}
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
    <div
      class="gr-booking-check-data__item gr-booking-check-data__item--placement-full"
    >
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

    <div
      class="gr-booking-check-data__item gr-booking-check-data__item--placement"
    >
      <div class="gr-booking-check-data__name">Кол-во гостей</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.numberOfAdults }}
      </div>
    </div>

    <div
      class="gr-booking-check-data__item gr-booking-check-data__item--placement"
    >
      <div class="gr-booking-check-data__name">Кол-во детей 3-12 лет</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.numberOfTeenagers }}
      </div>
    </div>

    <div
      class="gr-booking-check-data__item gr-booking-check-data__item--placement"
    >
      <div class="gr-booking-check-data__name">Кол-во детей до 3 лет</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.numberOfchildren }}
      </div>
    </div>

    <div
      class="gr-booking-check-data__item gr-booking-check-data__item--placement"
    >
      <div class="gr-booking-check-data__name">Кол-во детей до 3 лет</div>
      <div class="gr-booking-check-data__value">
        {{ getBookingInformation.placesWithoutAccommodation }}
      </div>
    </div>
  </div>
</template>
<script>
import ending from '@/utils/mixins/ending';
import { mapState } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';
import { useCottagesStore } from '@/stores/cottagesStore.js';
import showBookingForm from '@/utils/mixins/show-booking-form';

export default {
  mixins: [ending, showBookingForm],
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),
    ...mapState(useCottagesStore, ['getCottage']),
  },
};
</script>
