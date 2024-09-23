<script setup lang="ts">
import Menubar from 'primevue/menubar';

import { ref } from "vue";
import { useI18n } from 'vue-i18n';
const { t } = useI18n()
const items = ref([
    {
        label: t('about'),
    },
    {
        label: t('amenities'),
    },
    {
        label: t('types'),
    },
    {
        label: t('location'),
    },
    {
        label: t('contact'),
    },
]);
</script>

<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>
