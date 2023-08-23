import { defineStore } from 'pinia';

export const useAdaptiveStore = defineStore('adaptiveStore', {
  state: () => {
    return {
      pageName: '',
    };
  },
  getters: {
    getPageName() {
      return this.pageName;
    },
  },
  actions: {
    //mutations
    CHANGE_PAGE_NAME(name) {
      this.pageName = name;
    },
    //actions
    updatePageName(name) {
      this.CHANGE_VERSION();
    },
  },
});
