import cottageData from '@/stores/data/d-cottage.js';
import cottageTypeData from '@/stores/data/d-cottage-type.js';
import bookingData from '@/stores/data/d-booked-dates.js';
import { defineStore } from 'pinia';
async function API(dateStart = null, dateEnd = null, cottageType = null) {
  const booked = [];
  let foundType;
  console.log('9 cottageType: ', cottageType);
  if (cottageType) {
    const filtredByType = cottageData.filter((el) => {
      foundType = cottageTypeData.find((el) => el.id === cottageType);
      return foundType && foundType.cottages.includes(el.id);
    });
  }
  if ((dateStart && dateEnd) || cottageType) {
    bookingData.forEach((el) => {
      if (dateStart && dateEnd) {
        if (
          (cottageType === null || el.cottageType === cottageType) &&
          !el.dates.every((date) => {
            return (
              new Date(date.dateStart).getDate() >= dateEnd.getDate() ||
              new Date(date.dateEnd).getDate() <= dateStart.getDate()
            );
          })
        ) {
          booked.push(el.cottageId);
          console.log(booked);
        }
      }
    });
    console.log('foundType: ', foundType);
    console.log('32 cottageType: ', cottageType);
    return cottageData.filter((el) => {
      if (
        !booked.includes(el.id) &&
        (cottageType === null ||
          (foundType && foundType.cottages.includes(el.id)))
      ) {
        console.log(el);
        return true;
      }
    });
  } else {
    return cottageData;
  }
}
async function API3() {
  return cottageData;
}
async function API2(id) {
  return cottageData.find((el) => el.id === id);
}

async function API1() {
  return cottageTypeData;
}
export const useCottagesStore = defineStore('CottagesStore', {
  state: () => {
    return {
      cottages: [],
      cottage: {},
      cottageType: [],
      selectedCottageTypeId: null,
      dateStart: null,
      dateEnd: null,
    };
  },
  getters: {
    getFivePersonCottages(state) {
      return state.cottages.filter((el) => el.placement.main === 5);
    },
    getSixPersonCottages(state) {
      return state.cottages.filter((el) => el.placement.main === 6);
    },
    getEightPersonCottages(state) {
      return state.cottages.filter((el) => el.placement.main === 8);
    },
    getCottage(state) {
      return state.cottage;
    },
    getCottageType(state) {
      return state.cottageType;
    },
    isLoading() {
      return Promise.all([
        this.fetchCottage,
        this.fetchCottageType,
        this.fetchCottages,
        this.fetchCottages3,
      ]);
    },
  },
  actions: {
    //mutations
    SET_COTTAGES(data) {
      this.cottages = data;
    },
    SET_COTTAGE(data) {
      this.cottage = data;
    },
    SET_COTTAGE_TYPE(data) {
      this.cottageType = data;
    },
    SET_FORM_DATA(dateStart = null, dateEnd = null, cottageType = null) {
      this.selectedCottageTypeId = cottageType;
      this.dateStart = dateStart;
      this.dateEnd = dateEnd;
    },
    //actions

    async fetchCottages() {
      this.loading = true;
      API(this.dateStart, this.dateEnd, this.cottageType)
        .then((data) => {
          this.SET_COTTAGES(data);
          this.loading = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async fetchCottages3() {
      API3()
        .then((data) => {
          this.SET_COTTAGES(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async fetchCottage(id) {
      this.loading = true;
      API2(id)
        .then((data) => {
          this.SET_COTTAGE(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async fetchCottageType() {
      API1()
        .then((data) => {
          this.SET_COTTAGE_TYPE(data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async filterCottages(dateStart = null, dateEnd = null, selectValue = null) {
      this.SET_FORM_DATA(dateStart, dateEnd, selectValue);
      this.fetchCottages();
    },
  },
});
