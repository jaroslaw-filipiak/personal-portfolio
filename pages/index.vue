<template>
    <div class="page-content">
        <Hero />
        <Offer />

        <!-- <Items /> -->
        <div class="w-full">
            <div class="section--title w-10/12 mx-auto mt-36">
                <h3>Wybrane realizacje</h3>
                <img src="~/assets/uploads/smush.svg" alt="" />
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
    </div>
</template>

<script>
import siborsoftThumb from 'assets/uploads/2021/10/siborsoft_thumb.jpg';
import promiseThumb from 'assets/uploads/2021/10/promise4cloud_thumb.jpg';
import lukasiukThumb from 'assets/uploads/2020/07/lukasiuk-thumb.jpg';
import eondThumb from 'assets/uploads/2020/07/eond-thumb.jpg';
import knotsThumb from 'assets/uploads/2020/03/23knots-thumbnail.jpg';
import whatAboutThumb from 'assets/uploads/2020/03/whatabout.jpg';

import gsap from 'gsap';

export default {
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

    head: {
        title: 'Projektowanie stron www -  tylko profesjonalne strony firmowe',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
            },
        ],
    },

    mounted() {},

    methods: {
        gsapTopBarAnim() {
            gsap.to('.top-bar', {
                backgroundColor: '#000',
                immediateRender: false,
                scrollTrigger: {
                    id: 'test',
                    trigger: '.hero h1',
                    scroller: '.smooth-scroll',
                    scrub: true,
                    start: 'top 30%',
                    end: 'top 10%',
                    markers: false,
                },
            });
        },
    },
};
</script>

<style lang="scss">
.page-content {
    @apply min-h-screen flex flex-col items-start  text-white;
}

.header {
    @apply pl-8;
}
.pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
}
.item {
    @apply bg-dark-1  border-dark-2 w-4/5 h-96 sm:h-128  md:h-144  lg:w-96 lg:h-96  2xl:w-128 2xl:h-128 flex flex-col items-start justify-end bg-cover bg-no-repeat pb-3 pl-3 hover:opacity-90;

    p {
        @apply hidden;
    }

    &:hover {
        p {
            @apply block;
        }
    }
}
.items {
    @apply w-full min-w-full flex flex-wrap justify-center items-center sm:-mx-2 mb-8 mt-20 lg:justify-center;
}
</style>
