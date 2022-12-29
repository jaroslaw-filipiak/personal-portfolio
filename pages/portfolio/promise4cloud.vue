<template>
  <div class="portfolio-item">
    <div class="portfolio-item--cover">
      <!-- <a
                v-if="item.acf.behance_link"
                class="absolute bottom-0 left-0 block p-4"
                :href="`${item.acf.behance_link}`"
                :style="{
                    backgroundColor: `${item.acf.behance_kolor}`,
                }"
            >
                {{ item.acf.behance_link }}</a
            > -->
      <a
        class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
        href="https://promise4cloud.com/"
        target="_blank"
        :style="{
          backgroundColor: '#dd3f3f',
          color: '#ffffff',
        }"
      >
        Zobacz stronę www</a
      >
      <img :src="IMG" alt="" />
    </div>
    <div class="portfolio-item--info">
      <h1 class="text-4xl mb-7">promise4cloud</h1>
      <p class="text-xl">Projekt graficzny został wykonany autorsko a następnie wdrożony do systemu WordPress .</p>
      <p>
        W pełni profesjonalne środowisko z wersjami : dev , stagging oraz prod , całość synchronizowana za pomocą ci/cd
        , które buduje stronę , oraz czyści cloudflarowe cache.<br />Layout zbudowany w oparciu o beaver builder + acf +
        autorskie bloki do beaver buildera +motyw pisany w oparciu o vite.js + tailwind
      </p>
    </div>
  </div>
</template>

<script>
import IMG from 'assets/uploads/2021/10/promise4cloud_main.jpg';
export default {
  data() {
    return {
      IMG,
    };
  },
};
</script>
<style>
.portfolio-item {
  @apply bg-dark-2   text-white min-h-screen flex justify-start items-start flex-col min-w-full pl-5  pt-20 pr-5;
}
.portfolio-item--cover {
  @apply w-full mb-12 relative;
}
.portfolio-item--info {
  @apply 2xl:pb-64 3xl:pr-128;
}
</style>
