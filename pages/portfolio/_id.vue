<template>
  <div class="portfolio-item">
    <div class="portfolio-item--cover">
      <a
        v-if="item.acf.behance_link"
        class="absolute bottom-0 left-0 block p-4"
        :href="`${item.acf.behance_link}`"
        :style="{
          backgroundColor: `${item.acf.behance_kolor}`,
        }"
      >
        {{ item.acf.behance_link }}</a
      >
      <a
        v-if="item.acf.zobacz_strone_www"
        class="absolute bottom-0 left-0 block p-4"
        :href="`${item.acf.zobacz_strone_www}`"
        :style="{
          backgroundColor: `${item.acf.strona_www_link_kolor}`,
          color: `${item.acf.www_txt_color}`,
        }"
      >
        Zobacz stronę www</a
      >
      <img :src="`${item.acf.header_image}.webp`" alt="" />
    </div>
    <div class="portfolio-item--info">
      <h1 class="text-4xl mb-7">{{ item.title.rendered }}</h1>
      <p class="text-xl" v-html="item.content.rendered">}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $http }) {
    const item = await $http.$get(
      `https://j-filipiak.pl/api/wp-json/wp/v2/portfolio/${params.id}`
    )
    return { item }
  },
}
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
