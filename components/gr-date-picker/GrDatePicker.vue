<template>
  <div class="gr-date-picker" @click.stop.prevent>
    <div class="gr-date-picker__header">
      <div class="gr-date-picker__date">
        <div
          class="gr-date-picker__arrow gr-date-picker__prev-month"
          @click="prevMonth"
        >
          <GrCheckMarkLeft />
        </div>
        <div class="gr-date-picker__current-month">
          <GrCalendar />
          {{ currentMonthLocal }} {{ currentYear }}
        </div>
        <div
          class="gr-date-picker__arrow gr-date-picker__next-month"
          @click="nextMonth"
        >
          <GrCheckMarkRight />
        </div>
      </div>
      <div class="gr-date-picker__weekday">
        <span class="gr-date-picker__weekday-item">Пн</span>
        <span class="gr-date-picker__weekday-item">Вт</span>
        <span class="gr-date-picker__weekday-item">Ср</span>
        <span class="gr-date-picker__weekday-item">Чт</span>
        <span class="gr-date-picker__weekday-item">Пт</span>
        <span class="gr-date-picker__weekday-item--disabled">Сб</span>
        <span class="gr-date-picker__weekday-item--disabled">Вс</span>
      </div>
      <div class="gr-date-picker__days">
        <div
          class="gr-date-picker__day-layout"
          v-for="(day, key) in refilledDays"
          :key="key"
          :class="getDayLayoutClassList(day)"
        >
          <span
            class="gr-date-picker__day"
            :class="getDayClassList(day)"
            @click="pick(day)"
          >
            {{ day.getDate() }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./gr-date-picker.js"></script>
