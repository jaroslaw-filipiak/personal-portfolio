<template>
    <div id="cta" class="cta--wrapper">
        <div class="cta--inner">
            <div class="cta--header">
                <div class="pr-5">
                    <img src="~/assets/uploads/jarek-avatar.png" alt="" />
                </div>
                <div class="pl-5">
                    <div class="yellow-label">darmowa wycena</div>
                    <div>
                        <h4>
                            Skontaktuj się ze mną i uzyskaj
                            <span>
                                wycenę w 24 godziny
                                <img src="~/assets/uploads/smush.svg" alt="" />
                            </span>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="cta--middle">
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
                        <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
                        <path d="M10 18v.01"></path>
                    </svg>
                    <a href="tel:+48 663 568 828"> +48 663 568 828</a>
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
                        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                    <a href="mailto:info@j-filipiak.pl">info@j-filipiak.pl</a>
                </div>
                <div class="hidden">
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
                    <a href="#">formularz kontaktowy</a>
                </div>
            </div>
            <div class="cta--footer">
                <p>
                    Porozmawiamy o Twoim projekcie — w ciągu 24 godzin możesz liczyć na pierwszy kontakt z mojej strony.
                </p>
                <p>
                    Wycena przygotowana specjalnie dla Ciebie — przygotuję ofertę szytą na miarę, która zawierać będzie
                    wszystkie najważniejsze czynniki.
                </p>
                <p>
                    Wspólnie stworzymy świetny projekt — po akceptacji oferty możemy rozpocząć prace nad Twoim
                    projektem.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cta {
    &--wrapper {
        // background-image: url('@/assets/uploads/cta-bg.jpg');
        @apply bg-cover bg-no-repeat min-h-screen flex items-center bg-fixed mt-20;
    }

    &--inner {
        @apply w-full lg:w-10/12 mx-auto pl-8 pr-8 mt-20 pb-20;
    }

    &--header {
        @apply flex justify-center pb-8 mb-5;
        h4 {
            @apply text-4xl lg:text-6xl mb-10 mt-5 max-w-4xl;

            span {
                @apply relative inline-block;
            }

            img {
                @apply relative hidden lg:block -left-20 lg:left-52 top-3;
            }
        }
    }

    &--middle {
        @apply flex flex-col lg:flex-row items-center justify-center pt-8 pb-8 lg:pt-20 lg:pb-20 lg:pl-8 lg:pr-8  gap-4 lg:gap-12;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
        border-bottom: 1px solid rgba(255, 255, 255, 0.5);

        div {
            @apply flex items-center;
        }

        a {
            @apply text-2xl pl-3;
        }
    }

    &--footer {
        @apply flex flex-col lg:flex-row items-start justify-between gap-3 p-8;

        p {
            @apply w-full lg:w-3/12 lg:text-xl;
        }
    }
}

.yellow-label {
    @apply p-3 pl-5 pr-5 text-black bg-yellow font-bold font-Atkinson inline-block;
}
</style>
