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
import { useGalleryStore } from '@/stores/galleryStore.js';
import { useNavLinksStore } from '@/stores/navLinksStore.js';
import { useCottagesStore } from '@/stores/cottagesStore.js';

export default {
  data() {
    return {
      links: [],
      loading: true,
    };
  },
  computed: {
    ...mapState(useNavLinksStore, ['getNavLinks']),
    ...mapState(useGalleryStore, {
      getGallery: 'getGallery',
      galleryLoading: 'isLoading',
    }),
    ...mapState(useCottagesStore, {
      getCottage: 'getCottage',
      cottagesLoading: 'isLoading',
    }),
    currentPage() {
      return this.$route.name;
    },
    showBreadcrumbs() {
      return this.currentPage !== 'index';
    },
    currentCottage() {
      return this.getCottage;
    },
  },
  watch: {
    currentPage() {
      // this.getLinks();
      this.loadData();
    },
    currentCottage() {
      // this.getLinks();
      this.loadData();
    },
  },
  methods: {
    ...mapActions(useGalleryStore, ['fetchGallery']),
    ...mapActions(useCottagesStore, ['fetchCottage']),

    getLinks() {
      //Получим массив строк из адресной строки
      //пример : ['', 'gallery', 'summer']
      this.links = [];
      const arr = this.$route.fullPath.split('/');
      //Обрабатываем 2-й элемент, достаем данные из навигации, в первую очередь проверяем, не галерея ли, а точнее длину массива arr
      if (arr.length === 3) {
        if (arr[1] === 'gallery') {
          this.links.push({
            name: 'Галерея',
            link: '/galleries',
          });

          // 3й элемент
          this.links.push({
            name: this.getGallery.name,
            link: '/' + this.getGallery.nameEng,
          });
        }
        if (arr[1] === 'cottage') {
          this.links.push({
            name: 'Коттеджи',
            link: '/cottages',
          });
          this.links.push({
            name: this.getCottage.name,
            link: '/cottages',
          });
        }
      } else if (arr[1]) {
        const elem = this.getElem(this.getNavLinks, '/' + arr[1]);
        this.links.push({
          name: elem.name,
          link: elem.link,
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
        Promise.all([this.getGalleryLoading, this.cottagesLoading]).then(() => {
          this.getLinks();
          this.loading = false;
        });
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
