<template>
    <div class="offer">
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
                                <a href="">Projektowanie stron internetowych</a>
                            </li>
                            <li>
                                <a href="">Projektowanie aplikacji mobilnych</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="offer--row">
                <div class="w-7/12">
                    <h4>WordPress</h4>
                </div>
                <div class="w-full lg:w-4/12">
                    <ul>
                        <li>
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
</template>

<script>
export default {};
</script>

<style lang="scss">
.offer {
    @apply w-full lg:w-10/12 mx-auto pl-8 pr-8 pt-20;

    &--row {
        @apply border-t flex flex-col lg:flex-row items-start lg:items-center p-8;

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
