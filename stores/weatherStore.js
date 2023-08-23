import { defineStore } from 'pinia';
const API =
  'https://api.open-meteo.com/v1/forecast?latitude=60.74&current_weather=true&hourly=temperature_2m&longitude=30.09&&minutely_15=precipitation';

export const useWeatherStore = defineStore('WeatherStore', {
  state: () => {
    return {
      weather: {},
    };
  },
  getters: {
    getWeather(state) {
      return state.weather;
    },
  },
  actions: {
    //mutations
    SET_WEATHER(data) {
      this.weather = data;
    },
    //actions
    async fetchWeather() {
      useFetch(API)
        .then((data) => {
          this.SET_WEATHER(data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
