<template>
    <div class="template-default-wrapper">
        <TopBar />
        <div>
            <div class="content">
                <Nuxt />
            </div>
            <Menu />
        </div>
    </div>
</template>

<script>
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';

export default {
    data() {
        return {
            posts: [],
        };
    },

    watch: {
        $route(to, from) {},
    },

    beforeCreate() {
        // this.$registerGSAPandSCROLL();
    },

    mounted() {
        // this.$registerGSAPandSCROLL(true);
        // this.$changeJaroslawFilipiakToJF();
        // this.$showCTAlink();
    },

    methods: {
        /*
        disableScrollTrigger() {
            ScrollTrigger.disable();
            console.log('ScrollTrigger.disable;');
        },
        clearScrollMemory() {
            ScrollTrigger.clearScrollMemory();
            console.log('clear scroll memory');
        },
        listenerTest() {
            ScrollTrigger.addEventListener('scrollStart', () => {
                console.log('listenerTest event fired');
            });
        },
        registerGSAPandScroll() {
            gsap.registerPlugin(ScrollTrigger);
            const scroll = new LocomotiveScroll({
                el: document.querySelector('.smooth-scroll'),
                smooth: false,
            });
            scroll.on('scroll', ScrollTrigger.update);

            // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
            ScrollTrigger.scrollerProxy('.smooth-scroll', {
                scrollTop(value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
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
        updateScroll() {
            ScrollTrigger.update();
            ScrollTrigger.refresh();
        },

        showCTAlink() {
            gsap.to('.gsap-cta-link', {
                opacity: 1,
                immediateRender: false,
                scrollTrigger: {
                    trigger: '.hero h1',
                    scroller: '.smooth-scroll',
                    scrub: true,
                    start: 'top 30%',
                    end: 'top 20%',
                    markers: false,
                },
            });
        },
        gsapTopBarAnim() {
            gsap.to('.top-bar', {
                backgroundColor: '#000',
                immediateRender: false,
                scrollTrigger: {
                    trigger: '.hero h1',
                    scroller: '.smooth-scroll',
                    scrub: true,
                    start: 'top 30%',
                    end: 'top 10%',
                    markers: false,
                },
            });
        },

		*/
    },
};
</script>

<style lang="scss">
.content {
    // @apply 3xl:container 3xl:mx-auto min-h-screen;
}

.section--title {
    @apply pb-9;

    h1,
    h2,
    h3,
    h4,
    h5 {
        @apply text-5xl;
    }
    img {
        @apply relative lg:left-48 top-3;
    }
}
</style>
