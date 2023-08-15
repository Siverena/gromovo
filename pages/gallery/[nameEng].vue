<template>
  <div class="container">
    <section class="gr-gallery" v-if="!isLoading && widthComputed">
      <GrPageTitles class="gr-gallery__titles">
        <template v-slot:h1>{{ information.name }}</template>
        <template v-slot:h2> {{ information.title }}</template>
      </GrPageTitles>
      <img
        alt=""
        v-for="(img, key) in imgsss"
        :key="key"
        class="gr-gallery__image"
        :src="getImageUrl(img.src)"
        @click="showSlider(key)"
      />
    </section>
    <GrGallerySlider
      v-if="isShowSlider"
      :currentImage="currentImage"
      :images="images"
      :closeSlider="closeSlider"
      :nextSlide="nextSlide"
      :prevSlide="prevSlide"
      :setCurrentImage="setCurrentImage"
      :firstThumbnailsIndex="firstThumbnailsIndex"
      :thumbnails="thumbnails"
    />
  </div>
</template>
<script>
import gallery from '@/stores/data/d-gallery.js';
import { mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';

export default {
  data() {
    return {
      isLoading: true,
      isShowSlider: false,
      informations: [],
      currentImage: 0,
      images: [],
      thumbnails: [],
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, [
      'isMobileVersion',
      'isTabVersion',
      'isLaptopVersion',
      'widthComputed',
    ]),
    body() {
      return document.querySelector('body');
    },
    information() {
      return gallery.find((el) => el.nameEng === this.$route.params.nameEng);
    },
    imgsss() {
      const tmp = [];
      this.images.forEach((element, index) => {
        const objTmp = {};
        objTmp.id = index;
        objTmp.src = element;
        tmp.push(objTmp);
      });
      return tmp;
    },
    imagesCount() {
      if (this.isTabVersion || this.isLaptopVersion || this.isMobileVersion) {
        return 4;
      }
      return 5; //desktop
    },
    firstThumbnailsIndex() {
      return this.currentImage - Math.floor((this.imagesCount - 1) / 2);
    },
    lastThumbnailsIndex() {
      return this.currentImage + Math.ceil((this.imagesCount - 1) / 2);
    },
  },
  watch: {
    currentImage() {
      this.getThumbnails();
    },
    imagesCount() {
      this.getThumbnails();
    },
  },
  methods: {
    async loadData() {
      // this.informations = gallery[this.$route.params.nameEng];
      this.informations = gallery.find(
        (el) => el.nameEng === this.$route.params.nameEng
      );
      this.images = gallery.find(
        (el) => el.nameEng === this.$route.params.nameEng
      ).images;
      this.isLoading = false;
    },
    getImageUrl(src) {
      // const url = new URL(`../../assets/img/${src}`, import.meta.url).href;
      // return url;
      return `/assets/img/${src}`;
    },
    showSlider(key) {
      this.isShowSlider = true;
      this.body.style.overflow = 'hidden';
      this.currentImage = key;
      this.getThumbnails();
    },
    closeSlider() {
      this.isShowSlider = false;
      this.body.style.overflow = 'scroll';
    },
    nextSlide() {
      if (this.currentImage === this.images.length - 1) {
        this.currentImage = 0;
      } else {
        ++this.currentImage;
      }
    },
    prevSlide() {
      if (this.currentImage === 0) {
        this.currentImage = this.images.length - 1;
      } else {
        --this.currentImage;
      }
    },
    setCurrentImage(number) {
      if (number > this.images.length - 1) {
        number = number - this.images.length;
      }
      if (number < 0) {
        number = this.images.length + number;
      }
      this.currentImage = number;
    },
    getThumbnails() {
      this.thumbnails = [];
      if (this.firstThumbnailsIndex < 0) {
        this.thumbnails = this.images.slice(this.firstThumbnailsIndex);
        this.thumbnails.push(
          ...this.images.slice(0, this.lastThumbnailsIndex + 1)
        );
      } else if (this.lastThumbnailsIndex >= this.images.length) {
        this.thumbnails = this.images.slice(this.firstThumbnailsIndex);
        this.thumbnails.push(
          ...this.images.slice(
            0,
            this.lastThumbnailsIndex - (this.images.length - 1)
          )
        );
      } else {
        this.thumbnails = this.images.slice(
          this.firstThumbnailsIndex,
          this.lastThumbnailsIndex + 1
        );
      }
    },
  },
  async created() {
    await this.loadData();
  },
};
</script>
