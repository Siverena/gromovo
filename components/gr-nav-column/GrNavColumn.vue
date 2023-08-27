<template>
  <nav class="gr-footer__nav gr-nav-column">
    <ul class="gr-nav-column__list">
      <li
        class="gr-nav-column__item"
        v-for="(item, key) in getMenuNavLinks"
        :key="key"
      >
        <NuxtLink class="gr-nav-column__link" :to="item.link">{{
          item.name
        }}</NuxtLink>
        <div
          @click.stop="toggleMenu(key)"
          v-if="item.child"
          class="gr-nav-column__arrow"
          :class="{
            'gr-nav__arrow--open': currentMenu === key,
          }"
        >
          <GrCheckMarkDown />
        </div>
        <ul
          class="gr-nav-column__child-list"
          :key="key"
          v-if="currentMenu === key && item.child"
        >
          <li
            class="gr-nav-column__child-item"
            v-for="(item, key) in item.child"
            :key="key"
          >
            <NuxtLink class="gr-nav-column__child-link" :to="item.link">{{
              item.name
            }}</NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script src="./gr-nav-column.js"></script>
