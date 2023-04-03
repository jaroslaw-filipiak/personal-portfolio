<template>
  <SmoothScroll>
    <div class="page-content">
      <Hero />
      <Offer />
      <Portfolio heading="Wybrane realizacje" hasImg />
      <Cta />
    </div>
  </SmoothScroll>
</template>

<script setup></script>

<style lang="scss">
  .page-content {
    @apply min-h-screen flex flex-col items-start text-white;
    margin-bottom: 600px;
  }

  .header {
    @apply pl-8;
  }
  .pending {
    @apply w-screen h-screen fixed left-0 top-0 flex items-center justify-center bg-dark-2;
  }
</style>
