<template>
    <button
        class="hamburger hamburger--vortex fixed right-5 top-5 z-30"
        :class="{ 'is-active': !isVisible }"
        type="button"
        @click="handleClick"
    >
        <span class="hamburger-box">
            <span class="hamburger-inner"></span>
        </span>
    </button>
</template>

<script>
export default {
    computed: {
        isVisible() {
            return this.$store.state.isMenuHidden;
        },
    },
    methods: {
        handleClick(e) {
            // const hamburger = document.querySelector('.hamburger')
            // hamburger.classList.toggle('is-active')
            this.$store.commit('toggleMenuVisible');
        },
    },
};
</script>
