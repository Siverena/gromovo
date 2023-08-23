import { defineStore } from 'pinia';

export const useBookingStore = defineStore('bookingStore', {
  state: () => {
    return {
      dateStart: null,
      dateEnd: null,
      cottageId: '',
      name: '',
      phone: '',
      email: '',
      seria: '',
      issued: '',
      whenIssued: '',
      address: '',
      birth: '',
      promo: '',
      numberOfAdults: 1,
      numberOfTeenagers: 0,
      numberOfchildren: 0,
      placesWithoutAccommodation: 0,
      withoutAnimals: false,
      rulesAndPrices: false,
      personalInformation: false,
      getNews: false,
      summa: null,
      cottageDescription: '',
      nightCount: null,
    };
  },
  getters: {
    getBookingInformation(state) {
      return {
        dateStart: state.dateStart.toLocaleDateString(),
        dateEnd: state.dateEnd.toLocaleDateString(),
        cottageDescription: state.cottageDescription,
        name: state.name,
        phone: state.phone,
        email: state.email,
        seria: state.seria,
        issued: state.issued,
        whenIssued: state.whenIssued,
        address: state.address,
        birth: state.birth,
        promo: state.promo,
        numberOfAdults: state.numberOfAdults,
        numberOfTeenagers: state.numberOfTeenagers,
        numberOfchildren: state.numberOfchildren,
        placesWithoutAccommodation: state.placesWithoutAccommodation,
        withoutAnimals: state.withoutAnimals,
        rulesAndPrices: state.rulesAndPrices,
        personalInformation: state.personalInformation,
        getNews: state.getNews,
        summa: state.summa,
        nightCount: state.nightCount,
      };
    },
  },
  actions: {
    //mutations
    SET_BOOKING_DATE(data) {
      this.dateStart = data.dateStart;
      this.dateEnd = data.dateEnd;
      this.cottageId = data.cottageId;
      this.summa = data.summa;
      this.cottageDescription = data.cottageDescription;
      this.nightCount = data.nightCount;
    },
    SET_BOOKING_INFORMATION(data) {
      this.name = data.name;
      this.phone = data.phone;
      this.email = data.email;
      this.seria = data.seria;
      this.issued = data.issued;
      this.whenIssued = data.whenIssued;
      this.address = data.address;
      this.birth = data.birth;
      this.promo = data.promo;
      this.numberOfAdults = data.numbersOfPersons.numberOfAdults;
      this.numberOfTeenagers = data.numbersOfPersons.numberOfTeenagers;
      this.numberOfchildren = data.numbersOfPersons.numberOfchildren;
      this.placesWithoutAccommodation =
        data.numbersOfPersons.placesWithoutAccommodation;
      this.withoutAnimals = data.agrees.withoutAnimals;
      this.rulesAndPrices = data.agrees.rulesAndPrices;
      this.personalInformation = data.agrees.personalInformation;
      this.getNews = data.agrees.getNews;
    },

    //actions

    addBookingInformation(data) {
      this.SET_BOOKING_INFORMATION(data);
    },
    addBookingDate(data) {
      this.SET_BOOKING_DATE(data);
    },
  },
});
