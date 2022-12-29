<template>
    <div class="contact--wrapper">
        <div class="contact--left">
            <h1 class="text-4xl mb-7">Jestem dostępny dla firm, agencji kreatywnych oraz osób prywatnych</h1>
            <h2 class="text-2xl mb-7">Zlecenia wyceniam jako 'fixed price' lub wg. stawki godzinowej</h2>
            <div class="flex">
                <a class="underline text-3xl mt-7 block mr-8" href="mailto:info@j-filipiak.pl">Napisz do mnie</a>
                <a class="underline text-3xl mt-7 block" href="tel:663568828">lub zadzwoń: 663 568 828</a>
            </div>
        </div>
        <div class="contact--right">
            <img class="block" src="~/assets/p3.jpg" />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.contact--wrapper {
    @apply w-full flex flex-col-reverse items-center justify-center lg:flex-row min-h-screen h-full lg:items-center lg:justify-between pt-28;
}
.contact--left {
    @apply text-white lg:w-1/2 xl:pr-28;
}
.contact--right {
    @apply bg-dark-1 lg:h-screen lg:fixed lg:right-0 lg:top-0  2xl:w-5/12 2xl:flex 2xl:items-center 2xl:justify-center;
}
</style>
