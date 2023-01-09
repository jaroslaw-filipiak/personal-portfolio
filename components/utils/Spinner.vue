<template>
    <div class="px-griditem">
        <div id="qt-loading-qtload003" class="qt-loading">
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
};
</script>

<style lang="scss">
:root {
    --px-color-bodybg: transparent;
    --px-color-boxbg: transparent;
    --px-color-boxborder: transparent;
    --px-border-radius: 6px;

    --qt-loadingcolor-main: 'black' !important;
    --qt-loadingcolor-secondary: 'black' !important;
}

.px-app,
.px-app *,
.px-app *::before,
.px-app *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
.px-continer {
    @apply border;
    width: 100%;
    max-width: 600px;
    padding: 4rem 0;
}
.px-gridbox {
    padding-bottom: 3rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
}
.px-griditem {
    @apply w-6 h-6 mr-5;
    border-radius: var(--px-border-radius);
    background-color: var(--px-color-boxbg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.qt-loading {
    position: relative;
    width: 3em;
    height: 3em;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

/* qtload003 */
#qt-loading-qtload003 > div {
    position: relative;
    width: 3em;
    height: 3em;
    border: 4px solid;
    border-top-color: transparent;
    border-right-color: rgb(var(--qt-loadingcolor-main));
    border-bottom-color: transparent;
    border-left-color: rgb(var(--qt-loadingcolor-main));
    border-radius: 50%;
    animation: qt-loadanim001 1s infinite linear;
}

@keyframes qt-loadanim001 {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes qt-loadanim002 {
    0% {
        transform: translate(0, 0) rotate(0deg);
    }
    15% {
        transform: translate(1em, 0) rotate(90deg);
    }
    25% {
        transform: translate(1em, 0) rotate(90deg);
    }
    40% {
        transform: translate(1em, 1em) rotate(90deg);
    }
    50% {
        transform: translate(1em, 1em) rotate(90deg);
    }
    65% {
        transform: translate(0, 1em) rotate(0deg);
    }
    75% {
        transform: translate(0, 1em) rotate(0deg);
    }
    90% {
        transform: translate(0, 0) rotate(0deg);
    }
    100% {
        transform: translate(0, 0) rotate(0deg);
    }
}
@keyframes qt-loadanim003 {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}
@keyframes qt-loadanim004 {
    0% {
        transform: scale(0%, 0%);
        opacity: 1;
    }
    100% {
        transform: scale(100%, 100%);
        opacity: 0;
    }
}
@keyframes qt-loadanim005 {
    0% {
        transform: translateY(0%);
    }
    20% {
        transform: translateY(-50%);
    }
    40% {
        transform: translateY(0%);
    }
}
@keyframes qt-loadanim006 {
    0% {
        background-color: rgb(var(--qt-loadingcolor-main));
    }
    20% {
        background-color: rgb(var(--qt-loadingcolor-secondary));
    }
    40% {
        background-color: rgb(var(--qt-loadingcolor-main));
    }
}
@keyframes qt-loadanim007 {
    0% {
        transform: scaleY(100%);
    }
    20% {
        transform: scaleY(200%);
    }
    40% {
        transform: scaleY(100%);
    }
}
@keyframes qt-loadanim008 {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(180deg);
    }
    50% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes qt-loadanim009 {
    0% {
        transform: scale(0%);
    }
    25% {
        transform: scale(100%);
    }
    50% {
        transform: scale(0%);
    }
    100% {
        transform: scale(0%);
    }
}
</style>
