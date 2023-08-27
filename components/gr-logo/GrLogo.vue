<template>
  <div
    class="gr-logo"
    :class="{
      'gr-logo--index': currentUrl === 'index' && !isFooter && !mobMenu,
      'gr-logo--error': !currentUrl,
      'gr-logo--footer': isFooter,
      'gr-logo--mob-menu': mobMenu,
    }"
  >
    <NuxtLink to="/">
      <GrLogotype />
    </NuxtLink>
  </div>
</template>
<script src="./gr-logo.js"></script>
