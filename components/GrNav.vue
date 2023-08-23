<template>
  <nav class="gr-nav">
    <ul class="gr-nav__list">
      <li
        class="gr-nav__item"
        v-for="(item, key) in getMenuNavLinks"
        :key="key"
      >
        <NuxtLink
          class="gr-nav__link"
          :to="item.link"
          :class="getClassByRoute('gr-nav__link')"
          >{{ item.name }}</NuxtLink
        >
        <div
          @click.stop="toggleMenu(key)"
          v-if="item.child"
          class="gr-nav__arrow"
          :class="
            getClassByRoute('gr-nav__arrow') + ' ' + getClassByCurrentMenu(key)
          "
        >
          <svg fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.0001 0.328014L6.00011 5.20301L1.00011 0.328014C0.906447 0.234347 0.797113 0.187514 0.672113 0.187514C0.547113 0.187514 0.43778 0.234347 0.344113 0.328014C0.250447 0.42168 0.203613 0.531014 0.203613 0.656014C0.203613 0.781014 0.24528 0.88518 0.328613 0.968514L5.65661 6.15601C5.75028 6.24968 5.86495 6.29651 6.00061 6.29651C6.13628 6.29651 6.25095 6.24968 6.34461 6.15601L11.6726 0.984014C11.7559 0.890347 11.7976 0.778347 11.7976 0.648013C11.7976 0.51768 11.7508 0.408347 11.6571 0.320014C11.5634 0.231681 11.4541 0.187347 11.3291 0.187013C11.2041 0.18668 11.0948 0.233514 11.0011 0.327514L11.0001 0.328014Z"
            />
          </svg>
        </div>
        <ul
          class="gr-nav__child-list"
          :class="{
            'gr-nav__child-list--index': this.$route.name === 'index',
            'gr-nav__child-list--error': !this.$route.name,
          }"
          :key="key"
          v-if="currentMenu === key && item.child"
        >
          <li
            class="gr-nav__child-item"
            v-for="(item, key) in item.child"
            :key="key"
          >
            <NuxtLink
              class="gr-nav__child-link"
              :to="item.link"
              :class="getClassByRoute('gr-nav__child-link')"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapState } from 'pinia';
import { useNavLinksStore } from '@/stores/navLinksStore.js';
import currentUrl from '@/utils/mixins/current-url';
export default {
  props: ['isFooter'],

  data() {
    return {
      currentMenu: null,
    };
  },
  mixins: [currentUrl],
  computed: {
    ...mapState(useNavLinksStore, ['getMenuNavLinks']),
  },
  watch: {
    currentUrl() {
      this.toggleMenu();
    },
  },
  methods: {
    toggleMenu(key = null) {
      if (this.currentMenu !== key) {
        this.currentMenu = key;
        document
          .querySelector('body')
          .addEventListener('click', this.closeMenu);
      } else {
        this.currentMenu = null;
      }
    },
    closeMenu() {
      this.currentMenu = null;
      document
        .querySelector('body')
        .removeEventListener('click', this.closeMenu);
    },
    getClassByRoute(string) {
      if (this.$route.name === 'index' || !this.$route.name) {
        return string + '--index';
      }
    },
    getClassByCurrentMenu(key) {
      if (this.currentMenu === key) {
        return 'gr-nav__arrow--open';
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.toggleMenu();
  },
};
</script>
