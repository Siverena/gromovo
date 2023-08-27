import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
  props: ['mobMenu', 'header'],
  mixins: [currentUrl],
  computed: {},
  methods: {
    ...mapActions(useModalStore, ['openOrder']),
  },
};
