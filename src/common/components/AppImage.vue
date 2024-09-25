<script setup lang="ts">
import Image, { type ImageSlots } from 'primevue/image';
import { h, ref } from 'vue';
import { type AppImageProps, type SizeObj } from '@/common/types/types'


const props = defineProps<AppImageProps>();
const slots = defineSlots<ImageSlots>();
const defaultWidth = 150
// get needed urls provided by package config
const baseImageUrl = import.meta.env.VITE_BASE_IMG as string
const fallBackImageUrl = import.meta.env.VITE_FALLBACK_IMG as string
const imageSrc = ref(props.src.includes('https') ? props.src : `${baseImageUrl}${props.src}`)
const sizeObj: SizeObj | undefined = typeof props.size === 'number' ? { width: props.size } : props.size
// watch(props.src, async(new : any, old : any)=> {

// })
// watch(props.src, async (newValue) => { update(newValue) })
// function to render the primevue image component
const renderImage = () => {
    // let src = fallBackImageUrl
    // if (props.src != "") src = baseImageUrl + props.src
    const imgProps = {
        src: imageSrc.value,
        width: sizeObj ? sizeObj.width : defaultWidth,
        height: sizeObj ? sizeObj.height : undefined,
        ...props.imageProps
    }
    return h(Image, { ...imgProps, style: { maxHeight: props.maxHeight }, onError: () => imageSrc.value = fallBackImageUrl }, () => slots)
}


</script>

<template>
    <component :key="props.src" :is="renderImage" />
</template>
<style>
img {
    background-color: var(--fk-bg-input);
    border-radius: 5px;
}
</style>
