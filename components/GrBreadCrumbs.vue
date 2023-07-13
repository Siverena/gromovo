<template>
  <div class="gr-breadcrumbs" v-if="showBreadcrumbs && !loading">
    <div class="gr-breadcrumbs__item">
      <NuxtLink class="gr-breadcrumbs__link" to="/">Главная</NuxtLink>
    </div>
    <div v-for="(link, key) in links" :key="key" class="gr-breadcrumbs__item">
      <div class="gr-breadcrumbs__delimiter"></div>

      <NuxtLink
        class="gr-breadcrumbs__link"
        v-if="key !== links.length - 1"
        :to="link.link"
        >{{ link.name }}</NuxtLink
      >
      <span v-else>
        {{ link.name }}
      </span>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia';
import { useGalleryStore } from '@/stores/GalleryStore.js';
import { useNavLinksStore } from '@/stores/NavLinksStore.js';

// import gallery from '@/stores/data/d-gallery.js';
export default {
  data() {
    return {
      links: [],
      showBreadcrumbs: true,
      currentPage: this.$route.name,
      loading: true,
    };
  },
  computed: {
    ...mapState(useNavLinksStore, ['navLinks']),
    ...mapState(useGalleryStore, ['gallery']),
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    getLinks() {
      //Получим массив строк из адресной строки
      //пример : ['', 'gallery', 'summer']
      const arr = this.$route.fullPath.split('/');
      //Обрабатываем 2-й элемент, достаем данные из навигации, в первую очередь проверяем, не галерея ли, а точнее длину массива arr
      if (this.$route.name === 'index') {
        this.showBreadcrumbs = false;
      }
      // console.log(this.gallery);
      if (arr.length === 3) {
        this.links.push({
          name: 'Галерея',
          link: '/galleries',
        });
        this.links.push({
          name: this.gallery.find((el) => el.nameEng === arr[2]).name,
          link: '/' + this.gallery.find((el) => el.nameEng === arr[2]).nameEng,
        });
      } else {
        const elem = this.getElem(this.navLinks, '/' + arr[1]);
        this.links.push({
          name: elem?.name,
          link: elem?.link,
        });
      }
    },
    getElem(arr, needle) {
      let foundElem = null;
      arr.forEach((el) => {
        if (el.link === needle) {
          foundElem = el;
        }
        if (el.child && el.child.length > 0) {
          foundElem = this.getElem(el.child, needle);
        }
      });
      return foundElem;
    },
    async loadData() {
      try {
        this.loading = true;
        await this.fetchGallery();
        this.getLinks();
        this.loading = false;
      } catch (e) {
        console.log(e);
      }
    },
  },

  async created() {
    this.loadData();
  },
};
</script>
