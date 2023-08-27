<template>
  <div class="gr-page-titles">
    <h1 class="gr-site__h1"><slot name="h1"></slot></h1>
    <h2 class="gr-site__h2">
      <slot name="h2"></slot>
    </h2>
    <GrCircleLogotype v-if="showLogo" />
  </div>
</template>
<script src="./gr-page-titles.js"></script>
