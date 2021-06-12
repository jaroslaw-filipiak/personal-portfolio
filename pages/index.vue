<template>
  <div class="page-content">
    <div class="header">
      <p class="text-xl">Witam bardzo serdecznie 🖐</p>
      <p class="text-4xl lg:text-7xl mt-2 lg:mt-5">Jarosław Filipiak</p>
      <p class="text-xl mt-2 lg:text-3xl lg:mt-5">
        designer & front-end developer
      </p>
    </div>
    <Items />
  </div>
</template>

<script>
export default {}
</script>

<style>
.page-content {
  @apply bg-dark-2 min-h-screen flex flex-col items-start  text-white pt-28;
}

.header {
  @apply pl-10 sm:pl-28;
}
</style>
