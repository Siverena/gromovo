<template>
  <Head>
    <Title>Контакты | Громово парк</Title>
  </Head>
  <section class="gr-contacts" v-if="widthComputed">
    <div class="container">
      <div class="gr-contacts__head">
        <GrPageTitles :showLogo="false">
          <template v-slot:h1>Контакты</template>
          <template v-slot:h2>Контакты «Громово парк»</template>
        </GrPageTitles>
        <div class="gr-contacts__general gr-general">
          <div class="gr-general__item">
            <div class="gr-general__icon">
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11C19.9373 8.458 19.057 6.33833 17.359 4.641C15.661 2.94367 13.5413 2.06333 11 2C8.458 2.06267 6.33833 2.943 4.641 4.641C2.94367 6.339 2.06333 8.45867 2 11C2 12.854 2.74467 14.9737 4.234 17.359C5.72333 19.7443 7.97867 22.385 11 25.281C14.0207 22.385 16.276 19.7443 17.766 17.359C19.256 14.9737 20.0007 12.854 20 11ZM11 28C3.66667 21.3333 0 15.6667 0 11C0.0833333 7.87467 1.15633 5.281 3.219 3.219C5.28167 1.157 7.87533 0.084 11 0C14.1253 0.0833333 16.719 1.15633 18.781 3.219C20.843 5.28167 21.916 7.87533 22 11C22 15.6667 18.3333 21.3333 11 28ZM11 14C11.854 13.9793 12.5623 13.6877 13.125 13.125C13.6877 12.5623 13.969 11.854 13.969 11C13.969 10.146 13.6877 9.43767 13.125 8.875C12.5623 8.31233 11.854 8.031 11 8.031C10.146 8.031 9.43767 8.31233 8.875 8.875C8.31233 9.43767 8.031 10.146 8.031 11C8.031 11.854 8.31233 12.5623 8.875 13.125C9.43767 13.6877 10.146 13.9793 11 14ZM11 16C9.58333 15.958 8.40633 15.4683 7.469 14.531C6.53167 13.5937 6.042 12.4167 6 11C6.042 9.58333 6.53167 8.40633 7.469 7.469C8.40633 6.53167 9.58333 6.042 11 6C12.4167 6.042 13.5937 6.53167 14.531 7.469C15.4683 8.40633 15.958 9.58333 16 11C15.958 12.4167 15.4683 13.5937 14.531 14.531C13.5937 15.4683 12.4167 15.958 11 16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="gr-general__text">
              <span>База отдыха: </span>Ленинградская область, Приозерский
              район, поселок Красноармейское
            </div>
          </div>
          <div class="gr-general__item">
            <div class="gr-general__icon">
              <svg
                width="22"
                height="28"
                viewBox="0 0 22 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 11C19.9373 8.458 19.057 6.33833 17.359 4.641C15.661 2.94367 13.5413 2.06333 11 2C8.458 2.06267 6.33833 2.943 4.641 4.641C2.94367 6.339 2.06333 8.45867 2 11C2 12.854 2.74467 14.9737 4.234 17.359C5.72333 19.7443 7.97867 22.385 11 25.281C14.0207 22.385 16.276 19.7443 17.766 17.359C19.256 14.9737 20.0007 12.854 20 11ZM11 28C3.66667 21.3333 0 15.6667 0 11C0.0833333 7.87467 1.15633 5.281 3.219 3.219C5.28167 1.157 7.87533 0.084 11 0C14.1253 0.0833333 16.719 1.15633 18.781 3.219C20.843 5.28167 21.916 7.87533 22 11C22 15.6667 18.3333 21.3333 11 28ZM11 14C11.854 13.9793 12.5623 13.6877 13.125 13.125C13.6877 12.5623 13.969 11.854 13.969 11C13.969 10.146 13.6877 9.43767 13.125 8.875C12.5623 8.31233 11.854 8.031 11 8.031C10.146 8.031 9.43767 8.31233 8.875 8.875C8.31233 9.43767 8.031 10.146 8.031 11C8.031 11.854 8.31233 12.5623 8.875 13.125C9.43767 13.6877 10.146 13.9793 11 14ZM11 16C9.58333 15.958 8.40633 15.4683 7.469 14.531C6.53167 13.5937 6.042 12.4167 6 11C6.042 9.58333 6.53167 8.40633 7.469 7.469C8.40633 6.53167 9.58333 6.042 11 6C12.4167 6.042 13.5937 6.53167 14.531 7.469C15.4683 8.40633 15.958 9.58333 16 11C15.958 12.4167 15.4683 13.5937 14.531 14.531C13.5937 15.4683 12.4167 15.958 11 16Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="gr-general__text">
              <span> Офис:</span> г. Санкт-Петербург, м. Бухарестская, ул.
              Салова д. 56, лит. А, БЦ «Бизнес Сити»
            </div>
          </div>
          <div class="gr-general__item">
            <div class="gr-general__icon">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.468296 11.5L16.4993 27.531C16.6453 27.677 16.8173 27.7657 17.0153 27.797C17.2133 27.8283 17.406 27.8023 17.5933 27.719L25.4993 24.344C25.8326 24.198 26.0306 23.9533 26.0933 23.61C26.156 23.2667 26.0623 22.9697 25.8123 22.719L21.0313 17.906C20.8646 17.76 20.677 17.6663 20.4683 17.625C20.2596 17.5837 20.0616 17.615 19.8743 17.719L17.6863 18.813L9.1863 10.313L10.2803 8.125C10.3843 7.93767 10.4156 7.73967 10.3743 7.531C10.333 7.32233 10.2393 7.13467 10.0933 6.968L5.2803 2.187C5.0303 1.937 4.7333 1.84333 4.3893 1.906C4.0453 1.96867 3.80063 2.16667 3.6553 2.5L0.280296 10.406C0.196963 10.5933 0.170963 10.786 0.202296 10.984C0.23363 11.182 0.322296 11.354 0.468296 11.5ZM2.3743 10.563L4.9053 4.625L8.1863 7.875L6.7483 10.719L17.2793 21.25L20.1233 19.812L23.3733 23.093L17.4353 25.624L2.3743 10.563ZM13.9993 8V6C16.27 6.06267 18.1553 6.844 19.6553 8.344C21.1553 9.844 21.9366 11.7293 21.9993 14H19.9993C19.9573 12.2913 19.374 10.8747 18.2493 9.75C17.1246 8.62533 15.708 8.042 13.9993 8ZM13.9993 2V0C17.958 0.104 21.255 1.47367 23.8903 4.109C26.5256 6.74433 27.8953 10.0413 27.9993 14H25.9993C25.916 10.604 24.744 7.776 22.4833 5.516C20.2226 3.256 17.3946 2.084 13.9993 2Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="gr-general__text">
              <a href="tel:+78126434445">+7(812) 643-44-45</a>
            </div>
          </div>
          <div class="gr-general__item">
            <div class="gr-general__icon">
              <svg
                width="28"
                height="22"
                viewBox="0 0 28 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2V18C2.02067 18.5627 2.21867 19.0313 2.594 19.406C2.96933 19.7807 3.438 19.9787 4 20H24C24.5627 19.9793 25.0313 19.7813 25.406 19.406C25.7807 19.0307 25.9787 18.562 26 18V2H2ZM2 0H26C26.5627 0.0206667 27.0313 0.218667 27.406 0.594C27.7807 0.969333 27.9787 1.438 28 2V18C27.9793 19.1253 27.5887 20.068 26.828 20.828C26.0673 21.588 25.1247 21.9787 24 22H4C2.87467 21.9793 1.932 21.5887 1.172 20.828C0.412 20.0673 0.0213333 19.1247 0 18V2C0.0206667 1.43733 0.218667 0.968667 0.594 0.594C0.969333 0.219333 1.438 0.0213333 2 0ZM26.25 2L18.531 10.844C17.9477 11.49 17.2653 11.99 16.484 12.344C15.7027 12.698 14.8747 12.875 14 12.875C13.1253 12.875 12.2973 12.698 11.516 12.344C10.7347 11.99 10.0523 11.49 9.469 10.844L1.75 2H26.25ZM4.406 2L11 9.531C11.3753 9.96833 11.8233 10.3017 12.344 10.531C12.8647 10.7603 13.4167 10.875 14 10.875C14.5833 10.875 15.1353 10.7603 15.656 10.531C16.1767 10.3017 16.6247 9.96833 17 9.531L23.594 2H4.406Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="gr-general__text">
              <a href="mailto:info@gromovopark.ru">info@gromovopark.ru</a>
            </div>
          </div>
        </div>
      </div>
      <div class="gr-contacts__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9708.592191861435!2d30.092475824317148!3d60.74452222776538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469770ab22be833d%3A0x7d67b81393d11929!2z0JPRgNC-0LzQvtCy0L4g0J_QsNGA0Lo!5e1!3m2!1sru!2sru!4v1688736116812!5m2!1sru!2sru"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="gr-contacts__way gr-way">
        <h1 class="gr-site__h1">Как добраться</h1>
        <div class="gr-way__row">
          <div class="gr-way__item">
            <div class="gr-way__item-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 15H30"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 23V26C28 26.2652 27.8946 26.5196 27.7071 26.7071C27.5196 26.8946 27.2652 27 27 27H24C23.7348 27 23.4804 26.8946 23.2929 26.7071C23.1054 26.5196 23 26.2652 23 26V23"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 23V26C9 26.2652 8.89464 26.5196 8.70711 26.7071C8.51957 26.8946 8.26522 27 8 27H5C4.73478 27 4.48043 26.8946 4.29289 26.7071C4.10536 26.5196 4 26.2652 4 26V23"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 19H10"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 19H24"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M28 15L24.2639 6.59386C24.1854 6.4171 24.0572 6.26691 23.895 6.16151C23.7328 6.0561 23.5436 6 23.3501 6H8.64987C8.45644 6 8.26716 6.0561 8.10496 6.16151C7.94277 6.26691 7.81463 6.4171 7.73606 6.59386L4 15V23H28V15Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              На автомобиле
            </div>
            <p class="gr-way__text">Координаты GPS:</p>
            <p class="gr-way__text">Широта: 60°44′40.06″N (60.74446)</p>
            <p class="gr-way__text">Долгота: 30°5′32.74″E (30.092429)</p>
            <p class="gr-way__text">
              По Приозерскому шоссе до 86 км, в конце 86 км по указателю
              свернуть в сторону п. Красноармейское, проехать по главной дороге
              1 км. Справа будет КПП Коттеджного комплекса «Громово Парк».
            </p>
          </div>
          <div class="gr-way__item gr-way__item--map gr-way__item--image">
            <img
              src="@/assets/img/gr-contacts/map_2.png"
              alt=""
              height="499"
              class="gr-way__image"
            />
          </div>
        </div>
        <div class="gr-way__row">
          <div class="gr-way__item gr-way__item--plan1 gr-way__item--image">
            <img
              src="@/assets/img/gr-contacts/plan_1.png"
              alt=""
              height="366"
              class="gr-way__image"
            />
          </div>
          <div class="gr-way__item">
            <div class="gr-way__item-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.25 9H26.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.25 15H26.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.75 24H5.25V8C5.25 7.20435 5.56607 6.44129 6.12868 5.87868C6.69129 5.31607 7.45435 5 8.25 5H23.75C24.5456 5 25.3087 5.31607 25.8713 5.87868C26.4339 6.44129 26.75 7.20435 26.75 8V24Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M26.75 24V27C26.75 27.2652 26.6446 27.5196 26.4571 27.7071C26.2696 27.8946 26.0152 28 25.75 28H22.75C22.4848 28 22.2304 27.8946 22.0429 27.7071C21.8554 27.5196 21.75 27.2652 21.75 27V24"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.25 24V27C10.25 27.2652 10.1446 27.5196 9.95711 27.7071C9.76957 27.8946 9.51522 28 9.25 28H6.25C5.98478 28 5.73043 27.8946 5.54289 27.7071C5.35536 27.5196 5.25 27.2652 5.25 27V24"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 21C11.3284 21 12 20.3284 12 19.5C12 18.6716 11.3284 18 10.5 18C9.67157 18 9 18.6716 9 19.5C9 20.3284 9.67157 21 10.5 21Z"
                  fill="white"
                />
                <path
                  d="M21.5 21C22.3284 21 23 20.3284 23 19.5C23 18.6716 22.3284 18 21.5 18C20.6716 18 20 18.6716 20 19.5C20 20.3284 20.6716 21 21.5 21Z"
                  fill="white"
                />
              </svg>
              На автобусе
            </div>
            <p class="gr-way__text">
              От станции метро «Девяткино» автобус № 859 до поворота на п.
              Красноармейское.
            </p>
            <p class="gr-way__text">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28Z"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 7H21C22.0609 7 23.0783 7.42143 23.8284 8.17157C24.5786 8.92172 25 9.93913 25 11C25 12.0609 24.5786 13.0783 23.8284 13.8284C23.0783 14.5786 22.0609 15 21 15H9C7.67392 15 6.40215 15.5268 5.46447 16.4645C4.52678 17.4021 4 18.6739 4 20C4 21.3261 4.52678 22.5979 5.46447 23.5355C6.40215 24.4732 7.67392 25 9 25H22"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p class="gr-way__text">
              Дальше пешком 1 км по главной дороге в сторону п. Красноармейское.
            </p>
          </div>
        </div>
        <div class="gr-way__row">
          <div class="gr-way__item gr-way__item--train">
            <div class="gr-way__item-title">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 16H26.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.5 9H26.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 26L9 30"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20 26L23 30"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.5 4H8.5C6.84315 4 5.5 5.34315 5.5 7V23C5.5 24.6569 6.84315 26 8.5 26H23.5C25.1569 26 26.5 24.6569 26.5 23V7C26.5 5.34315 25.1569 4 23.5 4Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 9V16"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.5 23C11.3284 23 12 22.3284 12 21.5C12 20.6716 11.3284 20 10.5 20C9.67157 20 9 20.6716 9 21.5C9 22.3284 9.67157 23 10.5 23Z"
                  fill="white"
                />
                <path
                  d="M21.5 23C22.3284 23 23 22.3284 23 21.5C23 20.6716 22.3284 20 21.5 20C20.6716 20 20 20.6716 20 21.5C20 22.3284 20.6716 23 21.5 23Z"
                  fill="white"
                />
              </svg>
              На электричке
            </div>
            <p class="gr-way__text">
              Электричкой с Финляндского вокзала (Приозерское направление) до
              станции «Громово».
            </p>
            <p class="gr-way__text">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 28C26.6569 28 28 26.6569 28 25C28 23.3431 26.6569 22 25 22C23.3431 22 22 23.3431 22 25C22 26.6569 23.3431 28 25 28Z"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 7H21C22.0609 7 23.0783 7.42143 23.8284 8.17157C24.5786 8.92172 25 9.93913 25 11C25 12.0609 24.5786 13.0783 23.8284 13.8284C23.0783 14.5786 22.0609 15 21 15H9C7.67392 15 6.40215 15.5268 5.46447 16.4645C4.52678 17.4021 4 18.6739 4 20C4 21.3261 4.52678 22.5979 5.46447 23.5355C6.40215 24.4732 7.67392 25 9 25H22"
                  stroke="#010101"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <p class="gr-way__text gr-way__text--bold">Дальше:</p>
            <ul class="gr-way__list">
              <li class="gr-way__list-item">
                Такси от станции «Громово».
                <ul class="gr-way__list gr-way__list--2">
                  <li class="gr-way__list-item gr-way__list-item--2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.125 8.4375H16.875"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 12.9375V14.625C15.75 14.7742 15.6907 14.9173 15.5852 15.0227C15.4798 15.1282 15.3367 15.1875 15.1875 15.1875H13.5C13.3508 15.1875 13.2077 15.1282 13.1023 15.0227C12.9968 14.9173 12.9375 14.7742 12.9375 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.0625 12.9375V14.625C5.0625 14.7742 5.00324 14.9173 4.89775 15.0227C4.79226 15.1282 4.64918 15.1875 4.5 15.1875H2.8125C2.66332 15.1875 2.52024 15.1282 2.41475 15.0227C2.30926 14.9173 2.25 14.7742 2.25 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.5 10.6875H5.625"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.375 10.6875H13.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 8.4375L13.6485 3.70905C13.6043 3.60962 13.5322 3.52514 13.441 3.46585C13.3497 3.40656 13.2433 3.375 13.1344 3.375H4.86555C4.75675 3.375 4.65027 3.40656 4.55904 3.46585C4.46781 3.52514 4.39573 3.60962 4.35154 3.70905L2.25 8.4375V12.9375H15.75V8.4375Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div>
                      Такси «Вуокса» &nbsp;
                      <a class="gr-way__link" href="tel:+79213398485">
                        8(921) 339-84-85 </a
                      >;&nbsp;
                      <a class="gr-way__link" href="tel:+79990294202">
                        8(999) 029-42-02</a
                      >
                      .
                    </div>
                  </li>
                  <li class="gr-way__list-item gr-way__list-item--2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.125 8.4375H16.875"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 12.9375V14.625C15.75 14.7742 15.6907 14.9173 15.5852 15.0227C15.4798 15.1282 15.3367 15.1875 15.1875 15.1875H13.5C13.3508 15.1875 13.2077 15.1282 13.1023 15.0227C12.9968 14.9173 12.9375 14.7742 12.9375 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.0625 12.9375V14.625C5.0625 14.7742 5.00324 14.9173 4.89775 15.0227C4.79226 15.1282 4.64918 15.1875 4.5 15.1875H2.8125C2.66332 15.1875 2.52024 15.1282 2.41475 15.0227C2.30926 14.9173 2.25 14.7742 2.25 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.5 10.6875H5.625"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.375 10.6875H13.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 8.4375L13.6485 3.70905C13.6043 3.60962 13.5322 3.52514 13.441 3.46585C13.3497 3.40656 13.2433 3.375 13.1344 3.375H4.86555C4.75675 3.375 4.65027 3.40656 4.55904 3.46585C4.46781 3.52514 4.39573 3.60962 4.35154 3.70905L2.25 8.4375V12.9375H15.75V8.4375Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div>
                      Такси Приозёрского района &nbsp;
                      <a class="gr-way__link" href="tel:+79643724082">
                        8(964) 372-40-82</a
                      >
                    </div>
                  </li>
                  <li class="gr-way__list-item gr-way__list-item--2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.125 8.4375H16.875"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 12.9375V14.625C15.75 14.7742 15.6907 14.9173 15.5852 15.0227C15.4798 15.1282 15.3367 15.1875 15.1875 15.1875H13.5C13.3508 15.1875 13.2077 15.1282 13.1023 15.0227C12.9968 14.9173 12.9375 14.7742 12.9375 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.0625 12.9375V14.625C5.0625 14.7742 5.00324 14.9173 4.89775 15.0227C4.79226 15.1282 4.64918 15.1875 4.5 15.1875H2.8125C2.66332 15.1875 2.52024 15.1282 2.41475 15.0227C2.30926 14.9173 2.25 14.7742 2.25 14.625V12.9375"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.5 10.6875H5.625"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.375 10.6875H13.5"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.75 8.4375L13.6485 3.70905C13.6043 3.60962 13.5322 3.52514 13.441 3.46585C13.3497 3.40656 13.2433 3.375 13.1344 3.375H4.86555C4.75675 3.375 4.65027 3.40656 4.55904 3.46585C4.46781 3.52514 4.39573 3.60962 4.35154 3.70905L2.25 8.4375V12.9375H15.75V8.4375Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <div>
                      Такси "РАУТУ" &nbsp;
                      <a class="gr-way__link" href="tel:+79013136133">
                        8(901) 313-61-33</a
                      >;&nbsp;<a class="gr-way__link" href="tel:+79213023400">
                        8(921) 302-34-00</a
                      >;&nbsp;

                      <a class="gr-way__link" href="tel:+78137964689">
                        8(81379) 64-689</a
                      >
                    </div>
                  </li>
                </ul>
              </li>
              <li class="gr-way__list-item">
                Пешком по Приозерскому шоссе 3 км (30—40 минут) до поворота на
                п. Красноармейское, повернуть налево, далее 1 км по главной
                дороге до КПП Коттеджного комплекса «Громово Парк».
              </li>
            </ul>
          </div>
          <div class="gr-way__item gr-way__item--cone gr-way__item--image">
            <img
              src="@/assets/img/gr-contacts/cone_2.png"
              alt=""
              class="gr-way__image"
              height="520"
            />
          </div>
          <div
            class="gr-way__item gr-way__item--map-mob gr-way__item--image"
            v-if="isMobileVersion"
          >
            <img
              src="@/assets/img/gr-contacts/map_2.png"
              alt=""
              height="499"
              class="gr-way__image"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapState } from 'pinia';
import { useAdaptiveStore } from '@/stores/adaptiveStore.js';
export default {
  computed: {
    ...mapState(useAdaptiveStore, ['isMobileVersion', 'widthComputed']),
  },
};
</script>
