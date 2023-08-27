<template>
  <Head>
    <Title>Цены | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading"></GrLoader>
  <section class="gr-prices" v-if="!loading && widthComputed">
    <div class="container">
      <GrPageTitles :showLogo="showLogo" :class="'gr-page-titles--prices'">
        <template v-slot:h1>Цены</template>
        <template v-slot:h2
          >Цены на аренду коттеджей сезон {{ currentYear }}</template
        >
      </GrPageTitles>

      <div class="gr-prices__content">
        <div class="gr-prices__nav gr-prices-nav">
          <ul class="gr-prices-nav__list">
            <li
              class="gr-prices-nav__item"
              v-for="(period, key) in getPrices"
              :key="key"
              :class="
                period.periodName === currentPeriod
                  ? 'gr-prices-nav__item--active'
                  : ''
              "
              @click="changePeriod(period.periodName)"
            >
              {{ period.periodName }}
            </li>
          </ul>
        </div>
        <div class="gr-prices-regular" v-if="!isHoliday">
          <Accordion
            :multiple="true"
            :activeIndex="[0]"
            :class="'gr-accordion'"
          >
            <AccordionTab
              v-for="(type, key) in cottageTypes"
              :key="key"
              :header="type.header"
            >
              <p class="gr-prices-regular__star-info">
                **Дополнительное взрослое место с размещением стоит 10% от суммы
                аренды коттеджа в выбранный период (максимум два взрослых в один
                коттедж)
              </p>
              <br />
              <p class="gr-prices-regular__star-info">
                Дополнительное детское место с размещением (дети с 3 до 12 лет)
                стоит 5% от суммы аренды коттеджа в выбранный период (при
                необходимости дополнительно предоставляется кровать)
              </p>
              <br />
              <p class="gr-prices-regular__star-info">
                Для пакета «Понедельник - пятница» въезд с 18:00 Вс., выезд до
                16:00 Пт. Для пакета «Выходные дни» въезд с 18:00 Пт., выезд до
                16:00 Вс.
              </p>
              <div class="gr-prices-regular__icons">
                <ul class="gr-prices-regular__icons-list">
                  <li class="gr-prices-regular__icons-item">
                    <div class="gr-prices-regular__icons-tooltip">
                      Для пакета «Понедельник - пятница» въезд с 18:00 Вс.,
                      выезд до
                    </div>
                    <img src="@/assets/img/gr-prices/baby.png" alt="" />
                  </li>
                  <li class="gr-prices-regular__icons-item">
                    <div class="gr-prices-regular__icons-tooltip">Текст</div>
                    <img src="@/assets/img/gr-prices/user.png" alt="" />
                  </li>
                  <li class="gr-prices-regular__icons-item">
                    <div class="gr-prices-regular__icons-tooltip">Текст</div>
                    <img
                      src="@/assets/img/gr-prices/warning-outline.png"
                      alt=""
                    />
                  </li>
                  <li class="gr-prices-regular__icons-item">
                    <div class="gr-prices-regular__icons-tooltip">Текст</div>
                    <img src="@/assets/img/gr-prices/wood.png" alt="" />
                  </li>
                </ul>
              </div>
              <div class="gr-prices-regular__content">
                <div
                  v-for="(item, key) in getPackagesByCottageType(type.name)"
                  :key="key"
                  class="gr-prices-regular__item"
                >
                  <div class="gr-prices-regular__item-layout">
                    <div class="gr-prices-regular__package">
                      {{ item.name }}
                    </div>
                    <div class="gr-prices-regular__days">
                      {{ item.days }} {{ getEnding(item.days) }}
                    </div>
                  </div>
                  <div class="gr-prices-regular__price">
                    {{ formattedPrice(item.rate) }}
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab header="Услуги">
              <div class="gr-prices-servises">
                <div
                  class="gr-prices-services__item"
                  v-for="(price, key) in getServices"
                  :key="key"
                >
                  <div
                    class="gr-prices-services__item-grid gr-prices-services__item-titles"
                  >
                    <div
                      class="gr-prices-services__title gr-prices-services__col--first"
                    >
                      {{ price.serviceName }}
                    </div>
                    <div
                      v-if="!isMobileVersion"
                      class="gr-prices-services__title gr-prices-services__col gr-prices-services__col--center"
                    >
                      руб./час
                    </div>
                    <div
                      v-if="!isMobileVersion"
                      class="gr-prices-services__title gr-prices-services__col gr-prices-services__col--center"
                    >
                      руб./сутки
                    </div>
                  </div>
                  <div
                    v-for="(item, key) in price.prices"
                    :key="key"
                    class="gr-prices-services__item-grid gr-prices-services__price"
                  >
                    <div
                      class="gr-prices-services__price-layout gr-prices-services__col--first"
                    >
                      <div class="gr-prices-services__price-name">
                        {{ item.name }}
                      </div>
                      <div
                        class="gr-prices-services__price-attention"
                        v-if="item.attention !== ''"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1C9.97933 1.052 11.6278 1.73683 12.9455 3.0545C14.2632 4.37217 14.948 6.02067 15 8C14.948 9.97933 14.2632 11.6278 12.9455 12.9455C11.6278 14.2632 9.97933 14.948 8 15C6.02067 14.948 4.37217 14.2632 3.0545 12.9455C1.73683 11.6278 1.052 9.97933 1 8C1.052 6.02067 1.73683 4.37217 3.0545 3.0545C4.37217 1.73683 6.02067 1.052 8 1ZM8 14C9.698 13.9583 11.112 13.3723 12.242 12.242C13.372 11.1117 13.958 9.69767 14 8C13.9583 6.302 13.3723 4.888 12.242 3.758C11.1117 2.628 9.69767 2.042 8 2C6.302 2.04167 4.888 2.62767 3.758 3.758C2.628 4.88833 2.042 6.30233 2 8C2.04167 9.698 2.62767 11.112 3.758 12.242C4.88833 13.372 6.30233 13.958 8 14ZM8.75 11.25C8.73967 11.4583 8.66417 11.6328 8.5235 11.7735C8.38283 11.9142 8.20833 11.9845 8 11.9845C7.79167 11.9845 7.61717 11.9142 7.4765 11.7735C7.33583 11.6328 7.2655 11.4583 7.2655 11.25C7.2655 11.0417 7.33583 10.8672 7.4765 10.7265C7.61717 10.5858 7.79167 10.5155 8 10.5155C8.20833 10.5155 8.38283 10.5858 8.5235 10.7265C8.66417 10.8672 8.73967 11.0417 8.75 11.25ZM8 4C8.146 4 8.26583 4.04683 8.3595 4.1405C8.45317 4.23417 8.5 4.354 8.5 4.5V9C8.5 9.146 8.45317 9.26583 8.3595 9.3595C8.26583 9.45317 8.146 9.5 8 9.5C7.854 9.5 7.73417 9.45317 7.6405 9.3595C7.54683 9.26583 7.5 9.146 7.5 9V4.5C7.5 4.354 7.54683 4.23417 7.6405 4.1405C7.73417 4.04683 7.854 4 8 4Z"
                            fill="#E87B0E"
                          />
                        </svg>
                        {{ item.attention }}
                      </div>
                      <div
                        class="gr-prices-services__price-number"
                        v-if="item.price !== ''"
                      >
                        {{ formattedPrice(item.price) }}
                      </div>
                    </div>
                    <div
                      class="gr-prices-services__price-per-hour gr-prices-services__col gr-prices-services__col--center"
                    >
                      {{ formattedPrice(item.pricePerHour)
                      }}{{
                        formattedPrice(item.pricePerHour) !== '' &&
                        isMobileVersion
                          ? '/час'
                          : ''
                      }}
                    </div>
                    <div
                      class="gr-prices-services__price-per-day gr-prices-services__col gr-prices-services__col--center"
                    >
                      {{ formattedPrice(item.pricePerDay)
                      }}{{
                        formattedPrice(item.pricePerDay) !== '' &&
                        isMobileVersion
                          ? '/сутки'
                          : ''
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
        <div class="gr-prices-holiday" v-if="isHoliday"></div>
        <p class="gr-prices__text-star">
          *Базовая стоимость коттеджей на указанный период. Для долгосрочной
          аренды от 30 дней обращайтесь к менеджерам по телефону +7 (812)
          385-07-22
        </p>
      </div>

      <GrPricesInfo />
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { usePricesStore } from '@/stores/pricesStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import ending from '@/utils/mixins/ending';
import date from '@/utils/mixins/date.js';
export default {
  data() {
    return {
      showLogo: true,
      loading: true,
      currentPeriod: {},
      currentPrice: {},
      cottageTypes: [
        {
          header:
            'Коттедж №4 с камином 5 основных мест + 2 дополнительных места**',
          name: 'Громово: Коттедж №4',
        },
        {
          header:
            'Коттедж № 1,2,3 с камином 6 основных мест + 2 дополнительных места**',
          name: 'Громово: Коттедж №1-3',
        },
        {
          header:
            'Коттедж № 5, 6, 7, 8, 9 с камином и сауной 8 основных мест + 3 дополнительных места**',
          name: 'Громово: Коттедж №5-9',
        },
      ],
    };
  },
  mixins: [ending, date],
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
    ...mapState(usePricesStore, ['getPrices', 'getServices']),

    noHolidayPrices() {
      return this.getPrices?.filter((el) => el.isHoliday === false);
    },
    holidayPrices() {
      return this.getPrices?.filter((el) => el.isHoliday === true);
    },
    isHoliday() {
      const temp = this.getPrices?.find(
        (el) => el.periodName === this.currentPeriod
      );
      return temp?.isHoliday;
    },
  },
  methods: {
    ...mapActions(usePricesStore, ['fetchPrices', 'fetchServices']),

    async loadData() {
      try {
        this.loading = true;
        await this.fetchPrices();
        await this.fetchServices();
        this.currentPeriod = this.getPrices[0]?.periodName;
        this.getCurrentPrices();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    // getEnding(number) {
    //   const arrTmp = number.split('');
    //   const num = arrTmp[arrTmp.length - 1];
    //   if (number > 4 && number < 20) {
    //     return 'ночей';
    //   } else if (num === '1') {
    //     return 'ночь';
    //   } else if (num >= '2' && num <= '4') {
    //     return 'ночи';
    //   } else {
    //     return 'ночей';
    //   }
    // },
    changePeriod(name) {
      this.currentPeriod = name;
      this.getCurrentPrices();
    },
    getCurrentPrices() {
      if (this.getPrices) {
        this.currentPrice = this.getPrices.find(
          (el) => el.periodName === this.currentPeriod
        );
      }
    },
    getPackagesByCottageType(cottageType) {
      return this.currentPrice.cottages.find(
        (el) => el.cottageType === cottageType
      ).packages;
    },
    formattedPrice(string) {
      if (!isFinite(string)) {
        if (this.isMobileVersion) {
          return '';
        }
        return string;
      } else {
        return `${new Intl.NumberFormat('ru-RU').format(string)} Ꝑ`;
      }
    },
  },
  async created() {
    await this.loadData();
  },
};
</script>
