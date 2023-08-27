import { mapActions, mapState } from 'pinia';
import { useCottagesStore } from '@/stores/cottagesStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useBookingStore } from '@/stores/bookingStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
  props: ['mode'],
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      calendarType: '',
      isSelectOpen: false,
      selectValue: null,
      loading: true,
      summa: 40000,
    };
  },
  mixins: [currentUrl],
  computed: {
    ...mapState(useCottagesStore, ['getCottageType', 'getCottage']),
    ...mapState(useAdaptiveStore, ['isDesktopVersion']),
    selectText() {
      if (this.selectValue === null) {
        return 'Тип коттеджа';
      } else if (this.selectValue === 0) {
        return 'Любой';
      } else {
        const tmp = this.getCottageType.find(
          (el) => el.id === this.selectValue
        );
        return `${tmp.placement} человек`;
      }
    },

    isDisabled() {
      if (this.mode === 'cottage' && (!this.dateStart || !this.dateEnd)) {
        return true;
      }
      return false;
    },
    nightCount() {
      if (this.dateStart && this.dateEnd) {
        const count =
          (Date.parse(this.dateEnd) - Date.parse(this.dateStart)) /
          60 /
          60 /
          24 /
          1000;
        return count;
      }
      return 0;
    },
  },
  methods: {
    ...mapActions(useCottagesStore, ['fetchCottageType', 'filterCottages']),
    ...mapActions(useBookingStore, ['addBookingDate']),
    closePickUps() {
      this.calendarType = '';
      this.isSelectOpen = false;
      document
        .querySelector('body')
        .removeEventListener('click', this.closePickUps);
    },
    toggleCalendar(type) {
      this.isSelectOpen = false;
      if (this.calendarType === type) {
        this.closePickUps();
      } else {
        this.calendarType = type;
        document
          .querySelector('body')
          .addEventListener('click', this.closePickUps);
      }
    },
    pick(date) {
      if (this.calendarType === 'checkIn') {
        if (!this.dateEnd || date.getTime() < this.dateEnd.getTime()) {
          this.dateStart = date;
        }
      } else if (this.calendarType === 'checkOut') {
        if (!this.dateStart || date.getTime() > this.dateStart.getTime()) {
          this.dateEnd = date;
        }
      }
      this.toggleCalendar();
    },
    toggleSelect() {
      this.calendarType = '';
      this.isSelectOpen = !this.isSelectOpen;
      document
        .querySelector('body')
        .addEventListener('click', this.closePickUps);
    },
    getSelectValue(value) {
      this.selectValue = value;
      this.toggleSelect();
    },

    async loadData() {
      try {
        this.loading = true;
        await this.fetchCottageType();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    async sendForm() {
      this.addBookingDate({
        dateStart: this.dateStart,
        dateEnd: this.dateEnd,
        cottageId: this.$route.params.id,
        summa: this.summa,
        cottageDescription: `${this.getCottage.name} с камином ${
          this.getCottage.sauna ? 'и сауной' : ''
        } ${this.getCottage.placement.main} основных мест + ${
          this.getCottage.placement.additional
        } дополнительных`,
        nightCount: this.nightCount,
      });
      if (this.mode === 'cottage') {
        this.$router.push('/booking/step-1');
      } else {
        this.$router.push('/cottages');
      }
    },
  },
  async created() {
    this.loadData();
  },
};
