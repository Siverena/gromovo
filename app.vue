<template v-if="widthComputed">
  <Head>
    <Title>Громово Парк</Title>
  </Head>
  <GrHeader :currentUrl="currentUrl" />
  <div class="container"><GrBreadCrumbs /></div>
  <NuxtPage />
  <GrFooter />
  <GrMobMenu v-if="getIsShowMob" />
  <div class="gr-view-photo"></div>
  <GrOrder v-if="getIsShowOrder" />
  <GrViewFoto v-if="getIsShowPhoto" />
</template>
<script>
import { mapActions, mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
import { useModalStore } from '@/stores/modalStore.js';

export default {
  data() {
    return {
      isShowMob: false,
      isShowOrder: false,
      currentMenu: false,
      resourcesLoaded: false,
    };
  },
  computed: {
    ...mapState(useAdaptiveStore, ['widthComputed']),
    ...mapState(useModalStore, [
      'getIsShowOrder',
      'getIsSubscription',
      'getIsShowPhoto',
      'getIsShowMob',
    ]),

    currentUrl() {
      return this.$route.name;
    },
    html() {
      return document.querySelector('html');
    },
  },
  methods: {
    ...mapActions(useAdaptiveStore, ['updateWidth']),
    getBodyClass() {
      if (this.$attrs.error) {
        document.querySelector('html').classList.add('gr-404__html');
      } else {
        document.querySelector('html').classList.remove('gr-404__html');
      }
    },
  },
  created() {
    console.clear();
  },
  beforeMount() {
    this.updateWidth();
    window.addEventListener('resize', () => {
      this.updateWidth();
    });
    this.getBodyClass();
  },
};
</script>
