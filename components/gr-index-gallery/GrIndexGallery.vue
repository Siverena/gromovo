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

      <GrSlider :slides="images" />
      <GrBtn class="gr-btn gr-btn--green gr-index-gallery__btn">
        <NuxtLink to="/gallery"> Смотреть все фотографии</NuxtLink>
      </GrBtn>
    </section>
  </div>
</template>
<script src="./gr-index-gallery.js"></script>
