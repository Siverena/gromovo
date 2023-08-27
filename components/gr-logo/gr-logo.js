import currentUrl from '@/utils/mixins/current-url.js';
export default {
  props: ['isFooter', 'mobMenu'],
  mixins: [currentUrl],
};
