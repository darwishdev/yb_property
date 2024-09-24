<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
const globalStore = useGlobalStore()
</script>

<template>
    <div>
        <iframe :src="globalStore.websiteFindResponse.property.iframeUrl" height="480" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style>
iframe{
    display: flex;
    margin: auto;
    width: 100%;
}
</style>
