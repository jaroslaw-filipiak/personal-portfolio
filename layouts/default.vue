<template>
    <div class="template-default-wrapper">
        <div class="top-menu">
            <Hamburger />
        </div>
        <LeftBar />
        <div class="content">
            <Nuxt />
        </div>
        <Menu />
    </div>
</template>

<style lang="scss">
.template-default-wrapper {
    @apply bg-dark-2;
}
.left-bar {
    @apply bg-dark-1 text-white min-h-screen w-11 fixed left-0 top-0 p-8 flex flex-col items-center justify-between pb-14 z-20;
}
.contact-box {
    @apply flex flex-nowrap  transform -rotate-90 mb-32;
}

.content {
    @apply 3xl:container 3xl:mx-auto min-h-screen pl-16 sm:pl-20;
}
</style>
