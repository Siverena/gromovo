import { mapState } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';

export default {
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),
  },
};
