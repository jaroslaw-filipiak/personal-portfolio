<template>
  <div class="faq--item" :class="{ collapsed: state.isExpanded }">
    <header @click="toggle">
      <div class="faq--title">dadsa</div>
      <div class="faq--btn">
        <img src="@/assets/uploads/arrow-down-circle 1.svg" alt="" />
      </div>
    </header>

    <div class="faq--content">
      Strona internetowa to jedno z najlepszych narzędzi współczesnego
      marketingu, ale tylko pod warunkiem, że traktujesz to narzędzie na
      poważnie. Relacja z Klientem bywa krucha i trudna. Konkurencja jest bardzo
      duża. Jaki w tej relacji udział ma Twoja strona? Daj się znaleźć. Wszystko
      zaczyna się od pierwszego spotkania. Twój Klient musi Cię znaleźć. To
      szczególnie trudne, jeśli nie wie, że istniejesz. Tu z pomocą przychodzi
      szereg narzędzi (optymalizacja strony, Kampanie Googl
    </div>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';

  const state = reactive({ isExpanded: false });

  function toggle() {
    state.isExpanded = !state.isExpanded;
  }
</script>

<style lang="scss" scoped>
  .faq {
    &--content {
      max-height: 0px;
      @apply overflow-hidden mt-6;
    }
    &--item {
      @apply pb-10 mt-10;
      border-bottom: 1px solid white;
      header {
        @apply flex items-center justify-between cursor-pointer;
      }

      img {
        &::selection {
          outline: none;
          background-color: transparent;
        }
      }

      .faq--btn {
        transform: rotate(0deg);
      }
    }
  }

  .collapsed {
    .faq--content {
      max-height: 800px;
    }
    .faq--btn {
      transform: rotate(180deg);
    }
  }
</style>
