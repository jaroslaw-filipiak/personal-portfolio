<template>
  <SmoothScroll>
    <div class="about--wrapper">
      <div class="about--left">
        <p class="text-sm mb-4">Witam bardzo serdecznie 🖐</p>
        <h1 class="text-4xl mb-7">
          Jarosław Filipiak , <br />
          designer & web developer
        </h1>
        <h2 class="text-2xl mb-7">
          Specjalizuje się w projektowaniu oraz kodowaniu stron internetowych.
          Jestem web/front-end developerem z backgroundem graficznym(zaczynałem
          jako grafik). Ogromną przyjemność sprawia mi kompleksowa obsługa
          polegająca na tworzeniu projektów od białej kartki + kodowanie warstwy
          front-endowej aby finalnie projekt wdrożyć do systemu CMS
        </h2>
        <p>
          Zajmuje się tym na codzień jako freelancer, pracuje na Macu oraz na
          Windowsie. Posiadam solidny zestaw umiejętności i technologii
          związanych z całą otoczką procesu projektowania:
        </p>

        <ul class="mt-5">
          <li class="mb-3 underline">
            <span class="skills-heading">Projektowanie graficzne:</span>
          </li>
          <li>
            <strong>Figma</strong> Ostatnimi czasy przerzuciłem się na to
            narzędzie z Adobe XD aczkolwiek jestem w stanie stworzyć porządne
            UI/UX również w Photoshopie czy Sketchu.
          </li>
          <li>
            <strong>Adobe Photoshop</strong> zaczynałem od wersji 7.0 ponad 10
            lat temu , aktualnie wykorzystuje go raczej jako uzupełnienie ww.
            narzędzi chociażby do akcji / stykówek / image processora czy też
            tworzenia mockupów
          </li>
        </ul>

        <ul class="mt-5">
          <li class="mb-3 underline">
            <span class="skills-heading">Front-End:</span>
          </li>
          <li>
            <strong>HTML / CSS/ SASS</strong> - Od pewnego czasu piszę z
            wykorzystaniem tailwind , poprzednio pisałem style w scss
          </li>
          <li>
            <strong>JavaScript</strong> - Świetnie współpracuje mi się z
            Vue/Nuxt , piszę w esNext , do bundlownia frontów używam vite.js.
            Staram się aby mój stack technologiczny był zawsze up to date.
          </li>
        </ul>

        <ul class="mt-5">
          <li class="mb-3 underline">
            <span class="skills-heading">Back-End:</span>
          </li>
          <li>
            <strong>Wordpress</strong> - Bardzo dobra znajomośc Wordpressa ,
            umiejętność kodowania PSD -&gt; WP z wykorzystaniem
            Underscore/Understrap + ACF , znajomośc haków /filtrów / wp codexu
            oraz.. stackoverflow.Ta strona także wykorzystuje wordpress jako
            backend poprzez REST-API. Mam na swoim koncie parę wtyczek ,
            uwielbiam projekty wykorzystujęce WP jako headless CMS , coraz
            cześciej łącze go z Vue.js
          </li>
          <li>
            Posiadam doświadczenie przy projektach z wykorzystaniem strapi.io
            Pracuje z gitem a w moim workflow przy stawianiu projektów zawsze
            jest jakieś ci/cd , niedawno korzystałem z buddy.io , aktualnie
            testuje github actions
          </li>
        </ul>
      </div>
      <div class="about--right">
        <img class="block" src="~/assets/p3.jpg" />
      </div>
    </div>
  </SmoothScroll>
</template>

<script>
  export default {
    data() {
      return {
        pixiLoaded: false,
        pixiFilterLoaded: false,
      };
    },
    head() {
      return {
        title: 'Jarosław Filipiak / o mnie',
      };
    },
    mounted() {
      this.$registerLocomotiveScroll();
    },
  };
</script>

<style>
  .about--wrapper {
    @apply w-full flex flex-col-reverse items-center justify-center lg:flex-row min-h-screen h-full  lg:items-center lg:justify-between pt-28;
  }
  .about--left {
    @apply text-white pt-9 pr-7 pl-7 lg:w-1/2 xl:pr-1 2xl:pr-8 pb-10;
  }
  .about--right {
    @apply bg-black lg:h-screen lg:fixed lg:right-0 lg:top-0  2xl:w-5/12 2xl:flex 2xl:items-center 2xl:justify-center;
  }
</style>
