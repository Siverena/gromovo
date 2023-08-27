import { mapState, mapActions } from 'pinia';
import { useWeatherStore } from '@/stores/weatherStore.js';
const API =
  'https://api.open-meteo.com/v1/forecast?latitude=60.74&current_weather=true&hourly=temperature_2m&longitude=30.09&&minutely_15=precipitation';

export default {
  data() {
    return {
      loading: true,
      weatherIcons: {
        clearSkyDay: {
          codes: [0],
          timeOfDaY: 1,
        },
        clearSkyNight: {
          codes: [0],
          timeOfDaY: 0,
        },
        fewCloudsDay: {
          codes: [1],
          timeOfDaY: 1,
        },
        fewCloudsNight: {
          codes: [1],
          timeOfDaY: 0,
        },
        scatteredClouds: {
          codes: [2],
          timeOfDaY: null,
        },
        brokenClouds: {
          codes: [3],
          timeOfDaY: null,
        },
        showerRain: {
          codes: [80, 81, 82],
          timeOfDaY: null,
        },
        rain: {
          codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67],
          timeOfDaY: null,
        },
        thunderstorm: {
          codes: [95, 96, 99],
          timeOfDaY: null,
        },
        snow: {
          codes: [71, 73, 75, 77, 85, 86],
          timeOfDaY: null,
        },
        mist: {
          codes: [45, 48],
          timeOfDaY: null,
        },
      },
    };
  },
  computed: {
    ...mapState(useWeatherStore, ['getWeather']),
    currentTimesOfDaY() {
      const timeTmp = new Date();
      const time = timeTmp.getHours();
      if (time >= 21 || time <= 3) {
        return 0;
      } else {
        return 1;
      }
    },
    classList() {
      return {
        'gr-weather--index': this.$route.name === 'index',
        'gr-weather--error': !this.$route.name,
      };
    },
    show() {
      return (
        !this.loading && this.getWeather && Object.keys(this.getWeather).length
      );
    },
  },

  methods: {
    ...mapActions(useWeatherStore, ['fetchWeather']),
    async loadData() {
      try {
        this.loading = true;
        this.fetchWeather().then(() => {
          this.loading = false;
        });
      } catch (e) {
        this.loading = false;
        console.log(e);
      }
    },
    showIcon(iconName) {
      const icon = this.weatherIcons[iconName];
      try {
        if (this.loading === false && this.getWeather) {
          if (icon.timeOfDaY !== null) {
            return (
              icon.timeOfDaY === this.currentTimesOfDaY &&
              icon.codes.includes(this.getWeather.current_weather.weathercode)
            );
          }
          return icon.codes.includes(
            this.getWeather.current_weather.weathercode
          );
        }
      } catch (e) {
        console.log(this.getWeather);
      }
      return false;
    },
  },
  async created() {
    this.loadData();
  },
};
