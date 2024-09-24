<script setup lang="ts">
defineProps<{
    title : string
}>()
</script>

<template>
    <div class="py-3 px-3 md:px-6 my-5">
        <h2 class="w-9 md:w-max section-title pb-2">{{ $t(title) }}</h2>
        <slot></slot>
    </div>
</template>

<style>
.section-title{
    width: max-content;
    position: relative;
    margin-bottom: 2rem;
}

.section-title::after {
    content: '';
    position: absolute;
    width: 55%;
    height: 3px; /* thickness of the underline */
    background-color: var(--p-text-color); /* color of the underline */
    left: 0;
    bottom: 0;
}
</style>