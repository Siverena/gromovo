<template>
  <div class="gr-pick-up" v-if="!loading">
    <form
      action=""
      class="gr-pick-up__form"
      :class="mode === 'cottage' ? 'gr-pick-up__form--cottage' : ''"
    >
      <div
        class="gr-pick-up__block"
        :class="mode === 'cottage' ? 'gr-pick-up__block--cottage' : ''"
      >
        <div class="gr-pick-up__item">
          <label for="check-in" class="gr-pick-up__label">
            <p class="gr-pick-up__placeholder" v-if="!dateStart">Заезд</p>
            <p class="gr-pick-up__pick-date" v-if="dateStart">
              {{ dateStart.toLocaleDateString() }}
            </p>
            <div
              class="gr-pick-up__calendar"
              @click.stop="toggleCalendar('checkIn')"
            >
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
            </div>
          </label>
          <!-- <input
            class="gr-pick-up__input"
            type="date"
            name="check-in"
            id="check-in"
            placeholder="Заезд"
          /> -->
          <GrCalendar
            v-if="calendarType === 'checkIn'"
            :dateStart="dateStart"
            :dateEnd="dateEnd"
            :calendarType="calendarType"
            :pick="pick"
          />
        </div>
        <div class="gr-pick-up__item">
          <label for="check-out" class="gr-pick-up__label">
            <p class="gr-pick-up__placeholder" v-if="!dateEnd">Выезд</p>

            <p class="gr-pick-up__pick-date" v-if="dateEnd">
              {{ dateEnd.toLocaleDateString() }}
            </p>
            <div
              class="gr-pick-up__calendar"
              @click.stop="toggleCalendar('checkOut')"
            >
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
            </div>
          </label>
          <!-- <input
            class="gr-pick-up__input"
            type="date"
            name="check-out"
            id="check-out"
            placeholder="Выезд"
          /> -->
          <GrCalendar
            v-if="calendarType === 'checkOut'"
            :dateStart="dateStart"
            :dateEnd="dateEnd"
            :calendarType="calendarType"
            :pick="pick"
          />
        </div>
      </div>
      <div
        class="gr-pick-up__block"
        :class="mode === 'cottage' ? 'gr-pick-up__block--cottage' : ''"
      >
        <div class="gr-pick-up__item" v-if="mode !== 'cottage'">
          <div
            class="gr-pick-up__label gr-pick-up__select"
            :class="selectValue !== null ? 'gr-pick-up__select--selected' : ''"
          >
            {{ selectText }}

            <svg
              @click.stop="toggleSelect"
              class="gr-pick-up__select-open"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0001 5.32801L8.00011 10.203L3.00011 5.32801C2.90645 5.23435 2.79711 5.18751 2.67211 5.18751C2.54711 5.18751 2.43778 5.23435 2.34411 5.32801C2.25045 5.42168 2.20361 5.53101 2.20361 5.65601C2.20361 5.78101 2.24528 5.88518 2.32861 5.96851L7.65661 11.156C7.75028 11.2497 7.86495 11.2965 8.00061 11.2965C8.13628 11.2965 8.25095 11.2497 8.34461 11.156L13.6726 5.98401C13.7559 5.89035 13.7976 5.77835 13.7976 5.64801C13.7976 5.51768 13.7508 5.40835 13.6571 5.32001C13.5634 5.23168 13.4541 5.18735 13.3291 5.18701C13.2041 5.18668 13.0948 5.23351 13.0011 5.32751L13.0001 5.32801Z"
                fill="#010101"
              />
            </svg>
            <ul
              class="gr-pick-up__select-list"
              name=""
              id=""
              v-if="isSelectOpen"
            >
              <li
                class="gr-pick-up__select-item"
                :class="
                  selectValue === 0 ? 'gr-pick-up__select-item--selected' : ''
                "
                value=""
                @click="getSelectValue(0)"
              >
                Любой
              </li>
              <li
                v-for="(type, key) in getCottageType"
                :key="key"
                :class="
                  selectValue === type.id
                    ? 'gr-pick-up__select-item--selected'
                    : ''
                "
                class="gr-pick-up__select-item"
                value="8+3"
                @click="getSelectValue(type.id)"
              >
                {{ type.placement }} человек
              </li>
            </ul>
          </div>
        </div>
        <p class="gr-pick-up__notification" v-if="mode === 'cottage'">
          Выберите даты
        </p>
        <GrBtn
          @click.stop.prevent="sendForm"
          class="gr-pick-up__btn"
          :class="
            currentPage === 'index' && isDesktopVersion
              ? 'gr-btn--transparent'
              : mode === 'cottage'
              ? 'gr-btn--green gr-pick-up__btn--cottage'
              : 'gr-btn--green'
          "
          >{{ btnText }}</GrBtn
        >
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useCottagesStore } from '@/stores/cottagesStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';

export default {
  props: ['btnText', 'mode'],
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      calendarType: '',
      dataSelect: {},
      isSelectOpen: false,
      selectValue: null,
      loading: true,
    };
  },
  computed: {
    ...mapState(useCottagesStore, ['getCottageType']),
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
    currentPage() {
      return this.$route.name;
    },
  },

  // watch: {
  //   currentPage() {
  //     },
  // },
  methods: {
    ...mapActions(useCottagesStore, ['fetchCottageType', 'filterCottages']),
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
    // sendForm() {
    //   try {
    //     this.loading = true;
    //     this.fetchCottages(this.dateStart, this.dateEnd, this.selectValue);
    //     this.loading = false;
    //     if (!this.loading) {
    //       this.$router.push('/cottages');
    //     }
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
    async sendForm() {
      // try {
      //   this.loading = true;
      //   this.filterCottages(this.dateStart, this.dateEnd, this.selectValue);
      //   this.loading = false;
      // } catch (e) {
      //   console.log(e);
      // }
      this.$router.push('/cottages');
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
