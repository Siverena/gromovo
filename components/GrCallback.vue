<template>
  <div
    class="gr-callback"
    :class="{
      'gr-callback--index': $route.name === 'index' && !mobMenu,
      'gr-callback--error': !$route.name,
      'gr-callback--mob-menu': mobMenu,
      'gr-callback--header': header,
    }"
  >
    <a
      class="gr-callback__phone"
      :class="{
        'gr-callback__phone--mob-menu': mobMenu,
        'gr-callback__phone--header': header,
      }"
      href="tel:+78126434445"
      >+7(812) 643-44-45</a
    >
    <div
      class="gr-callback__link gr-link gr-link--green"
      :class="{
        'gr-callback__link--mob-menu': mobMenu,
        'gr-link--green': mobMenu,
        'gr-link-white': currentPage === 'index' && !mobMenu,
        'gr-callback__link--header': header,
      }"
      @click="openOrder(false)"
    >
      Заказать обратный звонок
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  props: ['mobMenu', 'header'],
  computed: {
    currentPage() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(useModalStore, ['openOrder']),
  },
};
</script>
