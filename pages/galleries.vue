<template>
  <Head>
    <Title>Галерея | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading" />
  <div class="container" v-else>
    <section class="gr-gallery">
      <GrPageTitles class="gr-gallery__titles">
        <template v-slot:h1>Галерея</template>
        <template v-slot:h2>
          Фотографии скажут лучше слов. Посмотрите, как у нас хорошо</template
        >
      </GrPageTitles>
      <NuxtLink
        v-for="(item, key) in getGallery"
        :key="key"
        :to="`/gallery/${item?.nameEng}`"
        class="gr-gallery__item"
        :style="
          `background-image: url(` + getStaticImageUrl(item.mainImg) + `);`
        "
      >
        <div class="gr-gallery__item-bg">
          {{ item.name }}
        </div>
      </NuxtLink>
      <div class="gr-gallery__item gr-gallery__item--cone">
        <img
          src="@/assets/img/gr-contacts/cone_2.png"
          alt=""
          class="gr-way__image"
          width="484"
        />
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
import imageUrl from '@/utils/mixins/image-url.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useGalleryStore, ['getGallery']),
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchGallery();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
