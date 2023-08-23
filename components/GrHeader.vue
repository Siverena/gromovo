<template>
  <header
    class="gr-header"
    :class="{
      'gr-header--index': currentPage === 'index',
    }"
  >
    <div class="gr-header__top">
      <div
        class="container gr-header__top-cont"
        :class="{
          'gr-header__top-cont--index': currentPage === 'index',
          'gr-header__top-cont--error': !currentPage,
        }"
      >
        <div class="gr-header__logo">
          <GrLogo />
        </div>
        <div class="gr-header__nav">
          <GrNav />
        </div>

        <GrCallback v-if="!isMobileVersion" :header="true" />

        <div class="gr-header__weather">
          <GrWeather />
        </div>
        <div
          @click.stop="openMobMenu"
          class="gr-header__nav-open"
          :class="{
            'gr-header__nav-open--index': currentPage === 'index',
            'gr-header__nav-open--error': !currentPage,
          }"
        >
          <svg
            width="41"
            height="39"
            viewBox="0 0 41 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="7.5" width="41" height="4" rx="2" fill="#010101" />
            <rect y="17.5" width="41" height="4" rx="2" fill="#010101" />
            <rect y="27.5" width="41" height="4" rx="2" fill="#010101" />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="gr-header__slider"
      v-if="currentPage === 'index' && widthComputed"
      :class="{ container: !isDesktopVersion }"
    >
      <GrMainSlider />
    </div>
    <div
      v-if="currentPage !== 'cottage-id'"
      class="gr-header__bottom"
      :class="{
        'gr-header__bottom--index': currentPage === 'index',
      }"
    >
      <div class="container">
        <GrPickUp :page="'index'" :btnText="'Подобрать'" />
      </div>
    </div>
  </header>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  computed: {
    ...mapState(useAdaptiveStore, [
      'isDesktopVersion',
      'widthComputed',
      'isMobileVersion',
    ]),
    currentPage() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(useModalStore, ['openMobMenu']),
  },
};
</script>
