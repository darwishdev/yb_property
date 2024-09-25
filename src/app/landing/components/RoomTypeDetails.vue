<script setup lang="ts">
import { inject, onMounted, ref } from "vue";
import { PropertyFindFilteredReservableUnit } from '@buf/ahmeddarwish_abc-api.bufbuild_es/abc/v1/properties_property_filters_pb';

const dialogRef : any = inject('dialogRef');
const room = ref<PropertyFindFilteredReservableUnit>(dialogRef.value.data.room)
</script>


<template>
    <div>
        {{ room }}
    </div>
</template>