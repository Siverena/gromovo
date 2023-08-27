<template>
  <div class="gr-booking-1__header">
    <div class="gr-booking-1__dates">
      <GrCalendar />
      {{ getBookingInformation.dateStart }} -
      {{ getBookingInformation.dateEnd }}
    </div>
    <div class="gr-booking-1__cottage">
      {{ getBookingInformation.cottageDescription }}
    </div>
  </div>
</template>
<script src="./gr-steps-header.js"></script>
