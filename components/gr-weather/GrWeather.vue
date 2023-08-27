<template>
  <ClientOnly>
    <div class="gr-weather" v-if="show" :class="classList">
      <div class="gr-weather__icon">
        <!-- Clear sky 0 -->
        <GrClearSkyDay v-if="showIcon('clearSkyDay')" />
        <GrClearSkyNight v-if="showIcon('clearSkyNight')" />
        <!-- Few clouds 1 -->
        <GrFewCloudsDay v-if="showIcon('fewCloudsDay')" />
        <GrFewCloudsNigh v-if="showIcon('fewCloudsNight')" />
        <!-- Scattered clouds 2 -->
        <GrScatteredClouds v-if="showIcon('scatteredClouds')" />
        <!-- Broken clouds 3 -->
        <GrBrokenClouds v-if="showIcon('brokenClouds')" />
        <!-- Shower rain 80,81,82 -->
        <GrShowerRain v-if="showIcon('showerRain')" />
        <!-- Rain 51,53,55,56,57,61,63,65,66,67 -->
        <GrRain v-if="showIcon('rain')" />
        <!-- Thunderstorm 95,96,99-->
        <GrThunderstorm v-if="showIcon('thunderstorm')" />
        <!-- Snow 71,73,75,77,85,86 -->
        <GrSnow v-if="showIcon('snow')" />
        <!-- Mist 45,48 -->
        <GrMist v-if="showIcon('mist')" />
      </div>
      <p
        class="gr-weather__temperature"
        v-if="getWeather.current_weather.temperature"
      >
        {{ getWeather?.current_weather.temperature > 0 ? '+' : '-' }}
        {{ getWeather?.current_weather.temperature }}
        {{ getWeather?.hourly_units.temperature_2m }}
      </p>
    </div>
  </ClientOnly>
</template>
<script src="./gr-weather.js"></script>
