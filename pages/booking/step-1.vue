<template>
  <Head>
    <Title>Бронирование. Шаг 1 | Громово парк</Title>
  </Head>

  <div class="gr-booking-1" v-if="showBookingForm">
    <div class="container">
      <GrPageTitles>
        <template v-slot:h1>Бронирование. Шаг 1</template>
      </GrPageTitles>

      <GrStepsHeader />
      <div class="gr-booking-1__nav">
        <NuxtLink
          to="/cottages"
          class="gr-booking-1__link gr-booking-1__link--preм"
          ><svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.34945 2.64183L9.34262 2.64791L9.33625 2.65447L4.16543 7.98076C4.02666 8.12022 3.95312 8.29494 3.95312 8.49211C3.95312 8.68903 4.02617 8.8647 4.15786 9.01092L4.15773 9.01104L4.16424 9.01774L9.33624 14.3457L9.34262 14.3523L9.34945 14.3584C9.48874 14.4823 9.65716 14.5466 9.84363 14.5466C10.0392 14.5466 10.211 14.4703 10.3484 14.3329C10.4858 14.1954 10.5621 14.0237 10.5621 13.8281C10.5621 13.6331 10.4863 13.4618 10.3496 13.3246L5.64579 8.50011L10.3496 3.67568C10.4863 3.53844 10.5621 3.36711 10.5621 3.17211C10.5621 2.97654 10.4858 2.80478 10.3484 2.66734C10.211 2.52989 10.0392 2.45361 9.84363 2.45361C9.65716 2.45361 9.48874 2.51791 9.34945 2.64183Z"
              fill="#010101"
              stroke="#010101"
              stroke-width="0.5"
            />
          </svg>

          <span>К коттеджам</span>
        </NuxtLink>
        <p class="gr-booking-1__step-name">Ввод данных для бронирования</p>
        <NuxtLink
          :to="disabledBtn ? '' : '/booking/step-2'"
          class="gr-booking-1__link gr-booking-1__link--next"
          :class="{
            'gr-booking-1__link--disabled': disabledBtn,
          }"
          @click="submitForm"
        >
          <span>Продолжить бронирование</span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.15017 14.3584L6.15701 14.3523L6.16338 14.3458L11.3342 9.019C11.4751 8.87742 11.5465 8.69915 11.5465 8.49964C11.5465 8.30013 11.4751 8.12185 11.3342 7.98028L6.16338 2.65351L6.15701 2.64694L6.15017 2.64086C6.01088 2.51693 5.84247 2.45264 5.656 2.45264C5.46953 2.45264 5.30112 2.51693 5.16183 2.64086L5.078 2.71544V2.74097C4.98813 2.86758 4.9375 3.01252 4.9375 3.17214C4.9375 3.36713 5.01333 3.53846 5.15001 3.6757L9.85384 8.50014L5.14998 13.3246C5.01332 13.4618 4.9375 13.6332 4.9375 13.8281C4.9375 14.0237 5.01378 14.1955 5.15122 14.3329C5.28867 14.4704 5.46043 14.5466 5.656 14.5466C5.84247 14.5466 6.01088 14.4823 6.15017 14.3584Z"
              fill="#010101"
              stroke="#010101"
              stroke-width="0.5"
            />
          </svg>
        </NuxtLink>
      </div>
      <form action="" class="gr-booking-1__form" @submit.prevent="submitForm">
        <div class="gr-booking-1__fields-block gr-booking-1__inputs">
          <template v-for="(field, key) in fields" :key="key">
            <div
              class="gr-booking-1__field gr-booking-1__field--input"
              v-if="field.name"
              :ref="field.name"
            >
              <label class="gr-booking-1__label" :for="field.name"
                >{{ field.label
                }}<span v-if="field.required" class="gr-booking-1__star"
                  >*</span
                ></label
              >
              <InputMask
                v-if="field.mask"
                class="gr-booking-1__input"
                :class="{
                  'gr-booking-1__input--error': field.error,
                }"
                :type="field.type"
                :name="field.name"
                :id="field.name"
                :mask="field.mask"
                :unmask="true"
                :autoClear="false"
                :unstyled="true"
                v-model.trim="field.value"
                :placeholder="field.placeholder"
                @focusout="validateField(field)"
              />
              <input
                v-else
                class="gr-booking-1__input"
                :class="{
                  'gr-booking-1__input--error': field.error,
                }"
                :type="field.type"
                :name="field.name"
                :id="field.name"
                v-model.trim="field.value"
                :placeholder="field.placeholder"
                @focusout="validateField(field)"
              />
              <span class="gr-booking-1__error" v-if="field.error">{{
                field.error
              }}</span>
            </div>
          </template>
        </div>
        <p class="gr-booking-1__title">Размещение</p>
        <div class="gr-booking-1__fields-block gr-booking-1__selects">
          <div class="gr-booking-1__field">
            <label for="" class="gr-booking-1__label">
              Количество гостей<span class="gr-booking-1__star">*</span>
              <p>Количество основных гостей и дополнительных ВЗРОСЛЫХ мест</p>
            </label>
            <div
              class="gr-booking-1__select"
              @click.stop="toggleSelect('numberOfAdults')"
            >
              {{ numbersOfPersons.numberOfAdults }}
              <svg
                class="gr-booking-1__select-open"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0001 5.32801L8.00011 10.203L3.00011 5.32801C2.90645 5.23435 2.79711 5.18751 2.67211 5.18751C2.54711 5.18751 2.43778 5.23435 2.34411 5.32801C2.25045 5.42168 2.20361 5.53101 2.20361 5.65601C2.20361 5.78101 2.24528 5.88518 2.32861 5.96851L7.65661 11.156C7.75028 11.2497 7.86495 11.2965 8.00061 11.2965C8.13628 11.2965 8.25095 11.2497 8.34461 11.156L13.6726 5.98401C13.7559 5.89035 13.7976 5.77835 13.7976 5.64801C13.7976 5.51768 13.7508 5.40835 13.6571 5.32001C13.5634 5.23168 13.4541 5.18735 13.3291 5.18701C13.2041 5.18668 13.0948 5.23351 13.0011 5.32751L13.0001 5.32801Z"
                  fill="#010101"
                />
              </svg>
              <ul
                class="gr-booking-1__select-list"
                name=""
                id=""
                v-if="currentSelectOpen === 'numberOfAdults'"
              >
                <template v-for="(count, key) in placementCount" :key="key">
                  <li
                    class="gr-booking-1__select-item"
                    :value="count"
                    :class="{
                      'gr-booking-1__select-item--selected':
                        count === numbersOfPersons.numberOfAdults,
                    }"
                    @click.stop="setNumber('numberOfAdults', count)"
                  >
                    {{ count }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="gr-booking-1__field">
            <label for="" class="gr-booking-1__label">
              Кол-во детей от 3 до 12 лет
              <p>
                Указывается, если нужны ДОПОЛНИТЕЛЬНЫЕ места для детей от 3 до
                12 лет
              </p>
            </label>
            <div
              class="gr-booking-1__select"
              @click.stop="toggleSelect('numberOfTeenagers')"
            >
              {{ numbersOfPersons.numberOfTeenagers }}
              <svg
                class="gr-booking-1__select-open"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0001 5.32801L8.00011 10.203L3.00011 5.32801C2.90645 5.23435 2.79711 5.18751 2.67211 5.18751C2.54711 5.18751 2.43778 5.23435 2.34411 5.32801C2.25045 5.42168 2.20361 5.53101 2.20361 5.65601C2.20361 5.78101 2.24528 5.88518 2.32861 5.96851L7.65661 11.156C7.75028 11.2497 7.86495 11.2965 8.00061 11.2965C8.13628 11.2965 8.25095 11.2497 8.34461 11.156L13.6726 5.98401C13.7559 5.89035 13.7976 5.77835 13.7976 5.64801C13.7976 5.51768 13.7508 5.40835 13.6571 5.32001C13.5634 5.23168 13.4541 5.18735 13.3291 5.18701C13.2041 5.18668 13.0948 5.23351 13.0011 5.32751L13.0001 5.32801Z"
                  fill="#010101"
                />
              </svg>
              <ul
                class="gr-booking-1__select-list"
                name=""
                id=""
                v-if="currentSelectOpen === 'numberOfTeenagers'"
              >
                <li
                  class="gr-booking-1__select-item"
                  :value="0"
                  :class="{
                    'gr-booking-1__select-item--selected':
                      0 === numbersOfPersons.numberOfTeenagers,
                  }"
                  @click.stop="setNumber('numberOfTeenagers', 0)"
                >
                  0
                </li>
                <template v-for="(count, key) in placementCount" :key="key">
                  <li
                    class="gr-booking-1__select-item"
                    :value="count"
                    :class="{
                      'gr-booking-1__select-item--selected':
                        count === numbersOfPersons.numberOfTeenagers,
                    }"
                    @click.stop="setNumber('numberOfTeenagers', count)"
                  >
                    {{ count }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
          <div class="gr-booking-1__field">
            <label for="" class="gr-booking-1__label">
              Кол-во детей до 3 лет
              <p>Бесплатно без предоставления спального места</p>
            </label>
            <div
              class="gr-booking-1__select"
              @click.stop="toggleSelect('numberOfchildren')"
            >
              {{ numbersOfPersons.numberOfchildren }}
              <svg
                class="gr-booking-1__select-open"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0001 5.32801L8.00011 10.203L3.00011 5.32801C2.90645 5.23435 2.79711 5.18751 2.67211 5.18751C2.54711 5.18751 2.43778 5.23435 2.34411 5.32801C2.25045 5.42168 2.20361 5.53101 2.20361 5.65601C2.20361 5.78101 2.24528 5.88518 2.32861 5.96851L7.65661 11.156C7.75028 11.2497 7.86495 11.2965 8.00061 11.2965C8.13628 11.2965 8.25095 11.2497 8.34461 11.156L13.6726 5.98401C13.7559 5.89035 13.7976 5.77835 13.7976 5.64801C13.7976 5.51768 13.7508 5.40835 13.6571 5.32001C13.5634 5.23168 13.4541 5.18735 13.3291 5.18701C13.2041 5.18668 13.0948 5.23351 13.0011 5.32751L13.0001 5.32801Z"
                  fill="#010101"
                />
              </svg>
              <ul
                class="gr-booking-1__select-list"
                name=""
                id=""
                v-if="currentSelectOpen === 'numberOfchildren'"
              >
                <li
                  class="gr-booking-1__select-item"
                  :value="0"
                  :class="{
                    'gr-booking-1__select-item--selected':
                      0 === numbersOfPersons.numberOfchildren,
                  }"
                  @click.stop="setNumber('numberOfchildren', 0)"
                >
                  0
                </li>
                <template v-for="(count, key) in 2" :key="key">
                  <li
                    class="gr-booking-1__select-item"
                    :value="count"
                    :class="{
                      'gr-booking-1__select-item--selected':
                        count === numbersOfPersons.numberOfchildren,
                    }"
                    @click.stop="setNumber('numberOfchildren', count)"
                  >
                    {{ count }}
                  </li>
                </template>
              </ul>
            </div>
          </div>

          <div class="gr-booking-1__field">
            <label for="" class="gr-booking-1__label">
              Места без размещения
              <p>Максимум два человека на коттедж</p>
            </label>
            <div
              class="gr-booking-1__select"
              @click.stop="toggleSelect('placesWithoutAccommodation')"
            >
              {{ numbersOfPersons.placesWithoutAccommodation }}
              <svg
                class="gr-booking-1__select-open"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.0001 5.32801L8.00011 10.203L3.00011 5.32801C2.90645 5.23435 2.79711 5.18751 2.67211 5.18751C2.54711 5.18751 2.43778 5.23435 2.34411 5.32801C2.25045 5.42168 2.20361 5.53101 2.20361 5.65601C2.20361 5.78101 2.24528 5.88518 2.32861 5.96851L7.65661 11.156C7.75028 11.2497 7.86495 11.2965 8.00061 11.2965C8.13628 11.2965 8.25095 11.2497 8.34461 11.156L13.6726 5.98401C13.7559 5.89035 13.7976 5.77835 13.7976 5.64801C13.7976 5.51768 13.7508 5.40835 13.6571 5.32001C13.5634 5.23168 13.4541 5.18735 13.3291 5.18701C13.2041 5.18668 13.0948 5.23351 13.0011 5.32751L13.0001 5.32801Z"
                  fill="#010101"
                />
              </svg>
              <ul
                class="gr-booking-1__select-list"
                name=""
                id=""
                v-if="currentSelectOpen === 'placesWithoutAccommodation'"
              >
                <li
                  class="gr-booking-1__select-item"
                  :value="0"
                  :class="{
                    'gr-booking-1__select-item--selected':
                      0 === numbersOfPersons.placesWithoutAccommodation,
                  }"
                  @click.stop="setNumber('placesWithoutAccommodation', 0)"
                >
                  0
                </li>
                <template v-for="(count, key) in 2" :key="key">
                  <li
                    class="gr-booking-1__select-item"
                    :value="count"
                    :class="{
                      'gr-booking-1__select-item--selected':
                        count === numbersOfPersons.placesWithoutAccommodation,
                    }"
                    @click.stop="setNumber('placesWithoutAccommodation', count)"
                  >
                    {{ count }}
                  </li>
                </template>
              </ul>
            </div>
          </div>
        </div>
        <div class="gr-booking-1__fields-block gr-booking-1__checkboxes">
          <div class="gr-booking-1__field gr-booking-1__field--checkbox">
            <label
              for="withoutAnimals"
              class="gr-booking-1__label gr-booking-1__label--checkbox"
            >
              <div
                class="gr-booking-1__checkbox"
                :class="
                  !agrees.withoutAnimals && agreementError
                    ? 'gr-booking-1__checkbox--error'
                    : ''
                "
              >
                <svg
                  v-if="agrees.withoutAnimals"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.37233 5.93846L1.10564 3.67177C1.0126 3.57873 0.901572 3.55008 0.772551 3.58583C0.64353 3.62158 0.562978 3.70213 0.530894 3.82749C0.498811 3.95284 0.52929 4.06559 0.622332 4.16574L3.37233 6.91574L8.87233 1.41574C8.93673 1.34401 8.96721 1.26162 8.96377 1.16858C8.96033 1.07554 8.92447 0.994985 8.85618 0.926923C8.78788 0.85886 8.70905 0.824829 8.61968 0.824829C8.5303 0.824829 8.44975 0.857027 8.37802 0.921423L3.37233 5.93846Z"
                    fill="#010101"
                  />
                </svg>
              </div>
              <div class="gr-booking-1__label-text">
                <span
                  >Я подтверждаю, что еду без животных<span
                    class="gr-booking-1__star"
                    >*</span
                  >
                </span>
              </div>
            </label>
            <input
              type="checkbox"
              id="withoutAnimals"
              name="withoutAnimals"
              v-model="agrees.withoutAnimals"
            />
          </div>
          <div class="gr-booking-1__field gr-booking-1__field--checkbox">
            <label
              for="agree"
              class="gr-booking-1__label gr-booking-1__label--checkbox"
            >
              <div
                class="gr-booking-1__checkbox"
                :class="
                  !agrees.rulesAndPrices && agreementError
                    ? 'gr-booking-1__checkbox--error'
                    : ''
                "
              >
                <svg
                  v-if="agrees.rulesAndPrices"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.37233 5.93846L1.10564 3.67177C1.0126 3.57873 0.901572 3.55008 0.772551 3.58583C0.64353 3.62158 0.562978 3.70213 0.530894 3.82749C0.498811 3.95284 0.52929 4.06559 0.622332 4.16574L3.37233 6.91574L8.87233 1.41574C8.93673 1.34401 8.96721 1.26162 8.96377 1.16858C8.96033 1.07554 8.92447 0.994985 8.85618 0.926923C8.78788 0.85886 8.70905 0.824829 8.61968 0.824829C8.5303 0.824829 8.44975 0.857027 8.37802 0.921423L3.37233 5.93846Z"
                    fill="#010101"
                  />
                </svg>
              </div>
              <div
                class="gr-booking-1__label-text"
                :class="
                  !agrees.rulesAndPrices && agreementError
                    ? 'gr-booking-1__label-text--error'
                    : ''
                "
              >
                <span
                  >C
                  <NuxtLink
                    to="/prices"
                    target="_blank"
                    class="gr-booking-1__agree gr-link gr-link--green"
                    >ценами</NuxtLink
                  >,<NuxtLink
                    to="/rules"
                    target="_blank"
                    class="gr-booking-1__agree gr-link gr-link--green"
                    >правилами проживания и поведения</NuxtLink
                  >
                  ознакомлен и согласен<span class="gr-booking-1__star">*</span>
                </span>
              </div>
            </label>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              v-model="agrees.rulesAndPrices"
            />
          </div>
          <div class="gr-booking-1__field gr-booking-1__field--checkbox">
            <label
              for="personalInformation"
              class="gr-booking-1__label gr-booking-1__label--checkbox"
            >
              <div
                class="gr-booking-1__checkbox"
                :class="
                  !agrees.personalInformation && agreementError
                    ? 'gr-booking-1__checkbox--error'
                    : ''
                "
              >
                <svg
                  v-if="agrees.personalInformation"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.37233 5.93846L1.10564 3.67177C1.0126 3.57873 0.901572 3.55008 0.772551 3.58583C0.64353 3.62158 0.562978 3.70213 0.530894 3.82749C0.498811 3.95284 0.52929 4.06559 0.622332 4.16574L3.37233 6.91574L8.87233 1.41574C8.93673 1.34401 8.96721 1.26162 8.96377 1.16858C8.96033 1.07554 8.92447 0.994985 8.85618 0.926923C8.78788 0.85886 8.70905 0.824829 8.61968 0.824829C8.5303 0.824829 8.44975 0.857027 8.37802 0.921423L3.37233 5.93846Z"
                    fill="#010101"
                  />
                </svg>
              </div>
              <div
                class="gr-booking-1__label-text"
                :class="
                  !agrees.personalInformation && agreementError
                    ? 'gr-booking-1__label-text--error'
                    : ''
                "
              >
                <span
                  >Я даю согласие на обработку своих персональных данных в
                  соответствии с
                </span>
                <NuxtLink
                  to="/agree"
                  target="_blank"
                  class="gr-booking-1__agree gr-link gr-link--green"
                  >Политикой обработки персональных данных</NuxtLink
                >
                <span class="gr-booking-1__star">*</span>
              </div>
            </label>
            <input
              type="checkbox"
              id="personalInformation"
              name="personalInformation"
              v-model="agrees.personalInformation"
            />
          </div>
          <div class="gr-booking-1__field gr-booking-1__field--checkbox">
            <label
              for="getNews"
              class="gr-booking-1__label gr-booking-1__label--checkbox"
            >
              <div class="gr-booking-1__checkbox-layout">
                <div class="gr-booking-1__checkbox">
                  <svg
                    v-if="agrees.getNews"
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.37233 5.93846L1.10564 3.67177C1.0126 3.57873 0.901572 3.55008 0.772551 3.58583C0.64353 3.62158 0.562978 3.70213 0.530894 3.82749C0.498811 3.95284 0.52929 4.06559 0.622332 4.16574L3.37233 6.91574L8.87233 1.41574C8.93673 1.34401 8.96721 1.26162 8.96377 1.16858C8.96033 1.07554 8.92447 0.994985 8.85618 0.926923C8.78788 0.85886 8.70905 0.824829 8.61968 0.824829C8.5303 0.824829 8.44975 0.857027 8.37802 0.921423L3.37233 5.93846Z"
                      fill="#010101"
                    />
                  </svg>
                </div>
              </div>

              <div class="gr-booking-1__label-text">
                <span
                  >Хочу получать новости и информацию о специальных предложениях
                  от «Громово Парк»
                </span>
              </div>
            </label>
            <input
              type="checkbox"
              id="getNews"
              name="getNews"
              v-model="agrees.getNews"
            />
          </div>
        </div>

        <div class="gr-booking-1__fields-block gr-booking-1__promo">
          <div class="gr-booking-1__field">
            <label class="gr-booking-1__label" for="promo">Промокод</label>

            <input
              class="gr-booking-1__input gr-booking-1__input--promo"
              type="text"
              name="promo"
              id="promo"
              v-model.trim="promo"
              placeholder="Введите значение"
            />
          </div>
        </div>
        <div class="gr-booking-1__footer">
          <div class="gr-booking-1__summa">
            Стоимость за {{ getBookingInformation.nightCount }}
            {{ getEnding(getBookingInformation.nightCount) }}
            <span>{{ formattedPrice(getBookingInformation.summa) }}</span>
          </div>
          <div class="gr-booking-1__buttons">
            <router-link
              :to="`/cottage/${getCottage.id}`"
              class="gr-booking-1__btn gr-btn gr-btn--white"
              >Назад</router-link
            >
            <GrBtn
              class="gr-booking-1__btn gr-btn gr-btn--white"
              type="submit"
              :disabled="disabledBtn"
              >Далее</GrBtn
            >
          </div>
        </div>
      </form>
      <p>
        <span class="gr-booking-1__star">*</span>Поля, обязательные для
        заполнения
      </p>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useBookingStore } from '@/stores/bookingStore.js';
