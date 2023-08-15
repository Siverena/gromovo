<template>
  <header
    class="gr-header"
    :class="currentPage === 'index' ? 'gr-header--index' : ''"
  >
    <div class="gr-header__top">
      <div
        class="container gr-header__top-cont"
        :class="
          currentPage === 'index' || !currentPage
            ? 'gr-header__top-cont--index'
            : ''
        "
      >
        <div class="gr-header__logo">
          <GrLogo
            :class="
              currentPage === 'index' || !currentPage ? 'gr-logo--index' : ''
            "
          />
        </div>
        <div class="gr-header__nav">
          <GrNav />
        </div>

        <GrCallback
          :class="
            currentPage === 'index' || !currentPage ? 'gr-callback--index' : ''
          "
        />

        <div class="gr-header__weather">
          <GrWeather
            v-if="currentPage"
            :class="currentPage === 'index' ? 'gr-weather--index' : ''"
          />
        </div>
        <div @click="openMobMenu" class="gr-header__nav-open">
          <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="7.5" width="41" height="4" rx="2" />
            <rect y="17.5" width="41" height="4" rx="2" />
            <rect y="27.5" width="41" height="4" rx="2" />
          </svg>
        </div>
      </div>
    </div>

    <div
      class="gr-header__slider"
      v-if="currentPage === 'index' && widthComputed"
      :class="!isDesktopVersion ? 'container' : ''"
    >
      <GrMainSlider />
    </div>
    <div
      v-if="currentPage !== 'cottage-id'"
      class="gr-header__bottom"
      :class="currentPage === 'index' ? 'gr-header__bottom--index' : ''"
    >
      <div class="container">
        <GrPickUp :page="'index'" :btnText="'Подобрать'" />
      </div>
    </div>
  </header>
</template>
<script>
import { mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
export default {
  props: ['openMobMenu'],
  data() {
    return {};
  },
  computed: {
    ...mapState(useAdaptiveStore, ['isDesktopVersion', 'widthComputed']),
    currentPage() {
      return this.$route.name;
    },
  },
  methods: {},
  mounted() {},
};
</script>
