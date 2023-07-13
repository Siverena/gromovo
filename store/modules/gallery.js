import dataGallery from '~/store/test-data/data-gallery.js';
export default {
  state: {
    categories: {},
    gallery: {},
    isLoaded: false,
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
    getCategory(state) {
      return state.category;
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    async fetchCategories(ctx) {
      const {
        categories: { id, name, mainImg },
      } = dataGallery;
      ctx.commit('SET_CATEGORIES', categories);
      this.state.isLoaded = true;
    },
    async fetchCategory({ commit }, id) {
      const category = dataGallery.filter((el) => el.id === id)[0];
      commit('SET_CATEGORY', category);
      this.state.isLoaded = true;
    },
  },
};
