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
