<script setup lang="ts">
import AppImage from '@/common/components/AppImage.vue';
import { PropertyFindFilteredReservableUnit } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';
import Button from 'primevue/button';
import { useDialog } from 'primevue/usedialog';
import RoomTypeDettails from '../RoomTypeDetails.vue';
const dialog = useDialog();

const props = defineProps<{
    unit : PropertyFindFilteredReservableUnit
}>()

const openRoomTypeDialog = () => {
    dialog.open(RoomTypeDettails, {
			props: {
				style: {
					width: '50vw',
				},
				breakpoints: {
					'960px': '75vw',
					'640px': '90vw'
				},
				modal: true,
				dismissableMask: true
			},
            data : {
                room : props.unit
            },
			onClose: (options) => {
				console.log('options', options)
			}

    });
}
</script>

<template>
    <div class="room-card ">
        <!-- <AppImage :src="unit.reservableUnitImage" :size="{width : '250px'}" :alt="unit.reservableUnitName" /> -->
         <div class="w-full h-full flex justify-content-center align-items-end pb-5">
            <Button @click="" :label="unit.reservableUnitName" severity="contrast"></Button>
         </div>
    </div>
</template>
<style>
.room-overlay{
    background-color: rgba(0, 0, 0, 0.119) !important;
    padding: 1rem;
}
.room-card{
    background-image: url(/IMG_3622.webp);
    background-size: cover;
    height: 380px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.11), /* Light shadow */
    0 6px 20px rgba(0, 0, 0, 0.15); /* Darker shadow for depth */
    background-position: center;
    border-radius: 10px;
}
</style>