<template>
  <section class="gr-services">
    <div class="container">
      <GrBreadCrumbs />
      <GrPageTitles :showLogo="true">
        <template v-slot:h1>Услуги</template>
        <template v-slot:h2
          >Все для комфортного и приятного отдыха загородом</template
        >
      </GrPageTitles>
      <div class="gr-service">
        <GrServiceSlider :slides="bathHouse" />
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">Баня</p>
          <p class="gr-service__text">
            Проведите несколько спокойных часов в бане, наполненной ароматами
            соснового леса и березовых листьев.
          </p>
          <p class="gr-service__text">
            После удачной рыбалки или отдыха на чистом лесном воздухе баня
            замечательна вдвойне, а на следующее утро вам гарантирован заряд
            бодрости.
          </p>
          <p class="gr-service__text">
            В нашей бане с комфортом могут единовременно отдохнуть 6-8 человек.
          </p>

          <p class="gr-service__link">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.5C6.3 6.5 2 8.65 2 11.5C2 13.95 5.19 15.88 9.71 16.38L9.29 16.79C9.19627 16.883 9.12188 16.9936 9.07111 17.1154C9.02034 17.2373 8.9942 17.368 8.9942 17.5C8.9942 17.632 9.02034 17.7627 9.07111 17.8846C9.12188 18.0064 9.19627 18.117 9.29 18.21C9.38296 18.3037 9.49356 18.3781 9.61542 18.4289C9.73728 18.4797 9.86799 18.5058 10 18.5058C10.132 18.5058 10.2627 18.4797 10.3846 18.4289C10.5064 18.3781 10.617 18.3037 10.71 18.21L12.71 16.21C12.801 16.1149 12.8724 16.0028 12.92 15.88C13.02 15.6365 13.02 15.3635 12.92 15.12C12.8724 14.9972 12.801 14.8851 12.71 14.79L10.71 12.79C10.5217 12.6017 10.2663 12.4959 10 12.4959C9.7337 12.4959 9.4783 12.6017 9.29 12.79C9.1017 12.9783 8.99591 13.2337 8.99591 13.5C8.99591 13.7663 9.1017 14.0217 9.29 14.21L9.41 14.32C6 13.84 4 12.5 4 11.5C4 10.28 7.12 8.5 12 8.5C16.88 8.5 20 10.28 20 11.5C20 12.33 18.55 13.5 15.79 14.1C15.6594 14.125 15.535 14.1759 15.4243 14.2495C15.3135 14.3232 15.2186 14.4182 15.145 14.5291C15.0715 14.6399 15.0207 14.7643 14.9958 14.8949C14.9709 15.0256 14.9724 15.1599 15 15.29C15.0273 15.4188 15.0798 15.541 15.1544 15.6495C15.2291 15.758 15.3244 15.8507 15.435 15.9222C15.5456 15.9938 15.6692 16.0428 15.7988 16.0664C15.9283 16.0901 16.0613 16.0879 16.19 16.06C19.84 15.26 22 13.56 22 11.5C22 8.65 17.7 6.5 12 6.5Z"
                fill="white"
              />
            </svg>
            <span>3D тур</span>
          </p>
        </div>
      </div>
      <div class="gr-service">
        <div class="gr-service__description gr-service__description--white">
          <p class="gr-service__title">Рыбалка</p>
          <p class="gr-service__text">
            База отдыха «Громово Парк» находится на берегу озера Комсомольское.
            Проведите несколько спокойных часов в бане, наполненной ароматами
            соснового леса и березовых листьев.
          </p>
          <p class="gr-service__text">
            Основную рыбу составляет окунь, плотва, ерш, уклейка, попадается
            подлещик, а в некоторых местах - лещ.
          </p>
          <p class="gr-service__text">
            На спиннинг ловится щука и судак. Зимой на каменных грядах
            попадается довольно много налима.
          </p>
          <p class="gr-service__text">
            Мы предлагаем прокат лодок на веслах и удочек летом, и буров и
            удочек зимой.
          </p>

          <p class="gr-service__link">
            <span>Карта глубин оз. Комсомольское</span>
          </p>
        </div>
        <GrServiceSlider :slides="fishing" :right="true" />
      </div>
      <div class="gr-service">
        <GrServiceSlider :slides="winterEquipment" />
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">Прокат зимнего инвентаря</p>
          <p class="gr-service__text">
            На территории базы отдыха «Громово Парк» обустроена снежная горка,
            на которой можно прокатиться на ватрушках.
          </p>
          <p class="gr-service__text">
            В лесу можно совершить прогулку на финских санях.
          </p>
          <p class="gr-service__text">
            В холодную погоду мы заливаем каток на Комсомольском озере, на
            котором можно покататься на коньках.
          </p>
          <p class="gr-service__text">
            Весь инвентарь для зимнего отдыха имеется в наличии в прокате
          </p>

          <p class="gr-service__link">
            <span>Посмотреть весь инвентарь</span>
          </p>
        </div>
      </div>
      <div class="gr-service">
        <div class="gr-service__description gr-service__description--white">
          <p class="gr-service__title">Прокат летнего инвентаря</p>
          <p class="gr-service__text">
            Сняв коттедж в «Громово Парк», вы, конечно же, не будете сидеть на
            месте. Для наших гостей, мы предлагаем различные варианты отдыха на
            свежем воздухе.
          </p>
          <p class="gr-service__text">
            Для любителей велопрогулок на базе отдыха «Громово Парк»
            предоставляются велосипеды в прокат. В нашем прокате найдутся
            велосипеды для всей семьи как взрослые, так детские и подростковые.
          </p>
          <p class="gr-service__text">
            Для тех, кто хотел бы размять мышцы во время игры в бадминтон, мы
            приготовили все необходимое - отличные ракетки, воланы.
          </p>

          <p class="gr-service__link">
            <span>Посмотреть весь инвентарь</span>
          </p>
        </div>
        <GrServiceSlider :slides="summerInventory" :right="true" />
      </div>
      <div class="gr-service">
        <div class="gr-service__images">
          <img src="@/assets/img/gr-services/other/1.png" alt="" />
          <img src="@/assets/img/gr-services/other/2.png" alt="" />
          <img src="@/assets/img/gr-services/other/3.png" alt="" />
          <img src="@/assets/img/gr-services/other/4.png" alt="" />
        </div>
        <div class="gr-service__description gr-service__description--green">
          <p class="gr-service__title">А также:</p>
          <ul>
            <li>Мангальная площадка у каждого коттеджа</li>
            <li>Современная детская площадка на территории базы отдыха</li>
            <li>Нежный песчаный пляж на берегу оз. Комсомольское</li>
            <li>
              Богатейший лес с чистым воздухом и сосновым ароматом, в котором в
              зависимости от сезоны вы сможете собирать грибы и ягоды
            </li>
            <li>Интересные настольные игры</li>
          </ul>

          <p class="gr-service__link">
            <span>Посмотреть цены на услуги</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import bathHouse from '@/stores/data/d-bathhouse.js';
import winterEquipment from '@/stores/data/d-winter-equipment.js';
import summerInventory from '@/stores/data/d-summer-inventory.js';
import fishing from '@/stores/data/d-fishing.js';
export default {
  data() {
    return {
      bathHouse: bathHouse,
      winterEquipment: winterEquipment,
      fishing: fishing,
      summerInventory: summerInventory,
    };
  },
};
</script>
