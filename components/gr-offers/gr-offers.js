import { mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
export default {
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
  },
};
