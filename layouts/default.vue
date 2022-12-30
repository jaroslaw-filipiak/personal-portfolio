<template>
    <div class="template-default-wrapper">
        <TopBar />
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

.content {
    @apply 3xl:container 3xl:mx-auto min-h-screen;
}
</style>
