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
          <a
            class="gr-why-us__schema gr-link gr-link--green"
            :href="getStaticImageUrl('gr-why-us/plan.jpg')"
            target="_blank"
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

<script src="./gr-why-us.js"></script>
