import gall from '@/stores/data/d-gallery.js';
import { defineStore } from 'pinia';
export const useGalleryStore = defineStore('GalleryStore', {
  state: () => {
    return {
      gallery: [],
    };
  },
  getters: {
    getGallery(state) {
      return state.gallery;
    },
  },
  actions: {
    //mutations
    SET_GALLERY(gl) {
      this.gallery = gl;
    },
    //actions
    fetchGallery() {
      const gl = gall;
      this.SET_GALLERY(gl);
    },
  },
});
