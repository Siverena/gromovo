<template>
  <ClientOnly>
    <header
      v-if="widthComputed"
      class="gr-header"
      :class="{
        'gr-header--index': currentUrl === 'index',
      }"
    >
      <div class="gr-header__top">
        <div
          class="container gr-header__top-cont"
          :class="{
            'gr-header__top-cont--index': currentUrl === 'index',
            'gr-header__top-cont--error': !currentUrl,
          }"
        >
          <div class="gr-header__logo">
            <GrLogo />
          </div>
          <div class="gr-header__nav">
            <GrNav />
          </div>

          <GrCallback :header="true" />

          <div class="gr-header__weather">
            <GrWeather />
          </div>
          <div
            @click.stop="openMobMenu"
            class="gr-header__nav-open"
            :class="{
              'gr-header__nav-open--index': currentUrl === 'index',
              'gr-header__nav-open--error': !currentUrl,
            }"
          >
            <GrBurger />
          </div>
        </div>
      </div>

      <div
        class="gr-header__slider"
        v-if="currentUrl === 'index' && widthComputed"
        :class="!isDesktopVersion ? 'container' : ''"
      >
        <GrMainSlider />
      </div>
      <div
        v-if="currentUrl !== 'cottage-id'"
        class="gr-header__bottom"
        :class="{
          'gr-header__bottom--index': currentUrl === 'index',
        }"
      >
        <div class="container">
          <GrPickUp />
        </div>
      </div>
    </header>
  </ClientOnly>
</template>
<script src="./gr-header.js"></script>
