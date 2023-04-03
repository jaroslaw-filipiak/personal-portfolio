<template>
  <div class="w-full">
    <div class="section--title w-10/12 mx-auto mt-20">
      <h3>{{ heading }}</h3>
      <img v-if="hasImg" src="~/assets/uploads/smush.svg" alt="" />
    </div>
    <div class="items">
      <!-- siborsoft -->
      <NuxtLink
        prefetch
        :to="`/portfolio/siborsoft`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${siborsoft})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">Siborsoft</p>
      </NuxtLink>

      <!-- promise -->
      <NuxtLink
        prefetch
        :to="`/portfolio/promise4cloud`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${promise})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">Promise4Cloud</p>
      </NuxtLink>

      <!-- lukasiuk -->
      <NuxtLink
        prefetch
        :to="`/portfolio/lukasiuk`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${lukasiuk})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">Grupa Łukasiuk</p>
      </NuxtLink>

      <!-- eond -->
      <NuxtLink
        prefetch
        :to="`/portfolio/eond`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${eond})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">eond</p>
      </NuxtLink>

      <!-- 23knots -->
      <NuxtLink
        prefetch
        :to="`/portfolio/23knots`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${knots})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">23 knots</p>
      </NuxtLink>

      <!-- what about -->
      <NuxtLink
        prefetch
        :to="`/portfolio/whatabout`"
        class="item hover:opacity-85"
        :style="{
          backgroundImage: `url(${whatAbout})`,
        }"
      >
        <p class="bg-dark-2 p-1 pl-5 pr-5">whatabout</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  import siborsoftThumb from '@/assets/uploads/2021/10/siborsoft_thumb.jpg';
  import promiseThumb from '@/assets/uploads/2021/10/promise4cloud_thumb.jpg';
  import lukasiukThumb from '@/assets/uploads/2020/07/lukasiuk-thumb.jpg';
  import eondThumb from '@/assets/uploads/2020/07/eond-thumb.jpg';
  import knotsThumb from '@/assets/uploads/2020/03/23knots-thumbnail.jpg';
  import whatAboutThumb from '@/assets/uploads/2020/03/whatabout.jpg';

  export default {
    props: {
      heading: String,
      hasImg: Boolean,
    },
    data() {
      return {
        siborsoft: siborsoftThumb,
        promise: promiseThumb,
        lukasiuk: lukasiukThumb,
        eond: eondThumb,
        knots: knotsThumb,
        whatAbout: whatAboutThumb,
      };
    },
  };
</script>

<style lang="scss">
  .items {
    @apply w-full min-w-full flex flex-wrap justify-center items-center sm:-mx-2 mb-8 mt-20 lg:justify-center;
  }

  .item {
    @apply bg-dark-1  border-dark-2 w-4/5 h-96 sm:h-128  md:h-144  lg:w-96 lg:h-96  2xl:w-128 2xl:h-128 flex flex-col items-start justify-end bg-cover bg-no-repeat pb-3 pl-3 hover:opacity-90 relative z-10;

    p {
      @apply hidden;
    }

    &:hover {
      p {
        @apply block;
      }
    }
  }
</style>
