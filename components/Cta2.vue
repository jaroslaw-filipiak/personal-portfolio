<template>
  <div id="cta__layout2" class="cta__layout2--wrapper">
    <div class="cta__layout2--inner">
      <div class="cta__layout2--header">
        <div class="pr-5">
          <!-- <img src="~/assets/uploads/jarek-avatar.png" alt="" /> -->
        </div>
        <div class="mx-auto flex flex-col items-center justify-start">
          <div class="yellow-label">darmowa wycena</div>
          <div>
            <h4 class="text-center font-Atkinson">
              Skontaktuj się ze mną i uzyskaj
              <span>
                wycenę w <strong>24 godziny</strong>
                <img src="~/assets/uploads/smush.svg" alt="" />
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div class="cta__layout2--middle">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-device-mobile-message"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
            <path
              d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"
            ></path>
            <path d="M10 18v.01"></path>
          </svg>
          <a class="link-with-undeline" href="tel:+48 663 568 828">
            +48 663 568 828</a
          >
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <line x1="10" y1="14" x2="21" y2="3"></line>
            <path
              d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"
            ></path>
          </svg>
          <a class="link-with-undeline" href="mailto:info@j-filipiak.pl"
            >info@j-filipiak.pl</a
          >
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-briefcase"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <rect x="3" y="7" width="18" height="13" rx="2"></rect>
            <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="12" y1="12" x2="12" y2="12.01"></line>
            <path d="M3 13a20 20 0 0 0 18 0"></path>
          </svg>
          <NuxtLink class="link-with-undeline" to="/brief"
            >formularz kontaktowy</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="scss">
  .cta__layout2 {
    &--wrapper {
      @apply bg-cover bg-no-repeat min-w-full flex items-center -mt-36 pt-36;
      background-color: #161513;
    }

    &--inner {
      @apply w-full lg:w-10/12 mx-auto pl-8 pr-8 mt-20 pb-20;
    }

    &--header {
      //   background-color: #161513;
      @apply flex justify-center pb-12;
      h4 {
        @apply text-4xl lg:text-6xl mb-10 mt-5 max-w-4xl text-white;

        span {
          @apply relative inline-block;
        }

        img {
          @apply relative hidden lg:block -left-20 lg:left-72 top-6;
        }
      }
    }

    &--middle {
      @apply flex flex-col lg:flex-row items-center justify-center pb-8 lg:pl-8 lg:pr-8  gap-4 lg:gap-12 text-white;

      div {
        @apply flex items-center;
      }

      a {
        @apply text-2xl pl-3;
      }
    }

    &--footer {
      @apply flex flex-row items-start justify-center relative -top-20;

      p {
        @apply w-full lg:w-3/12 lg:text-xl text-white;
      }
    }
  }

  .yellow-label {
    @apply p-3 pl-5 pr-5 text-black bg-yellow font-bold font-Atkinson inline-block;
  }
</style>
