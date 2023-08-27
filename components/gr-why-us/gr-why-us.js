import imageUrl from '@/utils/mixins/image-url.js';
import { mapActions } from 'pinia';
import { useModalStore } from '@/stores/modalStore.js';
export default {
  data() {
    return {
      activeReason: 0,
      reasons: [
        {
          imgSrc: 'gr-why-us/r_4.png',
          text: 'Строгая северная природа, сосновый лес, песчаный пляж и кристально чистый воздух',
        },
        {
          imgSrc: 'gr-why-us/r_3.png',
          text: ' Коттеджи разной вместимости, обеспеченные всеми необходимыми  удобствами для комфортного проживания',
        },
        {
          imgSrc: 'gr-why-us/r_2.png',
          text: 'Баня, расположенная на берегу озера',
        },
        {
          imgSrc: 'gr-why-us/r_1.png',
          text: 'Рыбалка',
        },
      ],
    };
  },
  mixins: [imageUrl],
  computed: {
    reasonsCount() {
      return this.reasons.length;
    },
  },
  methods: {
    ...mapActions(useModalStore, ['showPhoto']),
    nextReason() {
      const tmp = this.reasons[0];
      if (this.reasons.length - 1 === this.activeReason) {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = 0;
      } else {
        this.reasons.shift();
        this.reasons.push(tmp);
        this.activeReason = this.activeReason + 1;
      }
    },
    prevReason() {
      const tmp = this.reasons[this.reasons.length - 1];
      if (this.activeReason === 0) {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.reasons.length - 1;
      } else {
        this.reasons.splice(this.reasons.length - 1);
        this.reasons.unshift(tmp);
        this.activeReason = this.activeReason - 1;
      }
    },
  },
};
