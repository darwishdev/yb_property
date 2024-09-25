<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="container">
        <h2 class="section-title pb-2">{{ title }}</h2>
        <slot></slot>
    </div>
</template>

<style>
.section-title {
    width: max-content;
    position: relative;
    margin-bottom: 2rem;
}

.section-title::after {
    content: '';
    position: absolute;
    width: 55%;
    height: 3px;
    /* thickness of the underline */
    background-color: #000000d7;
    /* color of the underline */
    left: 0;
    bottom: 0;
}
</style>
