<template>
  <div class="gr-pick-up" v-if="!loading && currentUrl">
    <form
      action=""
      class="gr-pick-up__form"
      :class="{
        'gr-pick-up__form--cottage': mode === 'cottage',
      }"
    >
      <div
        class="gr-pick-up__block"
        :class="{
          'gr-pick-up__block--cottage': mode === 'cottage',
        }"
      >
        <div class="gr-pick-up__item">
          <label for="check-in" class="gr-pick-up__label">
            <p class="gr-pick-up__placeholder" v-if="!dateStart">Заезд</p>
            <p class="gr-pick-up__pick-date" v-if="dateStart">
              {{ dateStart.toLocaleDateString() }}
            </p>
            <div
              class="gr-pick-up__calendar"
              @click.stop="toggleCalendar('checkIn')"
            >
              <GrCalendar />
            </div>
          </label>
          <GrDatePicker
            v-if="calendarType === 'checkIn'"
            :dateStart="dateStart"
            :dateEnd="dateEnd"
            :calendarType="calendarType"
            :pick="pick"
          />
        </div>
        <div class="gr-pick-up__item">
          <label for="check-out" class="gr-pick-up__label">
            <p class="gr-pick-up__placeholder" v-if="!dateEnd">Выезд</p>
            <p class="gr-pick-up__pick-date" v-if="dateEnd">
              {{ dateEnd.toLocaleDateString() }}
            </p>
            <div
              class="gr-pick-up__calendar"
              @click.stop="toggleCalendar('checkOut')"
            >
              <GrCalendar />
            </div>
          </label>
          <GrDatePicker
            v-if="calendarType === 'checkOut'"
            :dateStart="dateStart"
            :dateEnd="dateEnd"
            :calendarType="calendarType"
            :pick="pick"
          />
        </div>
      </div>
      <div
        class="gr-pick-up__block"
        :class="{
          'gr-pick-up__block--cottage': mode === 'cottage',
        }"
      >
        <div class="gr-pick-up__item" v-if="mode !== 'cottage'">
          <div
            class="gr-pick-up__label gr-pick-up__select"
            :class="{
              'gr-pick-up__select--selected': selectValue !== null,
            }"
          >
            {{ selectText }}
            <div class="gr-pick-up__select-open" @click.stop="toggleSelect">
              <GrCheckMarkDown />
            </div>

            <ul
              class="gr-pick-up__select-list"
              name=""
              id=""
              v-if="isSelectOpen"
            >
              <li
                class="gr-pick-up__select-item"
                :class="{
                  'gr-pick-up__select-item--selected': selectValue === 0,
                }"
                value=""
                @click="getSelectValue(0)"
              >
                Любой
              </li>
              <li
                v-for="(type, key) in getCottageType"
                :key="key"
                :class="{
                  'gr-pick-up__select-item--selected': selectValue === type.id,
                }"
                class="gr-pick-up__select-item"
                value="8+3"
                @click="getSelectValue(type.id)"
              >
                {{ type.placement }} человек
              </li>
            </ul>
          </div>
        </div>
        <p class="gr-pick-up__notification" v-if="mode === 'cottage'">
          Выберите даты
        </p>
        <GrBtn
          v-if="mode === 'cottage'"
          @click.stop.prevent="sendForm"
          class="gr-pick-up__btn gr-btn gr-btn--green gr-pick-up__btn--cottage"
          :disabled="isDisabled"
          >Забронировать</GrBtn
        >
        <GrBtn
          v-else
          @click.stop.prevent=""
          class="gr-pick-up__btn"
          :class="{
            'gr-btn--transparent': currentUrl === 'index' && isDesktopVersion,
            'gr-btn--green': currentUrl !== 'index' || !isDesktopVersion,
          }"
          >Подобрать</GrBtn
        >
      </div>
    </form>
  </div>
</template>
<script src="./gr-pick-up.js"></script>
