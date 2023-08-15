import gall from '@/stores/data/d-gallery.js';
import { defineStore } from 'pinia';
async function API(arrId) {
  return arrId ? gall.filter((el) => arrId.includes(el.id)) : gall;
}

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
    isLoading() {
      return Promise.resolve(this.fetchGallery);
    },
  },
  actions: {
    //mutations
    SET_GALLERY(gl) {
      this.gallery = gl;
    },
    //actions
    async fetchGallery(arrId = null) {
      API(arrId)
        .then((data) => {
          this.SET_GALLERY(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
