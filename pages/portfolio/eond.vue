<template>
    <SmoothScroll>
        <div class="portfolio-item">
            <div class="portfolio-item--cover">
                <a
                    class="absolute bottom-0 left-0 block p-4 hover:opacity-85"
                    href="https://eond.eu/"
                    target="_blank"
                    :style="{
                        backgroundColor: '#1a63cb',
                        color: '#ffffff',
                    }"
                >
                    Zobacz stronę www</a
                >
                <img :src="IMG" alt="" />
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">EoND</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający technicznie , zwłaszcza w
                    zakresie animacji czy tez niektórych elementów , na stronie głównej wykorzystano bibliotekę paralax
                    , accordiony są napisane autorsko , całośc pisana w scss , wykorzystano gridaCss , nie korzystano z
                    żadnych frameworków typu bootstrap (nie korzystam z takich bibliotek jeżeli nie ma takiego wymogu od
                    klienta ) , całość skompilowana za pomocą webpacka
                </p>
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">EoND</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający technicznie , zwłaszcza w
                    zakresie animacji czy tez niektórych elementów , na stronie głównej wykorzystano bibliotekę paralax
                    , accordiony są napisane autorsko , całośc pisana w scss , wykorzystano gridaCss , nie korzystano z
                    żadnych frameworków typu bootstrap (nie korzystam z takich bibliotek jeżeli nie ma takiego wymogu od
                    klienta ) , całość skompilowana za pomocą webpacka
                </p>
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">EoND</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający technicznie , zwłaszcza w
                    zakresie animacji czy tez niektórych elementów , na stronie głównej wykorzystano bibliotekę paralax
                    , accordiony są napisane autorsko , całośc pisana w scss , wykorzystano gridaCss , nie korzystano z
                    żadnych frameworków typu bootstrap (nie korzystam z takich bibliotek jeżeli nie ma takiego wymogu od
                    klienta ) , całość skompilowana za pomocą webpacka
                </p>
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">EoND</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający technicznie , zwłaszcza w
                    zakresie animacji czy tez niektórych elementów , na stronie głównej wykorzystano bibliotekę paralax
                    , accordiony są napisane autorsko , całośc pisana w scss , wykorzystano gridaCss , nie korzystano z
                    żadnych frameworków typu bootstrap (nie korzystam z takich bibliotek jeżeli nie ma takiego wymogu od
                    klienta ) , całość skompilowana za pomocą webpacka
                </p>
            </div>
            <div class="portfolio-item--info">
                <h1 class="text-4xl mb-7">EoND</h1>
                <p class="text-xl">
                    Przedmiotem zlecenia było zakodowanie frontu. Projekt dosyć wymagający technicznie , zwłaszcza w
                    zakresie animacji czy tez niektórych elementów , na stronie głównej wykorzystano bibliotekę paralax
                    , accordiony są napisane autorsko , całośc pisana w scss , wykorzystano gridaCss , nie korzystano z
                    żadnych frameworków typu bootstrap (nie korzystam z takich bibliotek jeżeli nie ma takiego wymogu od
                    klienta ) , całość skompilowana za pomocą webpacka
                </p>
            </div>
        </div>
    </SmoothScroll>
</template>

<script>
import IMG from 'assets/uploads/2020/07/eond-cover.jpg';
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
