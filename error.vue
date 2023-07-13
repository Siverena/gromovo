<template>
  <section class="gr-404">
    <div class="container">
      <GrHeader :currentUrl="currentUrl" class="gr-404__header"></GrHeader>
      <div class="gr-404__content">
        <p class="gr-404__code">404</p>
        <p class="gr-404__error">Страница не найдена</p>
        <p class="gr-404__text">
          Страница, которую вы ищите, не существует. Возможно она устарела, была
          удалена, или был введен неверный адрес в адресной строке.
        </p>
        <NuxtLink to="/" class="gr-404__link gr-btn gr-btn--transparent"
          >Перейти на гланую</NuxtLink
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentUrl: '404',
    };
  },

  beforeCreate() {},
  mounted() {},
};
</script>