import { useCottagesStore } from '@/stores/cottagesStore.js';
import ending from '@/utils/mixins/ending.js';
import formatted from '@/utils/mixins/formatted.js';
import showBookingForm from '@/utils/mixins/show-booking-form';
export default {
  data() {
    return {
      loading: true,
      validationSuccess: true,
      fields: [
        {
          name: 'name',
          label: 'ФИО',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Введите фамилию, имя и отчество полностью',
          error: '',
        },
        {
          name: 'phone',
          label: 'Телефон',
          value: '',
          required: true,
          type: 'tel',
          placeholder: '+7(___) ___-__-__',
          mask: '+7 (999) 999-99-99',
          error: '',
        },
        {
          name: 'email',
          label: 'E-mail',
          value: '',
          required: true,
          type: 'email',
          mask: '',
          placeholder: 'example@mail.ru',
          error: '',
        },
        {
          name: 'seria',
          label: 'Серия и номер паспорта',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Введите значение',
          error: '',
        },
        {
          name: 'issued',
          label: 'Кем выдан',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Введите значение',
          error: '',
        },
        {
          name: 'whenIssued',
          label: 'Когда выдан',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'дд.mm.гггг',
          error: '',
          mask: '99.99.9999',
        },
        {
          name: 'address',
          label: 'Адрес регистрации',
          value: '',
          required: true,
          type: 'text',
          placeholder: 'Введите значение',
          error: '',
        },
        {
          name: 'birth',
          label: 'Дата рождения',
          value: '',
          required: false,
          type: 'text',
          placeholder: 'дд.mm.гггг',
          error: '',
          mask: '99.99.9999',
        },
      ],
      promo: '',
      numbersOfPersons: {
        numberOfAdults: 1,
        numberOfTeenagers: 0,
        numberOfchildren: 0,
        placesWithoutAccommodation: 0,
      },
      currentSelectOpen: '',
      agrees: {
        withoutAnimals: false,
        rulesAndPrices: false,
        personalInformation: false,
        getNews: false,
      },
      agreementError: false,
      formData: {},
    };
  },
  mixins: [ending, formatted, showBookingForm],
  computed: {
    ...mapState(useBookingStore, ['getBookingInformation']),
    ...mapState(useCottagesStore, ['getCottage']),
    placementCount() {
      return (
        this.getCottage.placement.main + this.getCottage.placement.additional
      );
    },
    disabledBtn() {
      if (
        !this.agrees.personalInformation ||
        !this.agrees.withoutAnimals ||
        !this.agrees.rulesAndPrices
      ) {
        return 'true';
      } else {
        return false;
      }
    },
  },
  methods: {
    ...mapActions(useBookingStore, ['addBookingInformation']),
    toggleSelect(mode) {
      this.currentSelectOpen = mode;
    },

    setNumber(key, count = 0) {
      this.currentSelectOpen = '';
      this.numbersOfPersons[key] = count;
    },
    validateName() {
      if (this.name.length < 0) {
        this.errors.name = 'Поле ';
      }
    },
    validateEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validateTel(tel) {
      return tel.length === 10;
    },
    validateField(field) {
      field.error = '';
      if (field.required && field.value.length == 0) {
        field.error = `Заполните поле ${field.label}`;
        return false;
      }
      if (
        field.type === 'email' &&
        field.value.length > 0 &&
        !this.validateEmail(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }
      if (
        field.type === 'tel' &&
        field.value.length > 0 &&
        !this.validateTel(field.value)
      ) {
        field.error = `Поле ${field.label} заполнено некорректно`;
        return false;
      }
      return true;
    },
    checkForm() {
      this.validationSuccess = true;
      this.agreementError = false;
      this.fields.forEach((field) => {
        if (!this.validateField(field)) {
          this.validationSuccess = false;
        }
      });
      if (!this.validationSuccess) {
        const nameField = this.fields.find((el) => el.error !== '').name;
        const el = this.$refs[`${nameField}`][0];
        el.scrollIntoView({ behavior: 'smooth' });
      }

      if (
        !this.agrees.withoutAnimals ||
        !this.agrees.rulesAndPrices ||
        !this.agrees.personalInformation
      ) {
        this.validationSuccess = false;
        this.agreementError = true;
      }
    },
    submitForm() {
      this.checkForm();
      if (this.validationSuccess) {
        this.fields.forEach((field) => {
          this.formData[field.name] = field.value;
        });
        this.formData.promo = this.promo;
        this.formData.numbersOfPersons = this.numbersOfPersons;
        this.formData.agrees = this.agrees;
        this.addBookingInformation(this.formData);
        this.$router.push('/booking/step-2');
      }
    },
    fillTestData() {
      if (this.getBookingInformation.name) {
        this.fields[0].value = this.getBookingInformation.name;
        this.fields[1].value = this.getBookingInformation.phone;
        this.fields[2].value = this.getBookingInformation.email;
        this.fields[3].value = this.getBookingInformation.seria;
        this.fields[4].value = this.getBookingInformation.issued;
        this.fields[5].value = this.getBookingInformation.whenIssued;
        this.fields[6].value = this.getBookingInformation.address;
        this.fields[7].value = this.getBookingInformation.birth;
        this.agrees.withoutAnimals = this.getBookingInformation.withoutAnimals;
        this.agrees.rulesAndPrices = this.getBookingInformation.rulesAndPrices;
        this.agrees.personalInformation =
          this.getBookingInformation.personalInformation;
        this.numbersOfPersons.numberOfAdults =
          this.getBookingInformation.numberOfAdults;
        this.numbersOfPersons.numberOfTeenagers =
          this.getBookingInformation.numberOfTeenagers;
        this.numbersOfPersons.numberOfchildren =
          this.getBookingInformation.numberOfchildren;
        this.numbersOfPersons.placesWithoutAccommodation =
          this.getBookingInformation.placesWithoutAccommodation;
      }
    },
    // fillTestData() {
    //   this.fields[0].value = 'Иванов';
    //   this.fields[1].value = '9111110011';
    //   this.fields[2].value = 'wertwe@wertw.ru';
    //   this.fields[3].value = '400 011223';
    //   this.fields[4].value = 'Кем выдан';
    //   this.fields[5].value = '20.12.2000';
    //   this.fields[6].value = 'Адрес регистрации';
    //   this.fields[7].value = '20.12.2000';
    //   this.agrees.withoutAnimals = true;
    //   this.agrees.rulesAndPrices = true;
    //   this.agrees.personalInformation = true;
    // },
  },
  mounted() {
    this.fillTestData();
  },
  created() {
    if (!this.showBookingForm) {
      this.$router.push('/cottages');
    }
  },
};
</script>
