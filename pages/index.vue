<template>
    <SmoothScroll>
        <div class="page-content">
            <Hero />
            <Offer />

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

            <Cta />
        </div>
    </SmoothScroll>
</template>

<script>
import siborsoftThumb from 'assets/uploads/2021/10/siborsoft_thumb.jpg';
import promiseThumb from 'assets/uploads/2021/10/promise4cloud_thumb.jpg';
import lukasiukThumb from 'assets/uploads/2020/07/lukasiuk-thumb.jpg';
import eondThumb from 'assets/uploads/2020/07/eond-thumb.jpg';
import knotsThumb from 'assets/uploads/2020/03/23knots-thumbnail.jpg';
import whatAboutThumb from 'assets/uploads/2020/03/whatabout.jpg';

export default {
    data() {
        return {
            siborsoft: siborsoftThumb,
            promise: promiseThumb,
            lukasiuk: lukasiukThumb,
            eond: eondThumb,
            knots: knotsThumb,
            whatAbout: whatAboutThumb,
            scroll: null,
            ScrollTrigger: null,
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

    beforeDestroy() {
        this.scroll.destroy();
    },
    mounted() {
        this.locomotiveScrollInit();
        // this.changeJaroslawFilipiakToJF();
    },

    methods: {
        locomotiveScrollInit() {
            this.$gsap.registerPlugin(this.$ScrollTrigger);

            this.scroll = new this.$LocomotiveScroll({
                el: document.querySelector('.smooth-scroll'),
                smooth: true,

                getDirection: true,
            });

            this.scroll.on('scroll', this.$ScrollTrigger.update);
            // this.scroll.stop();

            // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            this.$ScrollTrigger.scrollerProxy('.smooth-scroll', {
                scrollTop(value) {
                    return arguments.length ? this.scroll.scrollTo(value, 0, 0) : this.scroll.scroll.instance.scroll.y;
                }, // we don't have to define a scrollLeft because we're only scrolling vertically.
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                },
                // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
                pinType: document.querySelector('.smooth-scroll').style.transform ? 'transform' : 'fixed',
            });
        },
        changeJaroslawFilipiakToJF() {
            // const gsap = this.$gsap;
            // gsap.to('.hero h2', {
            //     opacity: 1,
            //     backgroundColor: 'red',
            //     immediateRender: false,
            //     // scrollTrigger: {
            //     //     trigger: '.offer',
            //     //     scroller: '.smooth-scroll',
            //     //     scrub: true,
            //     //     start: 'top bottom',
            //     //     end: 'top 90%',
            //     //     markers: true,
            //     // },
            // });
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
