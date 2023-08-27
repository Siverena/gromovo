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
<script src="./name-eng.js"></script>
