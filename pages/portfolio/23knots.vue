<template>
    <div class="portfolio-item">
        <div class="portfolio-item--cover">
            <a
                class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
                href="https://23knots.com/"
                target="_blank"
                :style="{
                    backgroundColor: '#000000',
                    color: '#ffffff',
                }"
            >
                Zobacz stronę www</a
            >
            <img :src="IMG" alt="" />
        </div>
        <div class="portfolio-item--info">
            <h1 class="text-4xl mb-7">23knots</h1>
            <p class="text-xl">
                Całkiem przyjemna wizytówka. Zakres prac obejmował zarówno przygotowanie projektu graficznego jak i
                wdrożenie. Kodowanie bez użycia CMS, wykorzystano webpacka + scss + esnext
            </p>
        </div>
    </div>
</template>

<script>
import IMG from 'assets/uploads/2020/03/23knots-header-bg.jpg';
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
