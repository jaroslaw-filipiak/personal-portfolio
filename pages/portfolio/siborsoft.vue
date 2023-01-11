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
                    href="http://siborsoft.com/"
                    target="_blank"
                    :style="{
                        backgroundColor: '#d78605',
                        color: '#ffffff',
                    }"
                >
                    Zobacz stronę www</a
                >
                <img :src="siborsoftIMG" alt="" />
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">Siborsoft</h1>
                <p class="text-xl">
                    Dosyć prosta i niepozorna strona www ale mimo wyglądu szablonowego została ona najpierw
                    zaprojektowana w figmie. Większość stron nawet tych najmniejszych i najprostszych projektuje mimo
                    wszystko od białej kartki.<br /><br />Bardzo ciekawym mechanizmem jest zastosowanie html5history API
                    , dzięki czemu strona się nie odświeża w momencie gdy przechodzimy do innych podstron , strona
                    oparta o WP + ACF
                </p>
            </div>
        </div>
        <Cta />
    </SmoothScroll>
</template>

<script>
import siborsoftIMG from 'assets/uploads/2021/10/siborsoft_main.jpg';
export default {
    data() {
        return {
            siborsoftIMG,
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
