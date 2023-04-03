<template>
  <div class="faq--wrapper">
    <header>
      <div class="flex flex-col justify-center items-center w-full">
        <div class="section--title">
          <h4 class="text-xl text-center">sekcja FAQ czyli...</h4>
          <h3 class="max-w-4xl text-center pt-3">
            Najczęściej zadawane pytania
          </h3>
        </div>
      </div>
    </header>
    <div class="faq--items">
      <FaqItem v-for="item in faqs" v-bind:key="item.id" />
    </div>
    <div class="faq--footer">
      <div class="flex items-center justify-start mt-6">
        <p class="pr-20">
          Nie znalezłeś/aś odpowiedzi na pytanie ?
          <strong>skontaktuj się ze mną</strong> a chętnie udziele więcej
          informacji
        </p>
        <a
          href="#"
          class="ml-6 md:ml-0 inline-flex underline-after text-yellow relative"
          >+48 663 568 828</a
        >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDI4IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC42NjEgMy41MzE0N0MyNS40MzgxIDMuMzQ5MzcgMjYuMjY1IDIuNzE3MjkgMjYuOTE5OSAyLjI3MjVNMjYuOTE5OSAyLjI3MjVDMjYuOTMyNSAyLjI2MzkgMjYuNzY3OCAyLjA4NjAzIDI2Ljc1NDggMi4wNzI1MUMyNi4xNyAxLjQ2NTMgMjQuODk5MiAwLjgyNjg3NiAyNC4yMDk1IDAuNjc5MzkyTTI2LjkxOTkgMi4yNzI1QzIyLjQzOTcgMS44ODcwNiAxNy40NTIgMS45Mjg4MiAxMi41MjI0IDEuOTUwMDlDOC41NDQ4MSAxLjk2NzI1IDQuNjA1IDEuOTcxMDcgMS4wMDAxMiAxLjcyNjM1IiBzdHJva2U9IiNGRkQ0MEIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
          alt="arrow"
          class="hidden md:block ml-6 pr-6"
          style="width: 64px"
        />
        <a
          href="#"
          class="ml-6 md:ml-0 inline-flex underline-after text-yellow relative"
          >info@j-filipiak.pl</a
        >
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iNSIgdmlld0JveD0iMCAwIDI4IDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNC42NjEgMy41MzE0N0MyNS40MzgxIDMuMzQ5MzcgMjYuMjY1IDIuNzE3MjkgMjYuOTE5OSAyLjI3MjVNMjYuOTE5OSAyLjI3MjVDMjYuOTMyNSAyLjI2MzkgMjYuNzY3OCAyLjA4NjAzIDI2Ljc1NDggMi4wNzI1MUMyNi4xNyAxLjQ2NTMgMjQuODk5MiAwLjgyNjg3NiAyNC4yMDk1IDAuNjc5MzkyTTI2LjkxOTkgMi4yNzI1QzIyLjQzOTcgMS44ODcwNiAxNy40NTIgMS45Mjg4MiAxMi41MjI0IDEuOTUwMDlDOC41NDQ4MSAxLjk2NzI1IDQuNjA1IDEuOTcxMDcgMS4wMDAxMiAxLjcyNjM1IiBzdHJva2U9IiNGRkQ0MEIiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
          alt="arrow"
          class="hidden md:block ml-6 pr-6"
          style="width: 64px"
        />
        <a
          href="#"
          class="ml-6 md:ml-0 inline-flex underline-after text-yellow relative"
          >porozmawiajmy via online</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  const faqs = [
    {
      id: 1,
      title: 'Ile kosztuje strona www ?',
      content: 'lorem ipsum ldf',
    },
    {
      id: 2,
      title: 'Ile kosztuje strona www ?222',
      content: 'lorem ipsum ldf',
    },
    {
      id: 3,
      title: 'Ile kosztuje strona www ?33',
      content: 'lorem ipsum ldf',
    },
  ];
</script>

<style lang="scss">
  .faq {
    &--wrapper {
      @apply w-full xl:w-9/12 pt-20 pb-20 pl-8 pr-8  mx-auto;
    }
    &--title {
      @apply text-4xl;
      &::selection {
        outline: none;
        background-color: transparent;
      }
    }
    &--content {
      @apply max-w-7xl text-xl;
    }
    &--items {
      @apply pt-20;
    }

    &--footer {
      @apply pt-10;
    }
  }
</style>
