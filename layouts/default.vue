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

    beforeCreate() {},

    mounted() {},

    methods: {},
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
