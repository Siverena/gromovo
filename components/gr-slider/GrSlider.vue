<template>
  <div class="gr-slider">
    <div class="gr-slider__slide">
      <img
        :src="getStaticImageUrl(slides[currentActive])"
        class="gr-slider__image"
        alt=""
      />
    </div>
    <div class="gr-slider__nav" :class="right ? 'gr-slider__nav--right ' : ''">
      <GrBtnSlidesPrev @click="prevSlide" />
      <GrBtnSlidesNext @click="nextSlide" />
      <div class="gr-slider__count">
        {{ currentActive + 1 }}/ {{ slideCount }}
      </div>
    </div>
  </div>
</template>
<script src="./gr-slider.js"></script>
