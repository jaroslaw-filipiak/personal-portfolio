<template>
  <SmoothScroll>
    <div class="page-content">
      <BudgetWebsitesHero />
      <BudgetWebsitesMockup />
      <BudgetWebsitesFeatures />
      <div class="flex flex-col justify-center items-center w-full mt-20">
        <div class="section--title">
          <h3 class="max-w-4xl text-center pt-3">
            Tak wyglądają strony internetowe ,które zarabiają dla moich klientów
          </h3>
        </div>
      </div>
      <Portfolio />
      <Cta2 />
      <Faq />
    </div>
  </SmoothScroll>
</template>

<script>
  export default {
    data() {
      return {};
    },
    head: {
      title: 'Projektowanie stron www -  tylko profesjonalne strony firmowe',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Profesjonalne strony www. 10 lat doświadczenia. Nowoczesne strony zoptymalizowane pod Google. Optymalizacja UX. Bezpłatna Wycena - Poproś o indywidualną wycenę!. Szybki kontakt',
        },
      ],
    },
    mounted() {
      this.$registerLocomotiveScroll();
      // https://github.com/locomotivemtl/locomotive-scroll/issues/220
      // this.boxRotation();
      // this.animateOnScroll();
      //   this.animateLines();
      // this.revealText();
      //   this.textPluginTest();
    },
    methods: {
      boxRotation() {
        const gsap = this.$gsap;
        gsap.to('.hero h1', { rotation: 27, x: 100, duration: 1 });
      },
      animateOnScroll() {
        // this.$gsap.to(window, { duration: 2, scrollTo: 1000 });
        this.$gsap.to('.offer', {
          backgroundColor: 'red',
          opacity: 1,
          // ease: 'Power1.easeInOut',
          scrollTrigger: {
            trigger: '.offer',
            // pin: true,
            end: 'bottom',
            scrub: true,
            markers: false,
          },
        });
      },
      animateLines() {
        this.$gsap.to('html', {
          '--offer-line-width': '100%',
          // borderWidth: 100,
          opacity: 1,
          // ease: 'Power1.easeInOut',
          scrollTrigger: {
            trigger: '.offer',
            // pin: true,
            end: 'top 10%',
            scrub: true,
            markers: false,
          },
        });
      },
      revealText() {
        const reveal = document.querySelectorAll('.offer');
        reveal.forEach((el) => {
          const headings = el.querySelectorAll('h3');
          const tl = this.$gsap.timeline().from(headings, {
            x: -600,
            stagger: 0.05,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
          });
          this.$ScrollTrigger.create({
            trigger: el,
            start: 'top 80%',
            end: 'top 60%',
            markers: true,
            scrub: true,
            toggleActions: 'play none none reverse ',
            animation: tl,
          });
        });
      },
      textPluginTest() {
        const text = document.getElementById('text');
        const tl = this.$gsap.timeline({
          repeat: -1,
          yoyo: false,
          repeatDelay: 2,
          // onComplete: timelineDone,
          // onCompleteParams: ['test1', 'test2'],
        });
        tl.to(text, 0.8, {
          text: {
            value: 'profesjonalne strony internetowe ',
            delimiter: ' ',
            padSpace: true,
          },
          delay: 2,
        });
        tl.to(text, 0.8, {
          text: {
            value: 'niesamowite aplikacje mobilne',
            delimiter: ' ',
            padSpace: true,
          },
          delay: 2,
        });
        tl.to(text, 0.8, {
          text: {
            value: 'niestandardowe layouty stron www',
            delimiter: ' ',
            padSpace: true,
          },
          delay: 2,
        });
        // kkk
      },
    },
  };
</script>

<style lang="scss">
  .page-content {
    @apply min-h-screen flex flex-col items-start text-white;
    margin-bottom: 600px;
  }
</style>
