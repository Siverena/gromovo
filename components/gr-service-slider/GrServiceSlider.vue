<template>
  <div class="gr-service-slider">
    <div class="gr-service-slider__slide">
      <img
        :src="getStaticImageUrl(slides[currentActive])"
        class="gr-service-slider__image"
        alt=""
      />
    </div>
    <div
      class="gr-service-slider__nav"
      :class="right ? 'gr-service-slider__nav--right ' : ''"
    >
      <GrBtnSlidesPrev @click="prevSlide" />
      <GrBtnSlidesNext @click="nextSlide" />
      <div class="gr-service-slider__count">
        {{ currentActive + 1 }}/ {{ slideCount }}
      </div>
    </div>
  </div>
</template>
<script src="./gr-service-slider.js"></script>
