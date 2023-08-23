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
<script>
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  props: ['slides', 'right'],
  data() {
    return {
      currentActive: 0,
    };
  },
  mixins: [imageUrl],
  computed: {
    slideCount() {
      return this.slides.length;
    },
  },
  methods: {
    nextSlide() {
      if (this.slides.length - 1 === this.currentActive) {
        this.currentActive = 0;
      } else {
        this.currentActive = this.currentActive + 1;
      }
    },
    prevSlide() {
      if (this.currentActive === 0) {
        this.currentActive = this.slides.length - 1;
      } else {
        this.currentActive = this.currentActive - 1;
      }
    },
  },
};
</script>
