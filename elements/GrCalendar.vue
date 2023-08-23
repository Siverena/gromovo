<template>
  <div class="gr-calendar" @click.stop.prevent>
    <div class="gr-calendar__header">
      <div class="gr-calendar__date">
        <div
          class="gr-calendar__arrow gr-calendar__prev-month"
          @click="prevMonth"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.51538 2.32811L4.34338 7.65611C4.24971 7.74978 4.20288 7.86178 4.20288 7.99211C4.20288 8.12245 4.24971 8.23961 4.34338 8.34361L9.51538 13.6716C9.60905 13.7549 9.71838 13.7966 9.84338 13.7966C9.96838 13.7966 10.0777 13.7498 10.1714 13.6561C10.265 13.5624 10.3119 13.4531 10.3119 13.3281C10.3119 13.2031 10.265 13.0938 10.1714 13.0001L5.29638 8.00011L10.1714 3.00011C10.265 2.90645 10.3119 2.79711 10.3119 2.67211C10.3119 2.54711 10.265 2.43778 10.1714 2.34411C10.0777 2.25045 9.96838 2.20361 9.84338 2.20361C9.71838 2.20361 9.60905 2.24528 9.51538 2.32861V2.32811Z"
              fill="#010101"
            />
          </svg>
        </div>
        <div class="gr-calendar__current-month">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.25 6.75V15.75H15.75V3.375H13.5V3.9375C13.5 4.10175 13.4473 4.23656 13.3419 4.34194C13.2366 4.44731 13.1018 4.5 12.9375 4.5C12.7732 4.5 12.6384 4.44731 12.5331 4.34194C12.4277 4.23656 12.375 4.10175 12.375 3.9375V3.375H5.625V3.9375C5.625 4.10175 5.57231 4.23656 5.46694 4.34194C5.36156 4.44731 5.22675 4.5 5.0625 4.5C4.89825 4.5 4.76344 4.44731 4.65806 4.34194C4.55269 4.23656 4.5 4.10175 4.5 3.9375V3.375H2.25V5.625H15.75V6.75H2.25ZM5.625 2.25H12.375V1.6875C12.375 1.52325 12.4277 1.38844 12.5331 1.28306C12.6384 1.17769 12.7732 1.125 12.9375 1.125C13.1018 1.125 13.2366 1.17769 13.3419 1.28306C13.4473 1.38844 13.5 1.52325 13.5 1.6875V2.25H16.3125C16.4768 2.25 16.6116 2.30269 16.7169 2.40806C16.8223 2.51344 16.875 2.64825 16.875 2.8125V16.3125C16.875 16.4768 16.8223 16.6116 16.7169 16.7169C16.6116 16.8223 16.4768 16.875 16.3125 16.875H1.6875C1.52325 16.875 1.38844 16.8223 1.28306 16.7169C1.17769 16.6116 1.125 16.4768 1.125 16.3125V2.8125C1.125 2.64825 1.17769 2.51344 1.28306 2.40806C1.38844 2.30269 1.52325 2.25 1.6875 2.25H4.5V1.6875C4.5 1.52325 4.55269 1.38844 4.65806 1.28306C4.76344 1.17769 4.89825 1.125 5.0625 1.125C5.22675 1.125 5.36156 1.17769 5.46694 1.28306C5.57231 1.38844 5.625 1.52325 5.625 1.6875V2.25ZM5.0625 9H6.1875C6.35175 9 6.48656 9.05269 6.59194 9.15806C6.69731 9.26344 6.75 9.39825 6.75 9.5625C6.75 9.72675 6.69731 9.86156 6.59194 9.96694C6.48656 10.0723 6.35175 10.125 6.1875 10.125H5.0625C4.89825 10.125 4.76344 10.0723 4.65806 9.96694C4.55269 9.86156 4.5 9.72675 4.5 9.5625C4.5 9.39825 4.55269 9.26344 4.65806 9.15806C4.76344 9.05269 4.89825 9 5.0625 9ZM5.0625 12.375H6.1875C6.35175 12.375 6.48656 12.4277 6.59194 12.5331C6.69731 12.6384 6.75 12.7732 6.75 12.9375C6.75 13.1018 6.69731 13.2366 6.59194 13.3419C6.48656 13.4473 6.35175 13.5 6.1875 13.5H5.0625C4.89825 13.5 4.76344 13.4473 4.65806 13.3419C4.55269 13.2366 4.5 13.1018 4.5 12.9375C4.5 12.7732 4.55269 12.6384 4.65806 12.5331C4.76344 12.4277 4.89825 12.375 5.0625 12.375ZM8.4375 9H9.5625C9.72675 9 9.86156 9.05269 9.96694 9.15806C10.0723 9.26344 10.125 9.39825 10.125 9.5625C10.125 9.72675 10.0723 9.86156 9.96694 9.96694C9.86156 10.0723 9.72675 10.125 9.5625 10.125H8.4375C8.27325 10.125 8.13844 10.0723 8.03306 9.96694C7.92769 9.86156 7.875 9.72675 7.875 9.5625C7.875 9.39825 7.92769 9.26344 8.03306 9.15806C8.13844 9.05269 8.27325 9 8.4375 9ZM8.4375 12.375H9.5625C9.72675 12.375 9.86156 12.4277 9.96694 12.5331C10.0723 12.6384 10.125 12.7732 10.125 12.9375C10.125 13.1018 10.0723 13.2366 9.96694 13.3419C9.86156 13.4473 9.72675 13.5 9.5625 13.5H8.4375C8.27325 13.5 8.13844 13.4473 8.03306 13.3419C7.92769 13.2366 7.875 13.1018 7.875 12.9375C7.875 12.7732 7.92769 12.6384 8.03306 12.5331C8.13844 12.4277 8.27325 12.375 8.4375 12.375ZM11.8125 9H12.9375C13.1018 9 13.2366 9.05269 13.3419 9.15806C13.4473 9.26344 13.5 9.39825 13.5 9.5625C13.5 9.72675 13.4473 9.86156 13.3419 9.96694C13.2366 10.0723 13.1018 10.125 12.9375 10.125H11.8125C11.6482 10.125 11.5134 10.0723 11.4081 9.96694C11.3027 9.86156 11.25 9.72675 11.25 9.5625C11.25 9.39825 11.3027 9.26344 11.4081 9.15806C11.5134 9.05269 11.6482 9 11.8125 9ZM11.8125 12.375H12.9375C13.1018 12.375 13.2366 12.4277 13.3419 12.5331C13.4473 12.6384 13.5 12.7732 13.5 12.9375C13.5 13.1018 13.4473 13.2366 13.3419 13.3419C13.2366 13.4473 13.1018 13.5 12.9375 13.5H11.8125C11.6482 13.5 11.5134 13.4473 11.4081 13.3419C11.3027 13.2366 11.25 13.1018 11.25 12.9375C11.25 12.7732 11.3027 12.6384 11.4081 12.5331C11.5134 12.4277 11.6482 12.375 11.8125 12.375Z"
              fill="#010101"
            />
          </svg>
          {{ currentMonthLocal }} {{ currentYear }}
        </div>
        <div
          class="gr-calendar__arrow gr-calendar__next-month"
          @click="nextMonth"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.328 2.32789C5.23433 2.43223 5.1875 2.54689 5.1875 2.67189C5.1875 2.79689 5.23433 2.90623 5.328 2.99989L10.203 7.99989L5.328 12.9999C5.23433 13.0936 5.1875 13.2029 5.1875 13.3279C5.1875 13.4529 5.23433 13.5622 5.328 13.6559C5.42167 13.7496 5.531 13.7964 5.656 13.7964C5.781 13.7964 5.89033 13.7547 5.984 13.6714L11.156 8.34339C11.2497 8.24973 11.2965 8.13506 11.2965 7.99939C11.2965 7.86373 11.2497 7.74906 11.156 7.65539L5.984 2.32739C5.89033 2.24406 5.781 2.20239 5.656 2.20239C5.531 2.20239 5.42167 2.24406 5.328 2.32739V2.32789Z"
              fill="#010101"
            />
          </svg>
        </div>
      </div>
      <div class="gr-calendar__weekday">
        <span class="gr-calendar__weekday-item">Пн</span>
        <span class="gr-calendar__weekday-item">Вт</span>
        <span class="gr-calendar__weekday-item">Ср</span>
        <span class="gr-calendar__weekday-item">Чт</span>
        <span class="gr-calendar__weekday-item">Пт</span>
        <span class="gr-calendar__weekday-item--disabled">Сб</span>
        <span class="gr-calendar__weekday-item--disabled">Вс</span>
      </div>
      <div class="gr-calendar__days">
        <div
          class="gr-calendar__day-layout"
          v-for="(day, key) in refilledDays"
          :key="key"
          :class="getDayLayoutClassList(day)"
        >
          <span
            class="gr-calendar__day"
            :class="getDayClassList(day)"
            @click="pick(day)"
          >
            {{ day.getDate() }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['dateStart', 'dateEnd', 'calendarType', 'pick'],
  data() {
    return {
      // 5 В предыдущих уроках вы должны были сделать массив чисел от 1 до последнего дня месяца:
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
        classList += ' gr-calendar__day--not-current-month';
      }
      if (
        day.getTime() === this.dateStart?.getTime() ||
        day.getTime() === this.dateEnd?.getTime()
      ) {
        classList += ' gr-calendar__day--pick';
      }
      return classList;
    },
    getDayLayoutClassList(day) {
      let classList = '';
      if (
        day.getTime() >= this.dateStart?.getTime() &&
        day.getTime() <= this.dateEnd?.getTime()
      )
        classList += ' gr-calendar__day-layout--picked-period';
      if (day.getTime() === this.dateStart?.getTime()) {
        classList += ' gr-calendar__day-layout--picked-period-start';
      }
      if (day.getTime() === this.dateEnd?.getTime()) {
        classList += ' gr-calendar__day-layout--picked-period-end';
      }
      return classList;
    },
  },
  created() {
    this.setCurrentMonthDays();
  },
};
</script>
