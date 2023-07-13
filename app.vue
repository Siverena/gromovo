<template>
  <div>
    <GrHeader
      :openMobMenu="openMobMenu"
      :currentUrl="currentUrl"
      :links="navLinks"
    />

    <NuxtPage />
    <GrFooter :links="navLinks" />
    <GrMobMenu
      :closeMobMenu="closeMobMenu"
      :isShowMob="isShowMob"
      :links="navLinks"
    />
    <div class="gr-view-photo"></div>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import { useNavLinksStore } from '@/stores/NavLinksStore.js';

export default {
  data() {
    return {
      isShowMob: false,
      currentMenu: false,
    };
  },
  computed: {
    currentUrl() {
      return this.$route.name;
    },
    ...mapState(useNavLinksStore, ['navLinks']),
  },
  methods: {
    closeMobMenu() {
      this.isShowMob = false;
    },
    openMobMenu() {
      this.isShowMob = true;
    },
    showPhoto() {},
  },
  beforeCreate() {},
  mounted() {},
  created() {},
};
</script>
