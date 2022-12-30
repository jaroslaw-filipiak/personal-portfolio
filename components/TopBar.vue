<template>
    <div class="top-bar">
        <NuxtLink class="logo" to="/" @click.native="handleClick">Jarosław Filipiak</NuxtLink>

        <div class="top-bar--right">
            <NuxtLink to="/">Realizacje</NuxtLink>
            <NuxtLink to="/about">O mnie</NuxtLink>
            <div class="pl-3 flex gap-2 flex-row items-center top-bar--contact-wrapper">
                <a class="block text-xs dont-underline opacity-70 hover:opacity-100" href="tel:663568828"
                    >+48 663 568 828</a
                >
                <a class="block text-xs dont-underline opacity-70 hover:opacity-100" href="mailto:info@j-filipiak.pl"
                    >info@j-filipiak.pl</a
                >
            </div>
        </div>

        <Hamburger />
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$store.commit('hideMenu');
        },
    },
};
</script>

<style lang="scss">
.logo {
    @apply transform hover:opacity-95;
}

.top-bar {
    @apply bg-dark-1 text-white w-screen h-11 fixed left-0 top-0 p-8 flex items-center justify-between z-20;

    &--contact-wrapper {
        position: relative;

        &::before {
            content: '';
            width: 1px;
            @apply block absolute left-0 top-0 h-full bg-white bg-opacity-30;
        }
    }

    &--right {
        @apply hidden lg:flex items-center gap-4;

        a {
            position: relative;
        }

        a:not(.dont-underline) {
            &::after {
                content: '';
                @apply w-0 bg-white block;
                height: 2px;
                transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
            }

            &:hover {
                &::after {
                    content: '';
                    @apply w-full bg-white block;
                    height: 2px;
                }
            }
        }

        .nuxt-link-exact-active:not(.dont-underline) {
            &::after {
                @apply w-full;
            }
        }
    }
}
</style>
