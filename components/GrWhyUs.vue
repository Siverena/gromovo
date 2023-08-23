<template>
  <section class="gr-why-us">
    <div class="container gr-why-us__container">
      <div class="gr-why-us__first">
        <GrPageTitles class="gr-why-us__title">
          <template v-slot:h1>Почему мы</template>
          <template v-slot:h2
            >В Громово парк есть все для комфортного отдыха
          </template>
        </GrPageTitles>

        <NuxtLink
          class="gr-btn gr-btn--green gr-why-us__link gr-why-us__link--desktop"
          to="/services"
          >Посмотреть все услуги</NuxtLink
        >
      </div>
      <div class="gr-why-us__reasons-cont">
        <div class="gr-why-us__reasons">
          <div
            v-for="(reason, key) in reasons"
            :key="key"
            class="gr-why-us__reason"
          >
            <img :src="getStaticImageUrl(reason.imgSrc)" alt="" />
            <div class="gr-why-us__reason-text">
              {{ reason.text }}
            </div>
          </div>
        </div>
        <div class="gr-why-us__nav">
          <GrBtnSlidesPrev @click="prevReason" />
          <GrBtnSlidesNext @click="nextReason" />
          <div class="gr-why-us__count">
            {{ activeReason + 1 }} / {{ reasonsCount }}
          </div>
          <a class="gr-why-us__schema" @click="showPhoto('gr-why-us/plan.jpg')"
            >Посмотреть схему базы отдыха</a
          >
        </div>
      </div>
      <NuxtLink
        class="gr-btn gr-btn--green gr-why-us__link gr-why-us__link--mobile"
        to="/services"
        >Посмотреть все услуги</NuxtLink
      >
    </div>
  </section>
</template>

<script>
import imageUrl from '@/utils/mixins/image-url.js';
import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  data() {
    return {
      activeReason: 0,
      reasons: [
        {
          imgSrc: 'gr-why-us/r_4.png',
          text: 'Строгая северная природа, сосновый лес, песчаный пляж и кристально чистый воздух',
        },
        {
          imgSrc: 'gr-why-us/r_3.png',
          text: ' Коттеджи разной вместимости, обеспеченные всеми необходимыми  удобствами для комфортного проживания',
        },
        {
          imgSrc: 'gr-why-us/r_2.png',
          text: 'Баня, расположенная на берегу озера',
        },
        {
          imgSrc: 'gr-why-us/r_1.png',
          text: 'Рыбалка',
        },
      ],
    };
  },
  mixins: [imageUrl],
  computed: {
    reasonsCount() {
      return this.reasons.length;
    },
  },
  methods: {
    ...mapActions(useModalStore, ['showPhoto']),
    nextReason() {
      const tmp = this.reasons[0];
      if (this.reasons.length - 1 === this.activeReason) {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = 0;
      } else {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = this.activeReason + 1;
      }
    },
    prevReason() {
      const tmp = this.reasons[this.reasons.length - 1];
      if (this.activeReason === 0) {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.reasons.length - 1;
      } else {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.activeReason - 1;
      }
    },
  },
  mounted() {},
};
</script>
