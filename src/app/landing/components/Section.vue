<script setup lang="ts">
defineProps<{
    title: string,
    dark?: boolean
}>()
</script>

<template>
    <div class="py-8" :class="{ 'darker': dark }">
        <div class="container">
            <h2 class="reveal">{{ title }}</h2>
            <hr class="short">
            <slot></slot>

        </div>
    </div>
</template>

<style lang="scss">
@keyframes width {
    100% {
        width: 100px
    }
}

@keyframes reveal {

    0% {
        transform: translate(-2rem, -2rem);
        background-position-x: 200%;

    }

    100% {
        transform: translate(0);
        background-position-x: 0%;

    }
}

[dir="rtl"] {
    @keyframes reveal {

        0% {
            transform: translate(2rem, 2rem);
            background-position-x: 200%;

        }

        100% {
            transform: translate(0);
            background-position-x: 0%;

        }
    }


}

.reveal {
    background: linear-gradient(90deg, var(--p-primary-color), transparent);
    background-repeat: no-repeat;
    background-size: 300%;
    animation: reveal both linear;
    background-clip: text;
    animation-timeline: view() !important;
    position: relative;
    margin-bottom: 1rem;
    animation-range: entry 50% cover 50% !important;
    text-decoration: underline;
    -webkit-background-clip: text;
    color: transparent;

}

.section-title {
    width: max-content;
    position: relative;
    margin-bottom: 2rem;
}

hr.short {
    width: 0px;
    height: 4px;
    margin-bottom: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    animation: width both linear;
    animation-timeline: view() !important;
    position: relative;
    margin-bottom: 3rem;
    animation-range: entry 50% cover 55% !important;

    background: var(--p-text-color);
}
</style>
