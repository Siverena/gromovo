<template>
  <div class="gr-main-slider">
    <div class="gr-main-slider__list">
      <div class="gr-main-slider__slide">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/1.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/2.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/3.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/4.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/5.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/6.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
      <div class="gr-main-slider__slide" data-key="1">
        <img
          class="gr-main-slider__image"
          src="@/assets/img/gr-main-slider/7.jpg"
        />
        <div class="gr-main-slider__text">
          <p>Громово парк</p>
          <span>Комфортабельные коттеджи в уголке Карельского перешейка</span>
        </div>
      </div>
    </div>

    <div class="gr-main-slider__nav-buttons">
      <div
        class="gr-main-slider__nav-button gr-main-slider__nav-button--prev"
        @click="prevSlide"
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="54" height="54" rx="27" />
          <path
            d="M15.2929 28.7071C14.9024 28.3166 14.9024 27.6834 15.2929 27.2929L21.6569 20.9289C22.0474 20.5384 22.6805 20.5384 23.0711 20.9289C23.4616 21.3195 23.4616 21.9526 23.0711 22.3431L17.4142 28L23.0711 33.6569C23.4616 34.0474 23.4616 34.6805 23.0711 35.0711C22.6805 35.4616 22.0474 35.4616 21.6569 35.0711L15.2929 28.7071ZM40 29H16V27H40V29Z"
          />
        </svg>
      </div>
      <ul class="gr-main-slider__dots">
        <li
          v-for="(dots, key) in dotsCount"
          :key="key"
          class="gr-main-slider__dot"
          :class="key === currentActive ? 'gr-main-slider__dot--current' : ''"
        >
          <button @click="setSlide(key)" type="button">1</button>
        </li>
      </ul>
      <div
        class="gr-main-slider__nav-button gr-main-slider__nav-button--next"
        @click="nextSlide"
      >
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-1"
            y="1"
            width="54"
            height="54"
            rx="27"
            transform="matrix(-1 0 0 1 54 0)"
          />
          <path
            d="M40.7071 28.7071C41.0976 28.3166 41.0976 27.6834 40.7071 27.2929L34.3431 20.9289C33.9526 20.5384 33.3195 20.5384 32.9289 20.9289C32.5384 21.3195 32.5384 21.9526 32.9289 22.3431L38.5858 28L32.9289 33.6569C32.5384 34.0474 32.5384 34.6805 32.9289 35.0711C33.3195 35.4616 33.9526 35.4616 34.3431 35.0711L40.7071 28.7071ZM16 29H40V27H16V29Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentActive: 0,
      slides: [],
      slide: {},
    };
  },
  computed: {
    dotsCount() {
      return this.slides.length;
    },
  },
  methods: {
    nextSlide() {
      this.activeRemove();
      if (this.slides.length - 1 === this.currentActive) {
        this.currentActive = 0;
      } else {
        this.currentActive = this.currentActive + 1;
      }
      this.activeAdd();
    },
    prevSlide() {
      this.activeRemove();
      if (this.currentActive === 0) {
        this.currentActive = this.slides.length - 1;
      } else {
        this.currentActive = this.currentActive - 1;
      }
      this.activeAdd();
    },
    setSlide(key) {
      this.activeRemove();
      this.currentActive = key;
      this.activeAdd();
    },
    getSlides() {
      this.slides = document.querySelectorAll('.gr-main-slider__slide');
      this.activeAdd();
    },
    activeRemove() {
      this.slides[this.currentActive].classList.remove(
        'gr-main-slider__slide--active'
      );
    },
    activeAdd() {
      this.slides[this.currentActive].classList.add(
        'gr-main-slider__slide--active'
      );
    },
  },
  mounted() {
    this.getSlides();
  },
};
</script>
