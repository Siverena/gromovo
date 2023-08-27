<template>
  <article class="gr-cottages-specials">
    <GrPageTitles class="gr-cottages-specials__title">
      <template v-slot:h1>Специальные предложения</template>
      <template v-slot:h2
        >Скидка 5% за фотографии вашего отдыха в Громово парк***</template
      >
    </GrPageTitles>
    <div class="gr-cottages-specials__content">
      <div class="gr-cottages-specials__text">
        <p>
          Добавляйте фотографии, сделанные в Громово Парк, в
          <a
            class="gr-cottages-specials__link gr-cottages-specials__link--vk"
            href="https://vk.com/gromovopark"
            >нашу группу в контакте</a
          >
          и получайте скидку 5%.
        </p>
        <p>Получить скидку просто:</p>
        <ul>
          <li>
            Зайдите в
            <a
              class="gr-cottages-specials__link gr-cottages-specials__link--vk"
              href="https://vk.com/gromovopark"
              >нашу группу в контакте</a
            >.
          </li>
          <li>
            Добавьте одну или несколько фотографий в альбом
            <a
              class="gr-cottages-specials__link gr-cottages-specials__link--vk"
              href="https://vk.com/album-70279822_219668334"
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
            <a
              class="gr-cottages-specials__link gr-cottages-specials__link--tel"
              href="tel:+78123850722"
              >+7 (812) 385-07-22</a
            >
            , продиктовав его менеджеру.
          </li>
        </ul>
        <p>
          ***Промокод действителен в течение 30 дней после его выдачи. Скидка
          действует на будние и выходные дни.
        </p>
        <NuxtLink
          class="gr-link gr-link--white gr-cottages-specials__link--page"
          to="/specials"
          >Все специальные предложения</NuxtLink
        >
      </div>
    </div>
  </article>
</template>
