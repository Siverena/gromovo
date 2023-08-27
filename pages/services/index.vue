<template>
  <Head>
    <Title>Услуги | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading"></GrLoader>
  <section class="gr-services" v-if="!loading && widthComputed">
    <div class="container">
      <GrPageTitles :showLogo="true">
        <template v-slot:h1>Услуги</template>
        <template v-slot:h2
          >Все для комфортного и приятного отдыха загородом</template
        >
      </GrPageTitles>
      <GrService />
    </div>
  </section>
</template>
<script>
import imageUrl from '@/utils/mixins/image-url.js';
import { mapState, mapActions } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';

export default {
  data() {
    return {
      loading: true,
    };
  },
  mixins: [imageUrl],
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
  },
  async created() {
    this.loadData();
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
};
</script>
