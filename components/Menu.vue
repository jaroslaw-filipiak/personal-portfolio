<template>
    <div class="main-menu" :class="{ 'menu-is-hidden': isHidden }">
        <div class="d-flex flex-column w-full h-screen">
            <div class="menu-item">
                <NuxtLink class="flex items-center justify-center" to="/about" @click.native="handleClick"
                    >O mnie</NuxtLink
                >
            </div>

            <div class="menu-item">
                <NuxtLink class="min-w-full flex items-center justify-center" to="/" @click.native="handleClick"
                    >Portfolio</NuxtLink
                >
            </div>
        </div>

        <div class="contact-info">
            <a class="text-3xl mt-7 block mr-8" href="mailto:info@j-filipiak.pl"
                >info@j-filipiak.pl
                <span>Napisz do mnie maila</span>
            </a>
            <a class="text-3xl mt-7 block" href="tel:663568828">663 568 828 <span>Zadzwoń do mnie</span> </a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isHidden() {
            return this.$store.state.isMenuHidden;
        },
    },
    methods: {
        handleClick() {
            console.log('click in nuxt link');
            this.$store.commit('toggleMenuVisible');
        },
    },
};
</script>

<style>
.menu-item {
    @apply w-full flex items-center justify-center h-1/2 text-white  text-3xl transform hover:bg-dark-1 border border-dark-1 relative;
}

.menu-item a {
    @apply absolute left-0 top-0  w-full h-full;
}
.main-menu {
    @apply fixed w-screen h-screen left-0 top-0 bg-dark-2  flex flex-col xl:flex-row items-center justify-between z-10 xl:items-start;
}

.main-menu a {
    @apply mx-auto text-center  pl-10 lg:pl-0;
}
.menu-is-hidden {
    display: none !important;
}

.hidden {
    display: none;
}

.contact-info {
    @apply flex-col items-center lg:items-center justify-center w-full xl:w-1/3 p-10 md:p-12  xl:flex xl:h-full text-white xl:items-center;
}

.contact-info a {
    @apply relative mb-12 mt-12;
    &:after {
        content: '';
        display: block;
        height: 3px;
        @apply absolute -bottom-3 bg-yellow-300 w-0 transition-all;
    }

    &:hover {
        &:after {
            content: '';
            @apply w-full;
        }
    }
}

.contact-info span {
    @apply absolute -left-16 bg-yellow-300 p-1 text-sm -top-9 block w-full text-dark-1 font-semibold;
}
</style>
