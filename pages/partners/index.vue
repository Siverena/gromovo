<template>
  <Head>
    <Title>Партнеры | Громово парк</Title>
  </Head>
  <section class="gr-partners" v-if="widthComputed">
    <div class="container">
      <GrPageTitles :showLogo="showLogo">
        <template v-slot:h1>Партнеры</template>
        <template v-slot:h2>Дополнительные услуги от наших партнеров</template>
      </GrPageTitles>
      <div class="gr-partners__row">
        <div class="gr-partners__item" v-if="!isMobileVersion">
          <img src="@/assets/img/gr-partners/img_1.png" alt="" />
        </div>
        <div class="gr-partners__item gr-partners__item--green">
          <div class="gr-partners__item-title">Эко-ферма «Алеховщина»</div>
          <img
            class="gr-partners__item__image-mob"
            src="@/assets/img/gr-partners/img_1.png"
            alt=""
            v-if="isMobileVersion"
          />
          <p>
            У наших партнеров эко-фермы «Алеховщина» вы сможете найти только
            экологически чистые продукты с пользой для вашего здоровья.
          </p>
          <a
            class="gr-partners__link gr-link gr-link--white"
            :class="isMobileVersion ? 'gr-btn gr-btn--green' : ''"
            href="http://alehovshina.ru/"
            target="_blank"
            >Подробнее</a
          >
        </div>
      </div>
      <div class="gr-partners__row">
        <div class="gr-partners__item gr-partners__item--white">
          <div class="gr-partners__item-title">
            Аренда коттеджей в «Алеховщине»
          </div>
          <img
            class="gr-partners__item__image-mob"
            src="@/assets/img/gr-partners/img_2.png"
            alt=""
            v-if="isMobileVersion"
          />
          <p>
            Уединенные коттеджи в Лодейнопольском районе Ленинградской области
            для вашего отдыха.
          </p>
          <a
            class="gr-partners__link gr-link"
            :class="
              isMobileVersion ? 'gr-btn gr-btn--green ' : 'gr-link--green'
            "
            target="_blank"
            href="https://gromovopark.ru/alehovshina/index.php"
            >Подробнее</a
          >
        </div>
        <div class="gr-partners__item" v-if="!isMobileVersion">
          <img src="@/assets/img/gr-partners/img_2.png" alt="" />
        </div>
      </div>
      <div class="gr-partners__row">
        <div class="gr-partners__item" v-if="!isMobileVersion">
          <img src="@/assets/img/gr-partners/img_3.png" alt="" />
        </div>
        <div class="gr-partners__item gr-partners__item--green">
          <div class="gr-partners__item-title">
            Прогулка на лошадях «Богатырская сила»
          </div>
          <img
            class="gr-partners__item__image-mob"
            src="@/assets/img/gr-partners/img_3.png"
            alt=""
            v-if="isMobileVersion"
          />
          <p>
            Скидка 20% по промокоду «Громово парк» на прогулку верхом по
            сосновом лесу или фотосессию с лошадьми.
          </p>
          <a
            :class="isMobileVersion ? 'gr-btn gr-btn--green ' : ''"
            class="gr-partners__link gr-link gr-link--white"
            href="https://vk.com/bogatirskaysila"
            target="_blank"
            >Подробнее</a
          >
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
export default {
  data() {
    return {
      showLogo: true,
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
  },
};
</script>
