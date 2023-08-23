import dPrice from './data/d-price-copy.js';
import dServices from './data/d-services.js';
import { defineStore } from 'pinia';
async function API(price) {
  return price;
}
export const usePricesStore = defineStore('PricesStore', {
  state: () => {
    return {
      prices: [],
      services: [],
    };
  },
  getters: {
    getPrices(state) {
      return state.prices;
    },
    getServices(state) {
      return state.services;
    },
  },
  actions: {
    //mutations
    SET_PRICES(data) {
      this.prices = data;
    },
    SET_SERVICES(data) {
      this.services = data;
    },
    //actions
    async fetchPrices() {
      API(dPrice)
        .then((data) => {
          this.SET_PRICES(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async fetchServices() {
      API(dServices)
        .then((data) => {
          this.SET_SERVICES(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
