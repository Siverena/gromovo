<template>
  <nav class="gr-nav">
    <ul class="gr-nav__list">
      <li
        class="gr-nav__item"
        v-for="(item, key) in getMenuNavLinks"
        :key="key"
      >
        <NuxtLink
          class="gr-nav__link"
          :to="item.link"
          :class="getClassByRoute('gr-nav__link')"
          >{{ item.name }}</NuxtLink
        >
        <div
          @click.stop="toggleMenu(key)"
          v-if="item.child"
          class="gr-nav__arrow"
          :class="
            getClassByRoute('gr-nav__arrow') + ' ' + getClassByCurrentMenu(key)
          "
        >
          <GrCheckMarkDown />
        </div>
        <ul
          class="gr-nav__child-list"
          :class="{
            'gr-nav__child-list--index': this.$route.name === 'index',
            'gr-nav__child-list--error': !this.$route.name,
          }"
          :key="key"
          v-if="currentMenu === key && item.child"
        >
          <li
            class="gr-nav__child-item"
            v-for="(item, key) in item.child"
            :key="key"
          >
            <NuxtLink
              class="gr-nav__child-link"
              :to="item.link"
              :class="getClassByRoute('gr-nav__child-link')"
              >{{ item.name }}</NuxtLink
            >
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script src="./gr-nav.js"></script>
