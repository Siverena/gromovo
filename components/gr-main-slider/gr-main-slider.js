import imageUrl from '@/utils/mixins/image-url.js';
export default {
  data() {
    return {
      currentActive: 0,
      slides: [
        {
          src: 'gr-main-slider/1.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/2.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/3.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/4.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/5.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/6.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
        {
          src: 'gr-main-slider/7.jpg',
          text1: 'Громово парк',
          text2: 'Комфортабельные коттеджи в уголке Карельского перешейка',
        },
      ],
    };
  },
  mixins: [imageUrl],
  computed: {
    dotsCount() {
      return this.slides.length;
    },
  },
  methods: {
    nextSlide() {
      if (this.slides.length - 1 === this.currentActive) {
        this.currentActive = 0;
      } else {
        this.currentActive = this.currentActive + 1;
      }
    },
    prevSlide() {
      if (this.currentActive === 0) {
        this.currentActive = this.slides.length - 1;
      } else {
        this.currentActive = this.currentActive - 1;
      }
    },
    setSlide(key) {
      this.currentActive = key;
    },
  },
};
