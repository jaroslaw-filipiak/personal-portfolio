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

    beforeDestroy() {},

    mounted() {
        this.$registerLocomotiveScroll();
    },

    methods: {},
};
</script>

<style lang="scss"></style>
