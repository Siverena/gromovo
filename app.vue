<template>
  <Head>
    <Title>Громово Парк</Title>
  </Head>
  <GrHeader />
  <div class="container"><GrBreadCrumbs /></div>
  <NuxtPage />
  <GrFooter />
  <GrMobMenu v-if="getIsShowMob" />
  <div class="gr-view-photo"></div>
  <GrOrder v-if="getIsShowOrder" />
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  computed: {
    ...mapState(useAdaptiveStore, ['widthComputed']),
    ...mapState(useModalStore, [
      'getIsShowOrder',
      'getIsSubscription',
      'getIsShowMob',
    ]),
    html() {
      return document.querySelector('html');
    },
  },
  methods: {
    ...mapActions(useAdaptiveStore, ['updateWidth']),
    setHtmlClass() {
      if (this.$attrs.error) {
        document.querySelector('html').classList.add('gr-404__html');
      } else {
        document.querySelector('html').classList.remove('gr-404__html');
      }
    },
  },
  beforeMount() {
    this.updateWidth();
    window.addEventListener('resize', () => {
      this.updateWidth();
    });
    this.setHtmlClass();
  },
};
</script>
