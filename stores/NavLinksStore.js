import navLinks from '@/stores/data/d-nav-links.js';
import { defineStore } from 'pinia';
export const useNavLinksStore = defineStore('NavLinksStore', {
  state: () => {
    return {
      navLinks: [
        {
          name: 'О Громово',
          link: '/',
          child: [
            {
              name: 'Условия и способы оплаты',
              link: '/uslov',
            },
            {
              name: 'Правила проживания',
              link: '/rules',
            },
            {
              name: 'Галерея',
              link: '/galleries',
            },
          ],
        },
        {
          name: 'Коттеджи',
          link: '/cottages',
        },
        {
          name: 'Цены',
          link: '/prices',
        },
        {
          name: 'Специальные предложения',
          link: '/specials',
        },
        {
          name: 'Услуги',
          link: '/services',
        },
        {
          name: 'Партнеры',
          link: '/partners',
        },
        {
          name: 'Контакты',
          link: '/contacts',
        },
      ],
    };
  },
  getters: {
    getNavLinks(state) {
      return state.navLinks;
    },
  },
  actions: {
    //mutations
    //actions
  },
});
