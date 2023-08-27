import { defineStore } from 'pinia';
export const useNavLinksStore = defineStore('NavLinksStore', {
  state: () => {
    return {
      navLinks: [
        {
          name: 'О Громово',
          link: '/',
          visibleInMenu: true,
          child: [
            {
              name: 'Условия и способы оплаты',
              link: '/uslov',
              visibleInMenu: true,
            },
            {
              name: 'Правила проживания',
              link: '/rules',
              visibleInMenu: true,
            },
            {
              name: 'Галерея',
              link: '/gallery',
              visibleInMenu: true,
            },
          ],
        },
        {
          name: 'Коттеджи',
          link: '/cottages',
          visibleInMenu: true,
        },
        {
          name: 'Цены',
          link: '/prices',
          visibleInMenu: true,
        },
        {
          name: 'Специальные предложения',
          link: '/specials',
          visibleInMenu: true,
        },
        {
          name: 'Услуги',
          link: '/services',
          visibleInMenu: true,
        },
        {
          name: 'Партнеры',
          link: '/partners',
          visibleInMenu: true,
        },
        {
          name: 'Контакты',
          link: '/contacts',
          visibleInMenu: true,
        },
        {
          name: 'Согласие',
          link: '/agree',
          visibleInMenu: false,
        },
        {
          name: 'Бронирование. Шаг 1',
          link: '/booking/step-1',
          visibleInMenu: false,
        },
        {
          name: 'Бронирование. Шаг 2',
          link: '/booking/step-2',
          visibleInMenu: false,
        },
        {
          name: 'Бронирование. Шаг 2',
          link: '/booking/step-3',
          visibleInMenu: false,
        },
      ],
    };
  },
  getters: {
    getNavLinks(state) {
      return state.navLinks;
    },
    getMenuNavLinks(state) {
      return state.navLinks.filter((link) => link.visibleInMenu);
    },
  },
  actions: {
    //mutations
    //actions
  },
});
