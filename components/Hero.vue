<template>
    <div class="hero">
        <div>
            <h1 class="text-xl lg:text-3xl mt-2 lg:font-bold">Projektowanie stron internetowych</h1>
            <h2 class="text-5xl lg:text-7xl mt-2 font-normal">
                Projektuje oraz wdrażam profesjonalne strony internetowe
                <span>
                    <p>i nie tylko</p>
                    <img src="~/assets/uploads/smush-1.svg" alt="" />
                </span>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {},
    methods: {
        changeLogoTextContent(text) {
            const logo = document.querySelector('.gsap-change-fullname-to-sign');
            logo.innerHTML = text;
        },
    },
};
</script>

<style lang="scss" scoped>
.hero {
    // background-image: url('assets/uploads/bg-black.jpg');
    @apply bg-cover bg-fixed bg-no-repeat bg-black;

    @apply w-full h-screen flex flex-col items-center justify-center pl-8 pr-8;
    text-align: left;

    h2 {
        @apply max-w-4xl;

        span {
            @apply relative inline-block;
            top: 10px;
        }

        p {
            @apply absolute z-10 text-black text-3xl;
            left: 25px;
            top: 6px;
        }
    }
}
</style>
