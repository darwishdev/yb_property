<script setup lang="ts" >
import { useGlobalStore } from '@/common/stores/global';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination , Autoplay , Keyboard } from 'swiper/core';
import AppImage from '@/common/components/AppImage.vue';
const globalStore = useGlobalStore()
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
const modules = [Autoplay , Keyboard , EffectCoverflow, Pagination]

</script>
<template>
    <swiper
      :modules="modules"
      :pagination="true"
      :effect="'coverflow'"
      :grab-cursor="true"
      :keyboard="{enabled : true}"
      :centered-slides="false"
      :slides-per-view="2"
      :breakpoints="{
        '640' : {
          slidesPerView : 2
        },
        '760':{
          slidesPerView : 3
        },
        '1600':{
          slidesPerView : 4
        },
      }"
      :autoplay="{
        delay : 5500,
        disableOnInteraction : false,
        pauseOnMouseEnter : true,
      }"
      :coverflow-effect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
    >
      <swiper-slide v-for="image in globalStore.websiteFindResponse.property.images">
        <AppImage :src="image" :size="{ width : '100%'  }"></AppImage>
      </swiper-slide>
    </swiper>
  </template>

<style>
.p-image img{
  max-height: 270px;
}
</style>