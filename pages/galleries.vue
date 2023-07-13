<template>
  <div class="container">
    <GrBreadCrumbs />
    <section class="gr-gallery">
      <GrPageTitles class="gr-gallery__titles">
        <template v-slot:h1>Галерея</template>
        <template v-slot:h2>
          Фотографии скажут лучше слов. Посмотрите, как у нас хорошо</template
        >
      </GrPageTitles>
      <NuxtLink
        v-for="(item, key) in categories"
        :key="key"
        :to="`/gallery/${item.nameEng}`"
        class="gr-gallery__item"
        :style="`background-image: url(` + getImageUrl(item.mainImg) + `);`"
      >
        <div class="gr-gallery__item-bg">
          {{ item.name }}
        </div>
      </NuxtLink>
    </section>
  </div>
</template>
<script>
import gallery from '@/stores/data/d-gallery.js';

export default {
  computed: {
    categories() {
      return gallery;
    },
  },
  methods: {
    getImageUrl(src) {
      const url = new URL(`../assets/img/${src}`, import.meta.url).href;
      return url;
    },
  },
};
</script>
