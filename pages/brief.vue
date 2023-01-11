<template>
    <SmoothScroll>
        <div class="page-content">
            <Brief />
        </div>
    </SmoothScroll>
</template>

<script>
export default {
    data() {
        return {
            scroll: null,
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
        // this.scroll.destroy();
        // this.$unregisterGSAPandSCROLL();
        this.scroll.destroy();
    },
    mounted() {
        // this.$registerGSAPandSCROLL(true);
        this.locomotiveScrollInit();
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
    },
};
</script>

<style lang="scss"></style>
