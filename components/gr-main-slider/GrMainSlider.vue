<template>
  <div class="gr-main-slider">
    <div class="gr-main-slider__list">
      <div
        class="gr-main-slider__slide"
        :class="{
          'gr-main-slider__slide--active': key === currentActive,
        }"
        v-for="(slide, key) in slides"
        :key="key"
      >
        <img class="gr-main-slider__image" :src="getImageUrl(slide.src)" />
        <div class="gr-main-slider__text">
          <p>{{ slide.text1 }}</p>
          <span>{{ slide.text2 }}</span>
        </div>
      </div>
    </div>

    <div class="gr-main-slider__nav-buttons">
      <GrBtnSlidesPrev
        class="gr-main-slider__nav-button gr-main-slider__nav-button--prev"
        @click="prevSlide"
      />
      <ul class="gr-main-slider__dots">
        <li
          v-for="(dots, key) in dotsCount"
          :key="key"
          class="gr-main-slider__dot"
          :class="key === currentActive ? 'gr-main-slider__dot--current' : ''"
        >
          <button @click="setSlide(key)" type="button">1</button>
        </li>
      </ul>
      <GrBtnSlidesNext
        class="gr-main-slider__nav-button gr-main-slider__nav-button--next"
        @click="nextSlide"
      />
    </div>
  </div>
</template>
<script src="./gr-main-slider.js"></script>
