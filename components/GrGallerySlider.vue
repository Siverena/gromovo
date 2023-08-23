<template>
  <div class="gr-gallery-slider">
    <div class="gr-gallery-slider__content">
      <div class="gr-gallery-slider__top">
        <div class="gr-gallery-slider__close" @click="closeSlider">
          <svg
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M59.6883 16.7975L40.0008 36.485L20.3133 16.7975C19.7916 16.3291 19.2058 16.095 18.5558 16.095C17.9058 16.095 17.3324 16.3425 16.8358 16.8375C16.3391 17.3325 16.0916 17.9058 16.0933 18.5575C16.0949 19.2091 16.3291 19.795 16.7958 20.315L36.4833 40.0025L16.7958 59.69C16.1191 60.3666 15.8974 61.1741 16.1308 62.1125C16.3641 63.0508 16.9374 63.6366 17.8508 63.87C18.7641 64.1033 19.5841 63.8816 20.3108 63.205L39.9983 43.5175L59.6858 63.205C60.2074 63.6733 60.7933 63.9075 61.4433 63.9075C62.0933 63.9075 62.6666 63.66 63.1633 63.165C63.6599 62.67 63.9074 62.0966 63.9058 61.445C63.9041 60.7933 63.6699 60.2075 63.2033 59.6875L43.5158 40L63.2033 20.3125C63.8799 19.6358 64.1016 18.8283 63.8683 17.89C63.6349 16.9516 63.0491 16.3658 62.1108 16.1325C61.1724 15.8991 60.3649 16.1208 59.6883 16.7975V16.7975Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div class="gr-gallery-slider__center">
        <div class="gr-gallery-slider__image-wrapper">
          <img :src="imageSrc" class="gr-gallery-slider__image" alt="" />
        </div>
        <div class="gr-gallery-slider__nav">
          <div
            class="gr-gallery-slider__btn gr-gallery-slider__prev"
            @click="prevSlide"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.4338 85.6335L62.427 85.6274L62.4206 85.6209L30.0982 52.3235C30.0978 52.3231 30.0974 52.3227 30.097 52.3223C29.4643 51.689 29.1469 50.9086 29.1469 49.9967C29.1469 49.0849 29.4643 48.3045 30.097 47.6712C30.0974 47.6708 30.0978 47.6704 30.0982 47.67L62.4206 14.3726L62.427 14.3661L62.4338 14.36C63.0649 13.7986 63.8073 13.5155 64.65 13.5155C65.4927 13.5155 66.2351 13.7986 66.8662 14.36L66.95 14.4346V14.4556C67.5293 15.129 67.8281 15.8791 67.8281 16.6999C67.8281 17.5512 67.5064 18.2966 66.8779 18.9255C66.8775 18.9259 66.8772 18.9263 66.8768 18.9267L36.5804 49.9999L66.8768 81.0731C66.8772 81.0735 66.8776 81.0739 66.8779 81.0743C67.5064 81.7032 67.8281 82.4486 67.8281 83.2999C67.8281 84.1517 67.506 84.8975 66.8768 85.5266C66.2476 86.1558 65.5018 86.478 64.65 86.478C63.8073 86.478 63.0649 86.195 62.4338 85.6335Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          </div>
          <div
            class="gr-gallery-slider__btn gr-gallery-slider__next"
            @click="nextSlide"
          >
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5662 85.6335L37.573 85.6274L37.5794 85.6209L69.9018 52.3235C69.9022 52.3231 69.9026 52.3227 69.903 52.3223C70.5357 51.689 70.8531 50.9086 70.8531 49.9967C70.8531 49.0849 70.5357 48.3045 69.903 47.6712C69.9026 47.6708 69.9022 47.6704 69.9018 47.67L37.5794 14.3726L37.573 14.3661L37.5662 14.36C36.9351 13.7986 36.1927 13.5155 35.35 13.5155C34.5073 13.5155 33.7649 13.7986 33.1338 14.36L33.05 14.4346V14.4556C32.4707 15.129 32.1719 15.8791 32.1719 16.6999C32.1719 17.5512 32.4936 18.2966 33.1221 18.9255C33.1225 18.9259 33.1228 18.9263 33.1232 18.9267L63.4196 49.9999L33.1232 81.0731C33.1228 81.0735 33.1224 81.0739 33.1221 81.0743C32.4936 81.7032 32.1719 82.4486 32.1719 83.2999C32.1719 84.1517 32.494 84.8975 33.1232 85.5266C33.7524 86.1558 34.4982 86.478 35.35 86.478C36.1927 86.478 36.9351 86.195 37.5662 85.6335Z"
                fill="white"
                stroke="white"
                stroke-width="0.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="gr-gallery-slider__bottom">
        <div class="gr-gallery-slider__bottom-cont">
          <div
            class="gr-gallery-slider__small"
            v-for="(img, key) in thumbnails"
            :key="key"
            :class="
              img === images[currentImage]
                ? 'gr-gallery-slider__small--active'
                : ''
            "
            @click="setCurrentImage(key + firstThumbnailsIndex)"
          >
            <img :src="getStaticImageUrl(img)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  props: [
    'currentImage',
    'images',
    'closeSlider',
    'nextSlide',
    'prevSlide',
    'setCurrentImage',
    'firstThumbnailsIndex',
    'thumbnails',
  ],
  mixins: [imageUrl],
  computed: {
    imageSrc() {
      const srctmp = this.images[this.currentImage];
      const src = this.getStaticImageUrl(srctmp);
      return src;
    },
  },
};
</script>
