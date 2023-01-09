<template>
    <div class="top-bar">
        <div class="flex items-center">
            <NuxtLink
                class="gsap-change-fullname-to-sign logo uppercase text-xs font-Atkinson pr-3"
                to="/"
                @click.native="handleClick"
                >Jarosław Filipiak</NuxtLink
            >
            <div class="pl-3 hidden lg:flex gap-2 flex-row items-center top-bar--contact-wrapper">
                <a class="block text-xs dont-underline opacity-70 hover:opacity-100" href="tel:663568828"
                    >+48 663 568 828</a
                >
                <a class="block text-xs dont-underline opacity-70 hover:opacity-100" href="mailto:info@j-filipiak.pl"
                    >info@j-filipiak.pl</a
                >
            </div>
        </div>

        <!-- 

			TODO: trzeba wrócić do widoku bezpłatna konsultacja + menu 
			w momencie gdy uporządkuje full screen menu , na chwilę obecną
			link do kontaktowej strony z tego względu, że nie mam menu + wyłączony hamburger
		 -->

        <!-- <div class="top-bar--right">
            <NuxtLink class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link" style="opacity: 0" to="#cta"
                >Bezpłatna konsultacja</NuxtLink
            >
            <Hamburger />
        </div> -->

        <div class="top-bar--right">
            <NuxtLink class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link" style="opacity: 0" to="#cta"
                >Bezpłatna konsultacja</NuxtLink
            >
            <NuxtLink
                class="uppercase text-xs font-Atkinson hidden lg:block gsap-cta-link"
                style="opacity: 0"
                to="/about"
                >O mnie</NuxtLink
            >
            <!-- <Hamburger /> -->
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        // this.$registerGSAPandSCROLL();
        // this.$showCTAlink();
    },
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
    @apply text-white w-screen h-11 fixed left-0 top-0 p-8 flex items-center justify-between z-20;

    background-color: transparent;

    &--contact-wrapper {
        position: relative;

        &::before {
            content: '';
            width: 1px;
            @apply block absolute left-0 top-0 h-full bg-white bg-opacity-30;
        }
    }

    &--right {
        @apply flex items-center gap-4;

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

        /*
        .nuxt-link-exact-active:not(.dont-underline) {
            display: none !important;
            // TODO: pamiętaj aby to wyłączyć w momencie gdy powrócisz do menu
            &::after {
                @apply w-full;
            }
        }
		*/
    }
}
</style>
