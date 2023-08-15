<template>
  <div class="gr-service-slider">
    <div class="gr-service-slider__slide">
      <img
        :src="getImageUrl(slides[currentActive])"
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
export default {
  props: ['slides', 'right'],
  data() {
    return {
      currentActive: 0,
    };
  },
  computed: {
    slideCount() {
      return this.slides.length;
    },
  },
  methods: {
    getImageUrl(src) {
      // const url = new URL(`../assets/img/${src}`, import.meta.url).href;
      // return url;
      return `/assets/img/${src}`;
    },
    nextSlide() {
      //   this.activeRemove();
      if (this.slides.length - 1 === this.currentActive) {
        this.currentActive = 0;
      } else {
        this.currentActive = this.currentActive + 1;
      }
      //   this.activeAdd();
    },
    prevSlide() {
      //   this.activeRemove();
      if (this.currentActive === 0) {
        this.currentActive = this.slides.length - 1;
      } else {
        this.currentActive = this.currentActive - 1;
      }
      //   this.activeAdd();
    },
  },
};
</script>
