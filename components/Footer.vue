<template>
  <div class="footer--wrapper">
    <div class="footer--inner">
      <div class="footer--col footer--col-1">
        <h4>Kontakt</h4>
        <ul>
          <li><a href="tel:663568828">Zadzwoń do mnie: 663 568 828</a></li>
          <li>
            <a href="mailto:info@j-filipiak.pl">Email: info@j-filipiak.pl</a>
          </li>
          <li><NuxtLink to="/brief"> Formularz kontaktowy</NuxtLink></li>
          <li>
            <a
              target="_blank"
              href="https://calendly.com/jaroslaw-filipiak/30minmeeting"
            >
              Umów się na spotkanie via online</a
            >
          </li>
        </ul>
      </div>

      <div class="footer--col footer--col-2">
        <h4>Informacje</h4>
        <ul>
          <li><NuxtLink to="/about"> O mnie</NuxtLink></li>
          <li><NuxtLink to="#"> Prezentacja firmowa</NuxtLink></li>
          <li><NuxtLink to="#"> Aktualnośći</NuxtLink></li>
          <li><NuxtLink to="#"> Zasady współpracy</NuxtLink></li>
        </ul>
      </div>

      <div class="footer--col footer--col-3">
        <h4>Oferta</h4>
        <ul>
          <li><NuxtLink to="#"> Projektowanie graficzne</NuxtLink></li>
          <li><NuxtLink to="#"> Aplikacje mobilne</NuxtLink></li>
          <li><NuxtLink to="#"> Strony www WordPress</NuxtLink></li>
          <li><NuxtLink to="#"> Administracja stronami www </NuxtLink></li>
          <li><NuxtLink to="#"> Stała obsługa abonamentowa </NuxtLink></li>
          <li>
            <NuxtLink to="/oferta/tanie-strony-www"
              >Tanie / Budżetowe strony www</NuxtLink
            >
          </li>
          <li><NuxtLink to="#">Front-end : Vue.js / Nuxt.js </NuxtLink></li>
          <li><NuxtLink to="#">Wdrażenie PSD/Figma do WordPress</NuxtLink></li>
          <li><NuxtLink to="#">Programista ad hoc na godziny</NuxtLink></li>
        </ul>
      </div>

      <div class="footer--col footer--col-3">
        <h4>Publikuje również na</h4>
        <ul>
          <li><a href="#"> Facebook</a></li>
          <li><a href="#"> Instagram</a></li>
          <li><a href="#"> TikTok</a></li>
          <li><a href="#"> YouTube</a></li>
          <li><a href="#"> Dribble </a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Awwwards</a></li>
        </ul>
      </div>
    </div>
    <div class="footer--bottom">
      <div class="flex items-center gap-2">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-copyright"
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
            <circle cx="12" cy="12" r="9"></circle>
            <path
              d="M14 9.75a3.016 3.016 0 0 0 -4.163 .173a2.993 2.993 0 0 0 0 4.154a3.016 3.016 0 0 0 4.163 .173"
            ></path>
          </svg>
        </div>
        <div>
          <small
            ><NuxtLink to="#">j-filipiak.pl</NuxtLink> |
            <NuxtLink to="#">regulamin</NuxtLink> |
            <NuxtLink to="#">polityka prywatnośći</NuxtLink> |
            <NuxtLink to="#">Informacje o cookies</NuxtLink></small
          >
        </div>
      </div>

      <div class="flex items-center gap-2 techstack">
        <p>in</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-heart"
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
            <path
              d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            ></path>
          </svg>
        </div>

        <div>
          with <a href="https://nuxtjs.org/">NuxtJS</a> /
          <a href="https://tailwindcss.com/">tailwindcss</a> /
          <a href="https://github.com/features/actions">GitHub Actions</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .footer {
    &--wrapper {
      @apply bg-fixed flex flex-col items-center  w-full mx-auto  bg-yellow  fixed bottom-0 box-border;
      z-index: -1;
      // z-index: 33;
      height: 600px;
    }
    &--inner {
      @apply w-full h-full flex items-start justify-between lg:w-10/12 mx-auto  pl-8 pr-8 pt-28 pb-20;
    }
    &--bottom {
      @apply w-full  flex items-start justify-between lg:w-10/12 mx-auto pl-8 pr-8 pb-3;

      a {
        @apply opacity-70 hover:opacity-100;
      }

      .techstack {
        @apply text-xs;
      }
    }

    &--col {
      h4 {
        @apply pb-8 text-2xl font-bold font-Atkinson;
      }

      li {
        a {
          @apply uppercase text-sm font-Atkinson pb-2 inline-block;
          &::after {
            content: '';
            @apply w-0 bg-dark-1 block;
            height: 2px;
            transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
          }

          &:hover {
            &::after {
              content: '';
              @apply w-full bg-dark-1 block;
              height: 2px;
            }
          }
        }
      }
    }
  }
</style>
