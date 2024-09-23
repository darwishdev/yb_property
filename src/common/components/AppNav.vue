<script setup lang="ts">
import Button from 'primevue/button';
const items = [
    {
        label: 'about',
        to: '#'
    },
    {
        label: 'amenities',
        to: '#'
    },
    {
        label: 'types',
        to: '#'
    },
    {
        label: 'location',
        to: '#'
    },
    {
        label: 'contact',
        to: '#'
    },
];
</script>

<template>
    <nav class="navigation-links">
        <Button v-for="(item, index) in items" :key="index" :label="$t(item.label)" plain text />
    </nav>
</template>
<style lang="scss">
.navigation-links {
    display: flex;
    flex-direction: column;
    align-items: start;

    @media (min-width: 1025px) {
        flex-direction: row;
    }
}
</style>
