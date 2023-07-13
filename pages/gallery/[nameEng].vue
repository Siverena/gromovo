<template>
  <div class="container">
    <GrBreadCrumbs />
    <section class="gr-gallery" v-if="!isLoading">
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
      :thumbnails="thumbnails"
    />
  </div>
</template>
<script>
import gallery from '@/stores/data/d-gallery.js';

export default {
  data() {
    return {
      isLoading: true,
      isShowSlider: false,
      informations: [],
      currentImage: 0,
      images: [],
      thumbnails: [],
      elem: '',
    };
  },
  computed: {
    body() {
      this.elem = document.querySelector('body');
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
      const url = new URL(`../../assets/img/${src}`, import.meta.url).href;
      return url;
    },
    // getImagesForSlider(indexStart = this.currentImage) {
    //   console.log(this.currentImage);
    //   this.images = this.informations.images.slice(indexStart, indexStart + 6);
    // },
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
      if (
        this.images[this.currentImage] ===
        this.thumbnails[this.thumbnails.length - 1]
      ) {
        this.getThumbnails(this.currentImage - (this.thumbnails.length - 1));
      }
      ++this.currentImage;
    },
    prevSlide() {
      --this.currentImage;
    },
    getThumbnails(index = this.currentImage) {
      this.thumbnails = this.images.slice(index, index + 6);
    },
  },
  async created() {
    await this.loadData();
  },
};
</script>
