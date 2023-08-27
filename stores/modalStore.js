import { defineStore } from 'pinia';
export const useModalStore = defineStore('modalStore', {
  state: () => {
    return {
      isShowMob: false,
      isShowOrder: false,
      isSubscription: false,
    };
  },
  getters: {
    getIsShowMob(state) {
      return state.isShowMob;
    },
    getIsShowOrder(state) {
      return state.isShowOrder;
    },
    getIsSubscription(state) {
      return state.isSubscription;
    },
  },
  actions: {
    //mutations
    SET_IS_SHOW_MOB_MENU(data) {
      this.isShowMob = data;
      this.isShowOrder = false;
      this.isShowPhoto = false;
    },
    SET_IS_SHOW_ORDER(data) {
      this.isShowMob = false;
      this.isShowOrder = data;
      this.isShowPhoto = false;
    },
    SET_IS_SUBSCRIPTION(data) {
      this.isSubscription = data;
    },
    //actions
    openOrder(isSubscription = false) {
      this.SET_IS_SUBSCRIPTION(isSubscription);
      this.SET_IS_SHOW_ORDER(true);
    },
    closeOrder() {
      this.SET_IS_SHOW_ORDER(false);
    },
    openMobMenu() {
      this.SET_IS_SHOW_MOB_MENU(true);
      document.querySelector('html').style.overflowY = 'hidden';
    },
    closeMobMenu() {
      this.SET_IS_SHOW_MOB_MENU(false);
      document.querySelector('html').style.overflowY = 'scroll';
    },
  },
});
