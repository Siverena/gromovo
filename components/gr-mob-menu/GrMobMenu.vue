<template>
  <nav class="gr-mob-menu" @click.self="closeMobMenu">
    <div
      class="gr-mob-menu__content"
      :class="getIsShowMob ? 'gr-mob-menu__content--show' : ''"
    >
      <div class="gr-mob-menu__information">
        <div class="gr-mob-menu__header">
          <GrLogo class="gr-mob-menu__logo" :mobMenu="mobMenu" />
          <button @click="closeMobMenu" class="gr-mob-menu__close">
            <GrCross />
          </button>
        </div>
        <GrNavColumn :mobMenu="mobMenu" />
        <hr />
        <GrCallback :mobMenu="mobMenu" />
        <div class="gr-mob-menu__info">
          <a
            href="mailto:info@gromovopark.ru"
            class="gr-mob-menu__info-item gr-mob-menu__mail"
          >
            <GrMail />
            info@gromovopark.ru
          </a>
          <p class="gr-mob-menu__info-item gr-mob-menu__location">
            <GrPin />
            Ленинградская область, Приозерский район, поселок Красноармейское
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>
<script src="./gr-mob-menu.js"></script>
