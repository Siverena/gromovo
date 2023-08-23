<template>
  <Head>
    <Title>Услуги | Громово парк</Title>
  </Head>
  <GrLoader v-if="loading"></GrLoader>
  <section class="gr-services" v-if="!loading && widthComputed">
    <div class="container">
      <GrPageTitles :showLogo="true">
        <template v-slot:h1>Услуги</template>
        <template v-slot:h2
          >Все для комфортного и приятного отдыха загородом</template
        >
      </GrPageTitles>
      <div class="gr-service">
        <GrServiceSlider
          :slides="getCategoryImages('8')"
          v-if="!isMobileVersion"
        />
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">Баня</p>
          <GrServiceSlider
            :slides="getCategoryImages('8')"
            v-if="isMobileVersion"
          />
          <p class="gr-service__text">
            Проведите несколько спокойных часов в бане, наполненной ароматами
            соснового леса и березовых листьев.
          </p>
          <p class="gr-service__text">
            После удачной рыбалки или отдыха на чистом лесном воздухе баня
            замечательна вдвойне, а на следующее утро вам гарантирован заряд
            бодрости.
          </p>
          <p class="gr-service__text">
            В нашей бане с комфортом могут единовременно отдохнуть 6-8 человек.
          </p>

          <NuxtLink
            class="gr-service__link"
            :class="{
              'gr-btn gr-btn--green': isMobileVersion,
              'gr-link gr-link--white': !isMobileVersion,
            }"
            to="/prices"
            >Посмотреть прейскурант</NuxtLink
          >
        </div>
      </div>
      <div class="gr-service">
        <div class="gr-service__description gr-service__description--white">
          <p class="gr-service__title">Рыбалка</p>
          <GrServiceSlider
            :slides="getCategoryImages('9')"
            v-if="isMobileVersion"
          />
          <p class="gr-service__text">
            База отдыха «Громово Парк» находится на берегу озера Комсомольское.
            Проведите несколько спокойных часов в бане, наполненной ароматами
            соснового леса и березовых листьев.
          </p>
          <p class="gr-service__text">
            Основную рыбу составляет окунь, плотва, ерш, уклейка, попадается
            подлещик, а в некоторых местах - лещ.
          </p>
          <p class="gr-service__text">
            На спиннинг ловится щука и судак. Зимой на каменных грядах
            попадается довольно много налима.
          </p>
          <p class="gr-service__text">
            Мы предлагаем прокат лодок на веслах и удочек летом, и буров и
            удочек зимой.
          </p>

          <p
            class="gr-service__link"
            :class="{
              'gr-btn gr-btn--green': isMobileVersion,
              'gr-link gr-link--green': !isMobileVersion,
            }"
          >
            <span @click="showPhoto('gr-services/komsomolskoe1.jpg')"
              >Карта глубин оз. Комсомольское</span
            >
          </p>
        </div>
        <GrServiceSlider
          :slides="getCategoryImages('9')"
          :right="true"
          v-if="!isMobileVersion"
        />
      </div>
      <div class="gr-service">
        <GrServiceSlider
          :slides="getCategoryImages('6')"
          v-if="!isMobileVersion"
        />
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">Прокат зимнего инвентаря</p>
          <GrServiceSlider
            :slides="getCategoryImages('6')"
            v-if="isMobileVersion"
          />
          <p class="gr-service__text">
            На территории базы отдыха «Громово Парк» обустроена снежная горка,
            на которой можно прокатиться на ватрушках.
          </p>
          <p class="gr-service__text">
            В лесу можно совершить прогулку на финских санях.
          </p>
          <p class="gr-service__text">
            В холодную погоду мы заливаем каток на Комсомольском озере, на
            котором можно покататься на коньках.
          </p>
          <p class="gr-service__text">
            Весь инвентарь для зимнего отдыха имеется в наличии в прокате
          </p>

          <NuxtLink
            to="/prices"
            class="gr-service__link"
            :class="{
              'gr-btn gr-btn--green': isMobileVersion,
              'gr-link gr-link--white': !isMobileVersion,
            }"
          >
            <span>Посмотреть весь инвентарь</span>
          </NuxtLink>
        </div>
      </div>
      <div class="gr-service">
        <div class="gr-service__description gr-service__description--white">
          <p class="gr-service__title">Прокат летнего инвентаря</p>
          <GrServiceSlider
            :slides="getCategoryImages('7')"
            v-if="isMobileVersion"
          />
          <p class="gr-service__text">
            Сняв коттедж в «Громово Парк», вы, конечно же, не будете сидеть на
            месте. Для наших гостей, мы предлагаем различные варианты отдыха на
            свежем воздухе.
          </p>
          <p class="gr-service__text">
            Для любителей велопрогулок на базе отдыха «Громово Парк»
            предоставляются велосипеды в прокат. В нашем прокате найдутся
            велосипеды для всей семьи как взрослые, так детские и подростковые.
          </p>
          <p class="gr-service__text">
            Для тех, кто хотел бы размять мышцы во время игры в бадминтон, мы
            приготовили все необходимое - отличные ракетки, воланы.
          </p>

          <NuxtLink
            to="/prices"
            class="gr-service__link"
            :class="{
              'gr-btn gr-btn--green': isMobileVersion,
              'gr-link gr-link--green': !isMobileVersion,
            }"
          >
            <span>Посмотреть весь инвентарь</span>
          </NuxtLink>
        </div>
        <GrServiceSlider
          :slides="getCategoryImages('7')"
          :right="true"
          v-if="!isMobileVersion"
        />
      </div>
      <div class="gr-service">
        <div class="gr-service__images" v-if="!isMobileVersion">
          <img src="@/assets/img/gr-services/other/1.png" alt="" />
          <img src="@/assets/img/gr-services/other/2.png" alt="" />
          <img src="@/assets/img/gr-services/other/3.png" alt="" />
          <img src="@/assets/img/gr-services/other/4.png" alt="" />
        </div>
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">А также:</p>
          <div class="gr-service__images" v-if="isMobileVersion">
            <img src="@/assets/img/gr-services/other/1.png" alt="" />
            <img src="@/assets/img/gr-services/other/2.png" alt="" />
            <img src="@/assets/img/gr-services/other/3.png" alt="" />
            <img src="@/assets/img/gr-services/other/4.png" alt="" />
          </div>
          <ul>
            <li>Мангальная площадка у каждого коттеджа</li>
            <li>Современная детская площадка на территории базы отдыха</li>
            <li>Нежный песчаный пляж на берегу оз. Комсомольское</li>
            <li>
              Богатейший лес с чистым воздухом и сосновым ароматом, в котором в
              зависимости от сезоны вы сможете собирать грибы и ягоды
            </li>
            <li>Интересные настольные игры</li>
          </ul>

          <NuxtLink
            to="/prices"
            class="gr-service__link"
            :class="{
              'gr-btn gr-btn--green': isMobileVersion,
              'gr-link gr-link--white': !isMobileVersion,
            }"
          >
            <span>Посмотреть цены на услуги</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useGalleryStore } from '@/stores/galleryStore.js';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  data() {
    return {
      loading: true,
    };
  },
  computed: {
    ...mapState(useGalleryStore, ['gallery']),
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    ...mapActions(useModalStore, ['showPhoto']),
    async loadData() {
      try {
        this.loading = true;
        await this.fetchGallery();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
    getCategoryImages(categoryId) {
      return this.gallery.find((el) => el.id === categoryId).images;
    },
  },
  async created() {
    this.loadData();
  },
};
</script>
