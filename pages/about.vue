<template>
  <div class="about--wrapper">
    <div class="about--left">
      <h1 class="text-4xl mb-7">
        Jarosław Filipiak , <br />
        designer & front-end developer
      </h1>
      <h2 class="text-2xl mb-7">
        Specjalizuje się w projektowaniu oraz wdrażaniu stron internetowych
        opartych o system Wordpress a także projektowaniem interfejsów
        użytkownika. Na codzień obsługuję agencję oraz mniejsze firmy jako
        front-end developer. Do moich zadań należy kodowanie frontu + podinanie
        pod WP
      </h2>
      <p>
        Zajmuje się tym na codzień jako freelancer, pracuje na Macu oraz na
        Windowsie. Posiadam solidny zestaw umiejętności i technologii związanych
        z całą otoczką procesu projektowania: Projektowanie:
      </p>

      <ul class="mt-5">
        <li class="mb-3 underline">
          <span class="skills-heading">Projektowanie:</span>
        </li>
        <li>
          <strong>Figma</strong> Ostatnimi czasy przerzuciłem się na to
          narzędzie z Adobe XD aczkolwiek jestem w stanie stworzyć porządne
          UI/UX również w Photoshopie czy Sketchu
        </li>
        <li>
          <strong>Adobe Photoshop</strong> zaczynałem od wersji 7.0 ponad 10 lat
          temu , nie mniej nadal wykupuje kursy dotyczące tego programu
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
          <strong>Wordpress</strong> - Bardzo dobra znajomośc Wordpressa ,
          umiejętność kodowania PSD -&gt; WP z wykorzystaniem
          Underscore/Understrap + ACF , znajomośc haków /filtrów / wp codexu
          oraz.. stackoverflow.Ta strona także wykorzystuje wordpress jako
          backend poprzez REST-API. Mam na swoim koncie parę wtyczek , uwielbiam
          projekty wykorzystujęce WP jako headless CMS
        </li>
        <li>
          <strong>JavaScript</strong>Świetnie współpracuje mi się z Vue/Nuxt ,
          piszę w esNext , do bundlownia frontów używam vite.js
        </li>
      </ul>
    </div>
    <div class="about--right">
      <img class="block" src="~/assets/p3.jpg" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.about--wrapper {
  @apply w-full flex flex-col-reverse items-center justify-center lg:flex-row min-h-screen h-full  lg:items-center lg:justify-between pt-28;
}
.about--left {
  @apply text-white pt-9 pr-7 pl-7 lg:w-1/2 xl:pr-28 pb-10;
}
.about--right {
  @apply bg-dark-1 lg:h-screen lg:fixed lg:right-0 lg:top-0  2xl:w-5/12 2xl:flex 2xl:items-center 2xl:justify-center;
}
</style>
