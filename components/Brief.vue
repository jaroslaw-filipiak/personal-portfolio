<template>
    <div class="brief">
        <div class="brief--header">
            <div class="section--title">
                <h1>Skonsultuj projekt</h1>
                <img src="~/assets/uploads/smush.svg" alt="obrazek-ozdobny" />
            </div>
            <h2>
                Czas na nowy projekt ? Jeżeli potrzebujesz kreatywnego projektu graficznego , porządnego teamu
                developerskiego lub stałego partnera do wspólpracy projektowej - wypelnij poniższy brief.
            </h2>
            <div class="brief--tip">
                <img src="~/assets/uploads/jf-avatar.png" alt="jaroslaw-filipiak-zdjecie" />
                <p>Zadbałem o to abyś mógł wysłać go w mniej niż 10 minut</p>
            </div>
        </div>
        <form novalidate class="brief-form" action="https://submit-form.com/cIhGWX1B">
            <!-- 01 -->
            <div class="form-row--wrapper">
                <div class="form-row--header">
                    <div class="form-row--number">01</div>
                    <div class="form-row--title">Specyfikacja projektu</div>
                    <small>(zaznacz jeden lub więcej obszarów)</small>
                </div>
                <div class="form-row--fields">
                    <!-- fields in this form row -->

                    <div class="flex flex-col lg:flex-row items-start lg:items-center gap-2 mt-10">
                        <div>
                            <input
                                id="graphic"
                                type="checkbox"
                                name="projektowanie graficzne"
                                value="tak - jest takie zapotrzebowanie"
                            />
                            <label for="graphic">
                                <span>Projektownie graficzne</span>
                            </label>
                        </div>
                        <div>
                            <input
                                id="proggraming"
                                type="checkbox"
                                name="programowanie"
                                value="tak , potrzebna jest usługa programistyczna"
                            />
                            <label for="proggraming">
                                <span>Usługa programistyczna</span>
                            </label>
                        </div>
                        <div>
                            <input id="www" type="checkbox" name="www" value="tak , potrzebuje strone www" />
                            <label for="www">
                                <span>Wykonanie strony www</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 02 -->
            <div class="form-row--wrapper">
                <div class="form-row--header">
                    <div class="form-row--number">02</div>
                    <div class="form-row--title">Szacowany budżet</div>
                </div>
                <div class="form-row--fields">
                    <!-- fields in this form row -->

                    <div class="vue-slider--wrapper">
                        <vue-slider
                            v-model="value"
                            :data="data"
                            :data-value="'id'"
                            :data-label="'name'"
                            :tooltip="'none'"
                            dot-size="32"
                            width="600"
                            height="3"
                        ></vue-slider>
                    </div>
                </div>
            </div>

            <button class="submit mt-10" type="submit">Wyślij</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    name: '3000 - 5000',
                },
                {
                    id: 2,
                    name: '5000 - 10000',
                },
                {
                    id: 3,
                    name: '10000 - 20000',
                },
                {
                    id: 4,
                    name: '+ 20000',
                },
            ],
            example1: {
                value: 20,
            },
            checkedNames: [],
            sliderValue: 5000,
            value: 30,
        };
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

    beforeDestroy() {
        // this.$unregisterGSAPandSCROLL();
    },
    mounted() {
        // this.$registerGSAPandSCROLL(false);
    },

    methods: {},
};
</script>

<style lang="scss">
.vue-slider--wrapper {
    @apply max-w-3xl mt-10 pl-14;
}
.vue-slider-process {
    background-color: #e9fb18 !important;
}
.vue-slider-rail {
    background-color: transparent !important;
    border: 1px solid;
    height: 18px;
}
.vue-slider-dot-handle {
    background-color: #e9fb18 !important;
}
.brief {
    @apply w-full pl-8 pr-8  pt-40 pb-40;

    &--header {
        h2 {
            @apply max-w-5xl lg:text-2xl mt-5;
        }
    }

    &--tip {
        @apply flex items-center pt-8 italic;

        p {
            @apply pl-4 text-sm;
            max-width: 190px;
        }
    }

    form {
        @apply mt-20;

        .form-row {
            &--wrapper {
                @apply relative pb-10;

                &::before {
                    @apply hidden lg:block;
                    content: '';
                    width: 1px;
                    height: 78%;
                    background-color: #fff;
                    // display: block;
                    position: absolute;
                    left: 20px;
                    top: 42px;
                }
            }

            &--header {
                @apply flex flex-col items-start  lg:flex-row lg:items-center gap-3;
            }

            &--number {
                @apply text-3xl lg:text-4xl font-bold;
            }

            &--title {
                @apply text-2xl lg:text-3xl;
            }

            &--fields {
                @apply pl-10;
            }

            small {
                @apply text-base;
            }
        }

        input[type='checkbox'] {
            // display: none;
            visibility: hidden;

            &::selection {
                background-color: transparent;
            }
        }

        label {
            position: relative;
            cursor: pointer;
            @apply border border-white inline-flex items-center p-5;
            width: 230px;
            height: 110px;

            &:hover {
                @apply bg-dark-2;
            }

            &::selection {
                background-color: transparent;
            }

            span {
                @apply text-2xl;

                &::selection {
                    background-color: transparent;
                }
            }
        }

        label:before {
            content: '';
            -webkit-appearance: none;

            @apply absolute right-0 top-0 w-full h-full  p-4 inline-flex items-center justify-center cursor-pointer bg-transparent;

            &::selection {
                background-color: transparent;
            }
        }

        input:checked + label:after {
            content: '';
            display: block;
            position: absolute;
            top: -12px;
            right: -4px;
            width: 9px;
            height: 22px;
            border: solid #000000;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);

            &::selection {
                background-color: transparent;
            }
        }

        input:checked + label:before {
            content: '';
            width: 20px;
            height: 20px;
            display: block;
            background-color: #e9fb18;
            position: absolute;
            right: -15px;
            top: -15px;

            &::selection {
                background-color: transparent;
            }
        }

        .submit {
            @apply bg-yellow text-dark-1 pt-3 pb-3 pl-8 pr-8 font-bold;
        }
    }
}
</style>
