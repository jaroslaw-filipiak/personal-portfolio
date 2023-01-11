<template>
    <SmoothScroll>
        <div class="portfolio-item">
            <div class="portfolio-item--cover">
                <a
                    class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
                    href="https://23knots.com/"
                    target="_blank"
                    :style="{
                        backgroundColor: '#ffdb66',
                        color: '#000000',
                    }"
                >
                    Zobacz stronę www</a
                >
                <img :src="IMG" alt="" />
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">whatabout</h1>
                <p class="text-xl">Projekt graficzny oraz wykonanie strony www</p>
                <h3>
                    Zlecenie obejmowało przygotowanie projektu graficznego oraz autorskie wdrożenie do systemu WordPress
                </h3>
                <p>
                    Projekt grafizny wykonano w klasyku czyli Photoshopie. Animacje zostały zrobione w programie Adobe
                    After Effects , następnie zostały one wyeksportowane za pomocą pluginu bodymovin do formatu .json
                    oraz zaimportowane do specjalnego playera na stronie (lottie.js). Strona zakodowana autorsko do
                    systemu CMS z wykorzystaniem Advanced Custom Fields oparta na startowym theme underscore
                </p>
            </div>
        </div>
    </SmoothScroll>
</template>

<script>
import IMG from 'assets/uploads/2020/03/whatabout-header-bg.jpg';
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
