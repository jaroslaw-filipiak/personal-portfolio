<template>
    <div class="w-full">
        <div v-if="$fetchState.pending" class="pending">
            <p v-if="$fetchState.pending" class="text-xl mt-2 lg:text-3xl lg:mt-5">Wczytuje dane...</p>
            <p v-else-if="$fetchState.error" class="text-xl mt-2 lg:text-3xl lg:mt-5">
                Upss , nie udało się pobrać danych :(
            </p>
        </div>

        <div class="items">
            <NuxtLink
                v-for="item of items"
                :key="item.id"
                prefetch
                :to="`/portfolio/${item.id}`"
                class="item hover:opacity-85"
                :style="{
                    backgroundImage: `url(${item.better_featured_image.source_url}.webp)`,
                }"
            >
                <p class="bg-dark-2 p-1 pl-5 pr-5">{{ item.title.rendered }}</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
        };
    },
    async fetch() {
        this.items = await fetch('https://j-filipiak.pl/api/wp-json/wp/v2/portfolio/').then(res => res.json());
    },
};
</script>

<style lang="scss">
.pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
}
.item {
    @apply bg-dark-1 border border-2 border-dark-2 w-full h-96 sm:h-128  md:h-144  lg:w-96 lg:h-96  2xl:w-128 2xl:h-128 flex flex-col items-start justify-end bg-cover bg-no-repeat pb-3 pl-3 hover:opacity-90;

    p {
        @apply hidden;
    }

    &:hover {
        p {
            @apply block;
        }
    }
}
.items {
    @apply w-full min-w-full flex flex-wrap justify-start items-center sm:-mx-2 mb-8 mt-20 lg:justify-center;
}
</style>
