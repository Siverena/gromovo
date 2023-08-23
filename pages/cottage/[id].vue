<template>
  <Head>
    <Title>{{ getCottage.name }} | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading" />
  <div class="container" v-if="!loading">
    <section class="gr-cottage">
      <GrPageTitles class="gr-page-titles--cottage">
        <template v-slot:h1>{{ getCottage.name }}</template>
        <template v-slot:h2
          >Двухэтажный коттедж с камином и сауной на
          {{ getCottage.placement.main }} человек
        </template>
      </GrPageTitles>
      <div class="gr-cottage__header">
        <div class="gr-cottage__slider">
          <GrServiceSlider :slides="getCottage.images" />
        </div>
        <div class="gr-cottage__booking">
          <GrPickUp
            :btnText="'Забронировать'"
            :mode="'cottage'"
            @click="getBooking"
          />
          <p class="gr-cottage__booking-text">
            Также вы можете забронировать коттедж по телефону
            <a href="tel:+78123850722"> +7&nbsp;(812)&nbsp;385-07-22</a>
          </p>
        </div>
      </div>
      <div class="gr-cottage__info">
        <ul class="gr-cottage__list">
          <li>
            <img src="@/assets/img/gr-cottage/square.svg" alt="" />
            {{ getCottage.s }} м<sup>2</sup>
          </li>
          <li>
            <img src="@/assets/img/gr-cottage/floors.svg" alt="" />
            {{ getCottage.stage }} этажа
          </li>
          <li>
            <img src="@/assets/img/gr-cottage/users.svg" alt="" />
            {{ getCottage.placement.main }} +
            {{ getCottage.placement.additional }} чел.
          </li>
          <li>
            <img src="@/assets/img/gr-cottage/toilet.svg" alt="" />
            {{ getCottage.bathroom }} санузла
          </li>
          <li>
            <img src="@/assets/img/gr-cottage/shower.svg" alt="" />
            {{ getCottage.shower }} душ
          </li>
          <li>
            <img
              src="@/assets/img/gr-cottage/fireplace.svg"
              alt=""
              v-if="getCottage.fireplace"
            />
            камин
          </li>
        </ul>
        <div class="gr-cottage__included">
          <div class="gr-cottage__included-bg"></div>
          <div class="gr-cottage__included-content">
            <p class="gr-cottage__included-title">
              {{ getCottage.description }}
            </p>
            <p class="gr-cottage__included-text">
              В стоимость проживания входит:
            </p>
            <ul class="gr-cottage__included-list">
              <li v-for="(items, key) in getCottage.included" :key="key">
                {{ items }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="gr-cottage__filling">
        <div class="gr-cottage__filling-item">
          <p>1 этаж</p>
          <ul class="gr-cottage__filling--list">
            <li v-for="(items, key) in getCottage.floor1" :key="key">
              {{ items }}
            </li>
          </ul>
        </div>
        <div class="gr-cottage__filling-item">
          <p>2 этаж</p>
          <ul class="gr-cottage__filling--list">
            <li v-for="(items, key) in getCottage.floor2" :key="key">
              {{ items }}
            </li>
          </ul>
        </div>
        <div class="gr-cottage__filling-item">
          <p>Размещение</p>
          <ul class="gr-cottage__filling--list">
            <li>
              {{ getCottage.placement.main }} основных мест +
              {{ getCottage.placement.additional }} дополнительных места
            </li>
            <li v-if="getCottage.sleeppingBerths.main.double">
              2х спальных мест: {{ getCottage.sleeppingBerths.main.double }} шт.
            </li>
            <li v-if="getCottage.sleeppingBerths.main.single">
              1 спальных мест: {{ getCottage.sleeppingBerths.main.single }} шт.
            </li>
            <li v-if="getCottage.sleeppingBerths.extra.double">
              Дополнительных 2х спальных мест:
              {{ getCottage.sleeppingBerths.extra.double }} шт.
            </li>
            <li v-if="getCottage.sleeppingBerths.extra.single">
              Дополнительных 1 спальных мест:
              {{ getCottage.sleeppingBerths.extra.single }} шт.
            </li>
          </ul>
        </div>
      </div>
    </section>
    <GrCottagesSpecials />
  </div>
</template>
<script>
// import cottage from '@/stores/data/d-cottage.js';
import { mapState, mapActions } from 'pinia';
import { useCottagesStore } from '@/stores/cottagesStore.js';

export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useCottagesStore, ['getCottage']),
  },
  watch: {},
  methods: {
    ...mapActions(useCottagesStore, ['fetchCottage']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchCottage(this.$route.params.id);
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    getBooking() {},
  },
  async created() {
    await this.loadData();
  },
};
</script>
