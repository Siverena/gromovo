<template>
  <div class="container">
    <section class="gr-index-gallery">
      <div class="gr-index-gallery__base">
        <div class="gr-index-gallery__right">
          <div class="gr-index-gallery__row">
            <div class="gr-index-gallery__text">
              <h1 class="gr-site__h1">Лучшие виды</h1>
              <h2 class="gr-site__h2">
                Уютные коттеджи, красивые закаты и рассветы в любое время года
              </h2>
            </div>
            <div class="gr-index-gallery__img gr-index-gallery__img--1">
              <img
                src="@/assets/img/gr-index-gallery/photo_1.jpg"
                width="390"
                height="265"
                alt=""
              />
            </div>
          </div>
          <div class="gr-index-gallery__img gr-index-gallery__img--2">
            <img
              src="@/assets/img/gr-index-gallery/photo_2.jpg"
              width="898"
              height="504"
              alt=""
            />
          </div>
        </div>
        <div class="gr-index-gallery__left">
          <div class="gr-index-gallery__img gr-index-gallery__img--3">
            <img
              src="@/assets/img/gr-index-gallery/photo_3.jpg"
              width="290"
              height="466"
              alt=""
            />
          </div>
          <div class="gr-index-gallery__img gr-index-gallery__img--4">
            <div></div>
          </div>
          <div class="gr-index-gallery__img gr-index-gallery__img--5">
            <img
              src="@/assets/img/gr-index-gallery/photo_5.jpg"
              width="290"
              height="170"
              alt=""
            />
          </div>
        </div>
      </div>

      <div class="gr-index-gallery__mobile">
        <div class="gr-index-gallery__mobile-items">
          <div
            v-for="(img, key) in images"
            :key="key"
            class="gr-index-gallery__mobile-img"
          >
            <img :src="getImageUrl(img.imgSrc)" alt="" />
          </div>
        </div>
        <div class="gr-index-gallery__nav">
          <GrBtnSlidesPrev @click="nextImg" />
          <GrBtnSlidesNext @click="prevImg" />
          <div class="gr-index-gallery__count">
            {{ activeImg + 1 }} / {{ imagesCount }}
          </div>
        </div>
      </div>

      <GrBtn class="gr-btn gr-btn--green gr-index-gallery__btn">
        <NuxtLink to="/galleries"> Смотреть все фотографии</NuxtLink>
      </GrBtn>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showPhoto: false,
      activeImg: 0,
      images: [
        {
          imgSrc: 'gr-index-gallery/photo_1.jpg',
        },
        {
          imgSrc: 'gr-index-gallery/photo_2.jpg',
        },
        {
          imgSrc: 'gr-index-gallery/photo_3.jpg',
        },
        {
          imgSrc: 'gr-index-gallery/photo_5.jpg',
        },
      ],
    };
  },
  computed: {
    imagesCount() {
      return this.images.length;
    },
  },
  methods: {
    nextImg() {
      const tmp = this.reasons[0];
      if (this.images.length - 1 === this.activeImg) {
        this.images.shift();
        this.images.push(tmp);
        this.activeImg = 0;
      } else {
        this.images.shift();
        this.images.push(tmp);
        this.activeReason = this.activeReason + 1;
      }
    },
    prevImg() {
      const tmp = this.images[this.images.length - 1];
      if (this.activeImg === 0) {
        this.images.splice(this.images.length - 1);
        this.images.unshift(tmp);
        this.activeImg = this.images.length - 1;
      } else {
        this.images.splice(this.images.length - 1);
        this.images.unshift(tmp);
        this.activeImg = this.activeImg - 1;
      }
    },

    getImageUrl(src) {
      return `/assets/img/${src}`;
    },
  },
  mounted() {},
};
</script>
