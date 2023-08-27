import imageUrl from '@/utils/mixins/image-url.js';
import { mapState } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';

export default {
  mixins: [imageUrl],
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion']),
    ...mapState(useGalleryStore, ['getGallery']),
  },
  methods: {
    getCategoryImages(categoryId) {
      return this.getGallery.find((el) => el.id === categoryId).images;
    },
  },
};
