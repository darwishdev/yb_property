<script setup lang="ts">
import Galleria from 'primevue/galleria';
import Section from '../components/Section.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/common/stores/global';
import Banner from '../components/Banner.vue';
import Map from '../components/Map.vue';
import Carousel from 'primevue/carousel';
import AppImage from '@/common/components/AppImage.vue';
import Amenities from '../components/Amenities.vue';
const globalStore = useGlobalStore()
const images = ref([
	{
		image : 'https://r4.wallpaperflare.com/wallpaper/436/861/297/sunset-landscape-nature-structure-wallpaper-b9a0f81d214aed1b86d7e87f2031664d.jpg'
	},
	{
		image : 'https://r4.wallpaperflare.com/wallpaper/436/861/297/sunset-landscape-nature-structure-wallpaper-b9a0f81d214aed1b86d7e87f2031664d.jpg'
	},
	{
		image : 'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg'
	},
]);
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
const data = await globalStore.websiteFind()

</script>
<template>
	<!-- <h2>la</h2> -->
	<video width="100%" height="auto" preload="auto" autoplay muted loop>
		<source src="../../../assets/alex2.webm" type="video/webm">
	</video>

	<Banner  bannerImage="https://www.rhactushotel.com/images/uploads/2022319588257.jpg" >
		<div class="text-white w-full px-5">
			<h1 class="text-left font-light text-white w-24rem">Experience Comfort, Embrace Elegance</h1>
			<p class="text-white font-light px-2">Stay with Rhactus House in Alexandria.</p>
		</div>
	</Banner>
	<Section :title="`About ${globalStore.websiteFindResponse.property.propertyName}`" >
		<Carousel :value="globalStore.websiteFindResponse.property.images" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
			<template #item="slotProps">
					<div class="mb-4">
						<div class="relative mx-auto">
							<AppImage :src="slotProps.data" :size="{ width : 200  }"></AppImage>
						</div>
					</div>
			</template>
		</Carousel>		
	</Section>
	<Section title="Our Amenities" >
		<Amenities></Amenities>
	</Section>
	<Section title="Our Location" >
			<Map class="w-full"></Map>
	</Section>
</template>
