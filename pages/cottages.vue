<template>
  <section class="gr-cottages">
    <div class="container">
      <GrPageTitles :showLogo="false" :class="'gr-page-titles--cottages'">
        <template v-slot:h1>Коттеджи</template>
        <template v-slot:h2
          >Комфортабельные коттеджи из натурального дерева</template
        >
      </GrPageTitles>

      <GrLoader v-if="loading"></GrLoader>
      <div class="gr-cottages__layout" v-if="!loading">
        <Accordion :multiple="true" :activeIndex="[0]" :class="'gr-accordion'">
          <AccordionTab
            v-if="getFivePersonCottages.length !== 0"
            header="ДВУХЭТАЖНЫЙ КОТТЕДЖ С КАМИНОМ НА 5 ЧЕЛОВЕК"
          >
            <div class="gr-cottages__items">
              <div
                class="gr-cottages__cottage"
                v-for="(item, key) in getFivePersonCottages"
                :key="key"
              >
                <div class="gr-cottages__cottage-image">
                  <img :src="getImageUrl(item.photo)" alt="" />
                </div>
                <p class="gr-cottages__cottage-name">{{ item.name }}</p>
                <NuxtLink
                  class="gr-btn--green gr-cottages__cottage-btn"
                  :to="`cottage/${item.id}`"
                  >Подробнее</NuxtLink
                >
              </div>
            </div>
          </AccordionTab>
          <AccordionTab
            v-if="getSixPersonCottages.length !== 0"
            header="ДВУХЭТАЖНЫЕ КОТТЕДЖИ С КАМИНОМ НА 6 ЧЕЛОВЕК"
          >
            <div class="gr-cottages__items">
              <div
                class="gr-cottages__cottage"
                v-for="(item, key) in getSixPersonCottages"
                :key="key"
              >
                <div class="gr-cottages__cottage-image">
                  <img :src="getImageUrl(item.photo)" alt="" />
                </div>
                <p class="gr-cottages__cottage-name">{{ item.name }}</p>
                <NuxtLink
                  class="gr-btn--green gr-cottages__cottage-btn"
                  :to="`cottage/${item.id}`"
                  >Подробнее</NuxtLink
                >
              </div>
            </div>
          </AccordionTab>
          <AccordionTab
            v-if="getEightPersonCottages.length !== 0"
            header="ДВУХЭТАЖНЫЕ КОТТЕДЖИ С КАМИНОМ И САУНОЙ НА 8 ЧЕЛОВЕК"
          >
            <div class="gr-cottages__items">
              <div
                class="gr-cottages__cottage"
                v-for="(item, key) in getEightPersonCottages"
                :key="key"
              >
                <div class="gr-cottages__cottage-image">
                  <img :src="getImageUrl(item.photo)" alt="" />
                </div>
                <p class="gr-cottages__cottage-name">{{ item.name }}</p>
                <NuxtLink
                  class="gr-btn--green gr-cottages__cottage-btn"
                  :to="`cottage/${item.id}`"
                  >Подробнее</NuxtLink
                >
              </div>
            </div>
          </AccordionTab>
        </Accordion>
      </div>
      <GrCottagesSpecials />
    </div>
  </section>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useCottagesStore } from '@/stores/cottagesStore.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useCottagesStore, [
      'getFivePersonCottages',
      'getSixPersonCottages',
      'getEightPersonCottages',
    ]),
  },
  methods: {
    ...mapActions(useCottagesStore, ['fetchCottages3']),
    getImageUrl(src) {
      // const url = new URL(`../assets/img/${src}`, import.meta.url).href;
      // return url;
      return `/assets/img/${src}`;
    },
    async loadData() {
      try {
        this.loading = true;
        await this.fetchCottages3();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    getImageUrl(src) {
      return `/assets/img/${src}`;
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
