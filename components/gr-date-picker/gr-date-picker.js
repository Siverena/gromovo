export default {
  props: ['dateStart', 'dateEnd', 'calendarType', 'pick'],
  data() {
    return {
      days: [],
      currentMonthDays: [],
      currentYear: this.getCurrentDate().getFullYear(),
      currentMonth: this.getCurrentDate().getMonth(),
    };
  },
  computed: {
    currentMonthLocal() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        'default',
        { month: 'long' }
      );
    },
    refilledDays() {
      const normalized = [...this.currentMonthDays];
      const left = this.getFirstWeekDay();
      const right = 6 - this.getLastWeekDay();
      for (let i = 0; i < left; i++) {
        normalized.unshift(new Date(this.currentYear, this.currentMonth, -i));
      }
      for (let i = 0; i < right; i++) {
        normalized.push(
          new Date(this.currentYear, this.currentMonth + 1, i + 1)
        );
      }
      return normalized;
    },
  },
  methods: {
    range(num) {
      this.days = [...Array(num + 1).keys()].slice(1);
    },
    getCurrentDate() {
      if (this.calendarType === 'checkIn' && this.dateStart) {
        return this.dateStart;
      } else if (this.calendarType === 'checkOut' && this.dateEnd) {
        return this.dateEnd;
      }
      return new Date();
    },
    setCurrentMonthDays() {
      while (this.currentMonthDays.length > 0) {
        this.currentMonthDays.pop();
      }
      for (let i = 1; i <= this.getLastDay(); i++) {
        this.currentMonthDays.push(
          new Date(this.currentYear, this.currentMonth, i)
        );
      }
    },

    getLastDay(year = this.currentYear, month = this.currentMonth) {
      const data = new Date(year, month + 1, 0).getDate();
      return data;
    },

    getFirstWeekDay(year = this.currentYear, month = this.currentMonth) {
      const date = new Date(year, month, 1);
      const dayNumber = date.getDay();
      return dayNumber;
    },

    getLastWeekDay(year = this.currentYear, month = this.currentMonth) {
      let date = new Date(year, month, this.getLastDay(year, month));
      return date.getDay();
    },

    prevMonth() {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      this.setCurrentMonthDays();
    },
    nextMonth() {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
      this.setCurrentMonthDays();
    },
    getDayClassList(day) {
      let classList = '';
      if (day?.getMonth() !== this.currentMonth) {
        classList += ' gr-date-picker__day--not-current-month';
      }
      if (
        day.getTime() === this.dateStart?.getTime() ||
        day.getTime() === this.dateEnd?.getTime()
      ) {
        classList += ' gr-date-picker__day--pick';
      }
      return classList;
    },
    getDayLayoutClassList(day) {
      let classList = '';
      if (
        day.getTime() >= this.dateStart?.getTime() &&
        day.getTime() <= this.dateEnd?.getTime()
      )
        classList += ' gr-date-picker__day-layout--picked-period';
      if (day.getTime() === this.dateStart?.getTime()) {
        classList += ' gr-date-picker__day-layout--picked-period-start';
      }
      if (day.getTime() === this.dateEnd?.getTime()) {
        classList += ' gr-date-picker__day-layout--picked-period-end';
      }
      return classList;
    },
  },
  created() {
    this.setCurrentMonthDays();
  },
};
