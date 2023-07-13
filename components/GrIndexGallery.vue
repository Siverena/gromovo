<template>
  <section class="gr-index-gallery">
    <div class="gr-index-gallery__right">
      <div class="gr-index-gallery__row">
        <div class="gr-index-gallery__text">
          <h1 class="gr-site__h1">Лучшие виды</h1>
          <h2 class="gr-site__h2">
            Уютные коттеджи, красивые закаты и рассветы в любое время года
          </h2>
        </div>
        <img
          src="@/assets/img/gr-index-gallery/photo_1.jpg"
          width="390"
          height="265"
          alt=""
        />
      </div>
      <img
        src="@/assets/img/gr-index-gallery/photo_2.jpg"
        width="898"
        height="504"
        alt=""
      />
    </div>
    <div class="gr-index-gallery__left">
      <img
        src="@/assets/img/gr-index-gallery/photo_3.jpg"
        width="290"
        height="466"
        alt=""
      />
      <img
        src="@/assets/img/gr-index-gallery/photo_4.jpg"
        width="290"
        height="130"
        alt=""
      />
      <img
        src="@/assets/img/gr-index-gallery/photo_5.jpg"
        width="290"
        height="170"
        alt=""
      />
    </div>
    <GrBtn class="gr-btn gr-btn--green gr-index-gallery__btn">
      <NuxtLink to="/galleries"> Смотреть все фотографии</NuxtLink>
    </GrBtn>
  </section>
</template>
