<script setup lang="ts">
import { useGlobalStore } from '@/common/stores/global';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Autoplay, Keyboard } from 'swiper/core';
import AppImage from '@/common/components/AppImage.vue';
const globalStore = useGlobalStore()
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow'
const modules = [Autoplay, Keyboard, EffectCoverflow, Pagination]

</script>
<template>
  <swiper class="slide-innn" :modules="modules" :pagination="true" :effect="'coverflow'" :grab-cursor="true"
    :keyboard="{ enabled: true }" :centered-slides="false" :slides-per-view="1" :breakpoints="{
      '640': {
        slidesPerView: 1
      },
      '760': {
        slidesPerView: 3
      },
      '1600': {
        slidesPerView: 4
      },
    }" :autoplay="{
      delay: 5500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }" :coverflow-effect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }">
    <swiper-slide v-for="image in globalStore.websiteFindResponse.property.images">
      <AppImage :src="image" :image-props="{ preview: true }" :size="{ width: '100%' }" max-height='200px'></AppImage>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss">
.p-image img {
  max-height: 270px;
}

@keyframes slide-in {
  100% {
    transform: translate(0, 0);
    opacity: 1
  }
}


.slide-innn {
  direction: ltr;
  opacity: 0;
  transform: translate(-10%, 10%);
  animation: slide-in linear forwards;
  animation-timeline: view() !important;
  position: relative;
  margin-bottom: 1rem;
  animation-range: entry 50% cover 50% !important;
}
</style>
