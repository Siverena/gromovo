<template v-if="widthComputed">
  <GrHeader :openMobMenu="openMobMenu" :currentUrl="currentUrl" />
  <div class="container"><GrBreadCrumbs /></div>
  <NuxtPage />
  <GrFooter />
  <GrMobMenu :closeMobMenu="closeMobMenu" :isShowMob="isShowMob" />
  <div class="gr-view-photo"></div>
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';

export default {
  data() {
    return {
      isShowMob: false,
      currentMenu: false,
      resourcesLoaded: false,
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, ['widthComputed']),
    currentUrl() {
      return this.$route.name;
    },
    body() {
      return document.querySelector('html');
    },
  },
  methods: {
    ...mapActions(useAdaptiveStore, ['updateWidth']),
    closeMobMenu() {
      this.isShowMob = false;
      this.body.style.overflow = 'scroll';
    },
    openMobMenu() {
      this.isShowMob = true;
      this.body.style.overflow = 'hidden';
    },
    showPhoto() {},
  },
  created() {
    console.clear();
  },
  beforeMount() {
    this.updateWidth();
    window.addEventListener('resize', () => {
      this.updateWidth();
    });
  },
};
</script>
