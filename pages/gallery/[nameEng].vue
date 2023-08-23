<template>
  <Head>
    <Title>{{ getGallery.name }} | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading" />
  <div class="container" v-if="!loading && widthComputed">
    <section class="gr-gallery">
      <GrPageTitles class="gr-gallery__titles">
        <template v-slot:h1>{{ getGallery.name }}</template>
        <template v-slot:h2> {{ getGallery.title }}</template>
      </GrPageTitles>
      <img
        alt=""
        v-for="(img, key) in imgsss"
        :key="key"
        class="gr-gallery__image"
        :src="getStaticImageUrl(img.src)"
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
import { mapState, mapActions } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useGalleryStore } from '@/stores/galleryStore.js';
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  data() {
    return {
      loading: true,
      isShowSlider: false,
      informations: [],
      currentImage: 0,
      images: [],
      thumbnails: [],
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useAdaptiveStore, [
      'isMobileVersion',
      'isTabVersion',
      'isLaptopVersion',
      'widthComputed',
    ]),
    ...mapState(useGalleryStore, ['getGallery']),
    body() {
      return document.querySelector('html');
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
    ...mapActions(useGalleryStore, ['fetchGallery']),
    async loadData() {
      this.loading = true;
      await this.fetchGallery(this.$route.params.nameEng);
      this.images = this.getGallery.images;
      this.loading = false;
    },
    showSlider(key) {
      this.isShowSlider = true;
      this.body.style.overflowY = 'hidden';
      this.currentImage = key;
      this.getThumbnails();
    },
    closeSlider() {
      this.isShowSlider = false;
      this.body.style.overflowY = 'scroll';
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
