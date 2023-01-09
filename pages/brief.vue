<template>
    <div class="page-content">
        <Brief />
    </div>
</template>

<script>
export default {
    data() {
        return {};
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
        // this.$unregisterGSAPandSCROLL();
    },
    mounted() {
        // this.$registerGSAPandSCROLL(false);
    },

    methods: {},
};
</script>

<style lang="scss"></style>
