<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import AppIcon from '@/common/components/AppIcon.vue';
import Button from 'primevue/button';

const globalStore = useGlobalStore()
</script>

<template>
    <div class="flex flex-wrap gap-3">
        <div class="w-9rem md:w-21rem mx-2 gap-2 flex align-items-center" v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0 , 12)">
            <AppIcon :icon="amenity.amenityIcon"></AppIcon>
            <h4 class="font-light">{{ amenity.amenityName }}</h4>
        </div>
        <Button :label="`Show All ${globalStore.websiteFindResponse.property.amenities.length} Amenities`"></Button>
    </div>
</template>