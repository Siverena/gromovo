<template>
  <div class="gr-offers" v-if="widthComputed">
    <article class="gr-offer">
      <div class="gr-offer__bg gr-offer__bg--first"></div>
      <img
        class="gr-offer__image gr-offer__image--first"
        src="@/assets/img/gr-offer/photo_1.png"
        alt=""
      />
      <div class="gr-offer__content">
        <div class="gr-offer__title">
          СКИДКА 5% ЗА ФОТОГРАФИИ ВАШЕГО ОТДЫХА В ГРОМОВО ПАРК***
        </div>
        <div class="gr-offer__text">
          <p>
            Добавляйте фотографии, сделанные в Громово Парк, в
            <a href="https://vk.com/gromovopark">нашу группу в контакте</a>
            и получайте скидку 5%. Получить скидку просто:
          </p>
          <ul>
            <li>
              Зайдите в
              <a href="https://vk.com/gromovopark">нашу группу в контакте</a>.
            </li>
            <li>
              Добавьте одну или несколько фотографий в альбом
              <a href="https://vk.com/album-70279822_219668334"
                >"Фотографии гостей базы отдыха"</a
              >
              .
            </li>
            <li>Администратор группы вышлет вам промокод*.</li>
            <li>
              Вы получаете скидку 5%, если дата вашего следующего заезда не
              позднее 30 дней с момента получения промокода.
            </li>
            <li>
              Забронируйте коттедж на нашем сайте, введя полученный промокод в
              поле "Код скидки", или по телефону
              <a class="gr-offer__link" href="tel:+78123850722"
                >+7&nbsp;(812)&nbsp;385&#8209;07&#8209;22</a
              >
              , продиктовав его менеджеру.
            </li>
          </ul>
          <p>
            ***Промокод действителен в течение 30 дней после его выдачи. Скидка
            действует на будние и выходные дни.
          </p>
        </div>
      </div>
    </article>

    <div class="gr-special__cone-mobile" v-if="isMobileVersion">
      <GrOfferCone />
    </div>
    <article class="gr-offer">
      <div class="gr-offer__bg gr-offer__bg--second"></div>
      <div class="gr-offer__content">
        <div class="gr-offer__title">СКИДКА до 10% НА ДЕНЬ РОЖДЕНИЯ*</div>
        <div class="gr-offer__text">
          <p>Приезжайте в Громово Парк отмечать свой день рождения!</p>
          <p>
            *Бронирование ТОЛЬКО по телефону
            <a class="gr-offer__link" href="tel:+78123850722"
              >+7&nbsp;(812)&nbsp;385&#8209;07&#8209;22</a
            >
            . Не суммируется с другими скидками.
          </p>
        </div>
      </div>
      <img
        class="gr-offer__image gr-offer__image--second"
        src="@/assets/img/gr-offer/photo_2.png"
        alt=""
      />
    </article>
    <div class="gr-special__cone-mobile" v-if="isMobileVersion">
      <GrOfferCone />
    </div>
    <article class="gr-offer">
      <div class="gr-offer__bg gr-offer__bg--third"></div>
      <img
        class="gr-offer__image gr-offer__image--third"
        src="@/assets/img/gr-offer/photo_3.png"
        alt=""
      />
      <div class="gr-offer__content">
        <div class="gr-offer__title">СКИДКИ до 10% НА ГОДОВЩИНУ СВАДЬБЫ*</div>
        <div class="gr-offer__text">
          <p>Отмечайте важные события в Громово Парк</p>
          <p>
            *Бронирование ТОЛЬКО по телефону
            <a class="gr-offer__link" href="tel:+78123850722"
              >+7&nbsp;(812)&nbsp;385&#8209;07&#8209;22</a
            >
            . Не суммируется с другими скидками.
          </p>
        </div>
      </div>
    </article>
    <div class="gr-special__cone-mobile" v-if="isMobileVersion">
      <GrOfferCone />
    </div>
    <article class="gr-offer">
      <div class="gr-offer__bg gr-offer__bg--fifth"></div>

      <div class="gr-offer__content">
        <div class="gr-offer__title">ИМЕНИНЫ СО СКИДКОЙ до 10%*</div>
        <div class="gr-offer__text">
          <p>Получите именную скидку до 10%!</p>
          <p>
            *Бронирование ТОЛЬКО по телефону
            <a class="gr-offer__link" href="tel:+78123850722"
              >+7&nbsp;(812)&nbsp;385&#8209;07&#8209;22</a
            >
            . Не суммируется с другими скидками.
          </p>
        </div>
      </div>
      <img
        class="gr-offer__image gr-offer__image--fifth"
        src="@/assets/img/gr-offer/photo_5.png"
        alt=""
      />
    </article>

    <article class="gr-offer">
      <div class="gr-offer__bg gr-offer__bg--fourth"></div>
      <img
        class="gr-offer__image gr-offer__image--fourth"
        src="@/assets/img/gr-offer/photo_4.png"
        alt=""
      />
      <div class="gr-offer__content gr-offer__content--fourth">
        <div class="gr-offer__text gr-offer__text--fourth">
          <p>
            Узнайте больше о постоянных акциях в Громово Парк по телефону
            <a class="gr-offer__link" href="tel:+78123850722"
              >+7&nbsp;(812)&nbsp;385&#8209;07&#8209;22</a
            >
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
<script src="./gr-offers.js"></script>
