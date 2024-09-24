<script setup lang="ts">
import autoAnimate from "@formkit/auto-animate"
import { useGlobalStore } from '@/common/stores/global';
import AppIcon from '@/common/components/AppIcon.vue';
import Button from 'primevue/button';
import { onMounted, ref } from 'vue';
const globalStore = useGlobalStore()
const amenitiesContainer = ref()
const showAll = ref(false)
onMounted(() => {
  autoAnimate(amenitiesContainer.value, {
    easing : 'ease-in-out'
  })
})
</script>

<template>
    <div>
        <div ref="amenitiesContainer" class="flex flex-wrap gap-3 mb-3">
            <div class="w-9rem md:w-21rem mx-2 my-2 gap-2 flex align-items-center" :key="amenity.amenityId"
             v-for="amenity in globalStore.websiteFindResponse.property.amenities.slice(0 , showAll ? globalStore.websiteFindResponse.property.amenities.length : 12)">
                <AppIcon :icon="amenity.amenityIcon"></AppIcon>
                <h4 class="font-light">{{ amenity.amenityName }}</h4>
            </div>
        </div>
        <Button severity="contrast" class="px-4" v-if="!showAll" @click="showAll = true" :label="`Show All ${globalStore.websiteFindResponse.property.amenities.length} Amenities`"></Button>
        <Button severity="contrast" outlined v-else @click="showAll = false" :label="`Show Less`"></Button>
    </div>
</template>