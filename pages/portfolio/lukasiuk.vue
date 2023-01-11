<template>
    <SmoothScroll>
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
                    href="https://www.grupalukasiuk.pl/"
                    target="_blank"
                    :style="{
                        backgroundColor: '#282a2e',
                        color: '#ffffff',
                    }"
                >
                    Zobacz stronę www</a
                >
                <img :src="IMG" alt="" />
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">Grupa Łukasiuk</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie warstwy front-end zgodnie z wytycznymi. Style pisane w .scss ,
                    calośc kompilowana za pomocą webpacka , skrypty .js pisane w esnext. W niektórych elementach
                    wykorzystano cssGrid , w projekcie jest także użyta biblioteka jQuery
                </p>
            </div>
        </div>
        <Cta />
    </SmoothScroll>
</template>

<script>
import IMG from 'assets/uploads/2020/07/lukasiuk-cover.jpg';
export default {
    data() {
        return {
            IMG,
        };
    },
    mounted() {
        this.$registerLocomotiveScroll();
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
