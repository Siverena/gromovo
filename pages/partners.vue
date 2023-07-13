<template>
  <section class="gr-partners">
    <div class="container">
      <GrBreadCrumbs />
      <GrPageTitles :showLogo="showLogo">
        <template v-slot:h1>Партнеры</template>
        <template v-slot:h2>Дополнительные услуги от наших партнеров</template>
      </GrPageTitles>
      <div class="gr-partners__row">
        <div class="gr-partners__item">
          <img src="@/assets/img/gr-partners/img_1.png" alt="" />
        </div>
        <div class="gr-partners__item gr-partners__item--green">
          <div class="gr-partners__item-title">Эко-ферма «Алеховщина»</div>
          <p>
            У наших партнеров эко-фермы «Алеховщина» вы сможете найти только
            экологически чистые продукты с пользой для вашего здоровья.
          </p>
          <a
            class="gr-partners__link gr-link gr-link--white"
            href="http://alehovshina.ru/"
            >Подробнее</a
          >
        </div>
      </div>
      <div class="gr-partners__row">
        <div class="gr-partners__item gr-partners__item--white">
          <div class="gr-partners__item-title">
            Аренда коттеджей в «Алеховщине»
          </div>
          <p>
            Уединенные коттеджи в Лодейнопольском районе Ленинградской области
            для вашего отдыха.
          </p>
          <a
            class="gr-partners__link gr-link gr-link--green"
            href="https://gromovopark.ru/alehovshina/index.php"
            >Подробнее</a
          >
        </div>
        <div class="gr-partners__item">
          <img src="@/assets/img/gr-partners/img_2.png" alt="" />
        </div>
      </div>
      <div class="gr-partners__row">
        <div class="gr-partners__item">
          <img src="@/assets/img/gr-partners/img_3.png" alt="" />
        </div>
        <div class="gr-partners__item gr-partners__item--green">
          <div class="gr-partners__item-title">
            Прогулка на лошадях «Богатырская сила»
          </div>
          <p>
            Скидка 20% по промокоду «Громово парк» на прогулку верхом по
            сосновом лесу или фотосессию с лошадьми.
          </p>
          <a
            class="gr-partners__link gr-link gr-link--white"
            href="https://vk.com/bogatirskaysila"
            >Подробнее</a
          >
          <p></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      showLogo: true,
    };
  },
};
</script>
