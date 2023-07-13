<template>
  <header
    class="gr-header"
    :class="currentUrl === 'index' ? 'gr-header--index' : ''"
  >
    <div class="gr-header__top">
      <div
        class="container gr-header__top-cont"
        :class="
          currentUrl === 'index' || currentUrl === '404'
            ? 'gr-header__top-cont--index'
            : ''
        "
      >
        <div class="gr-header__logo">
          <GrLogo
            :class="
              currentUrl === 'index' || currentUrl === '404'
                ? 'gr-logo--index'
                : ''
            "
          />
        </div>
        <div class="gr-header__nav">
          <GrNav :currentUrl="currentUrl" />
        </div>

        <GrCallback
          :class="
            currentUrl === 'index' || currentUrl === '404'
              ? 'gr-callback--index'
              : ''
          "
        />

        <div class="gr-header__weather">
          <GrWeather
            v-if="currentUrl !== '404'"
            :class="currentUrl === 'index' ? 'gr-weather--index' : ''"
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

    <div class="gr-header__slider" v-if="currentUrl === 'index'">
      <GrMainSlider :currentUrl="currentUrl" />
    </div>
    <div class="gr-header__bottom"></div>
  </header>
</template>
<script>
export default {
  props: ['openMobMenu', 'currentUrl'],
  data() {
    return {};
  },

  beforeCreate() {},
  mounted() {},
};
</script>
