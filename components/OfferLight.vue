<template>
    <div class="offer--wrapper">
        <div class="offer--inner">
            <div class="section--title">
                <h3>W czym mogę pomóc ?</h3>
                <img src="~/assets/uploads/smush.svg" alt="" />
            </div>

            <div class="offer--items mt-20">
                <div class="offer--row--wrapper">
                    <div class="offer--row">
                        <div class="w-7/12">
                            <h4>Projektowanie graficzne</h4>
                        </div>
                        <div class="w-full lg:w-4/12">
                            <ul>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-dimensions"
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
                                        <path d="M3 5h11"></path>
                                        <path d="M12 7l2 -2l-2 -2"></path>
                                        <path d="M5 3l-2 2l2 2"></path>
                                        <path d="M19 10v11"></path>
                                        <path d="M17 19l2 2l2 -2"></path>
                                        <path d="M21 12l-2 -2l-2 2"></path>
                                        <rect x="3" y="10" width="11" height="11" rx="2"></rect>
                                    </svg>
                                    <a href="">Projektowanie stron internetowych</a>
                                </li>
                                <li>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon icon-tabler icon-tabler-brand-google-play"
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
                                            d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z"
                                        ></path>
                                        <line x1="15" y1="9" x2="4.5" y2="20.5"></line>
                                        <line x1="4.5" y1="3.5" x2="15" y2="15"></line>
                                    </svg>
                                    <a href="">Projektowanie aplikacji mobilnych</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="offer--row__extend pl-8 pr-8 pb-5 mb-4 hidden">
                        <h1>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam quasi inventore fuga?
                            Nihil officiis doloremque qui quas nam eveniet mollitia autem consequatur perferendis culpa.
                            Fugit, et sapiente quisquam quae soluta exercitationem quaerat a.
                        </h1>
                    </div>
                </div>

                <div class="offer--row">
                    <div class="w-7/12">
                        <h4>WordPress</h4>
                    </div>
                    <div class="w-full lg:w-4/12">
                        <ul>
                            <li>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="icon icon-tabler icon-tabler-app-window"
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
                                    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                                    <path d="M6 8h.01"></path>
                                    <path d="M9 8h.01"></path>
                                </svg>

                                <a href="">Wdrażanie kompletnych stron www</a>
                            </li>
                            <li>
                                <a href="">Kodowanie projektów graficznych z PSD / XD / FIGMA do systemu WordPress</a>
                            </li>
                            <li>
                                <a href="">Budżetowe strony www oparte o darmowe szablony</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="offer--row">
                    <div class="w-7/12">
                        <h4>Wsparcie</h4>
                    </div>
                    <div class="w-full lg:w-4/12">
                        <ul>
                            <li>
                                <a href="">Opieka nad stronami internetowymi</a>
                            </li>
                            <li>
                                <a href="">Administracja / opieka nad stronami opartymi o system WordPress</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.offer {
    &--wrapper {
        @apply pt-20 pb-20  w-full;
        background-color: #dadada;
        color: #0f0f0f;
        font-family: 'Open Sans', sans-serif;
    }

    &--inner {
        @apply w-full lg:w-10/12 mx-auto pl-8 pr-8;
    }

    &--row {
        @apply border-t border-dark-1 flex flex-col lg:flex-row items-start lg:items-center p-8;

        h4 {
            @apply text-3xl mb-10;
        }

        li {
            @apply pb-4 text-xl flex items-start;

            a {
                @apply cursor-default pointer-events-none;
            }

            svg {
                @apply mr-2;
            }
        }
    }
}
</style>
