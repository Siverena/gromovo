<template>
  <div class="gr-gallery-slider">
    <div class="gr-gallery-slider__content">
      <div class="gr-gallery-slider__top">
        <div class="gr-gallery-slider__close" @click="closeSlider">
          <GrCross />
        </div>
      </div>
      <div class="gr-gallery-slider__center">
        <div class="gr-gallery-slider__image-wrapper">
          <img
            :src="getStaticImageUrl(images[currentImage])"
            class="gr-gallery-slider__image"
            alt=""
          />
        </div>
        <div class="gr-gallery-slider__nav">
          <div
            class="gr-gallery-slider__btn gr-gallery-slider__prev"
            @click="prevSlide"
          >
            <GrCheckMarkLeft />
          </div>
          <div
            class="gr-gallery-slider__btn gr-gallery-slider__next"
            @click="nextSlide"
          >
            <GrCheckMarkRight />
          </div>
        </div>
      </div>
      <div class="gr-gallery-slider__bottom">
        <div class="gr-gallery-slider__bottom-cont">
          <div
            class="gr-gallery-slider__small"
            v-for="(img, key) in thumbnails"
            :key="key"
            :class="{
              'gr-gallery-slider__small--active': img === images[currentImage],
            }"
            @click="setCurrentImage(key + firstThumbnailsIndex)"
          >
            <img :src="getStaticImageUrl(img)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./gr-gallery-slider.js"></script>
