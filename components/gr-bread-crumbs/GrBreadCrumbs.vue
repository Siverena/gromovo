<template>
  <div class="gr-breadcrumbs" v-if="showBreadcrumbs && !loading">
    <div class="gr-breadcrumbs__item">
      <NuxtLink class="gr-breadcrumbs__link" to="/">Главная</NuxtLink>
    </div>
    <div v-for="(link, key) in links" :key="key" class="gr-breadcrumbs__item">
      <div class="gr-breadcrumbs__delimiter"></div>

      <NuxtLink
        class="gr-breadcrumbs__link"
        v-if="key !== links.length - 1"
        :to="link.link"
        >{{ link.name }}</NuxtLink
      >
      <span v-else>
        {{ link.name }}
      </span>
    </div>
  </div>
</template>
<script src="./gr-bread-crumbs.js"></script>
