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
import Slider from '../components/partials/Slider.vue';
import RoomTypes from '../components/RoomTypes.vue';
import Button from 'primevue/button';
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
		<source :src="globalStore.websiteFindResponse.website.bannerVideo" type="video/webm">
	</video>
	
	<Section :title="`About ${globalStore.websiteFindResponse.property.propertyName}`" >
		<Slider></Slider>
		<div class="separator my-5"></div>
		<h3 class="text-center text-base md:text-lg px-1 md:px-5 md:py-3">{{ globalStore.websiteFindResponse.property.propertyDescription }}</h3>
	</Section>
	<Banner class bannerImage="https://www.rhactushotel.com/images/uploads/2022319588257.jpg" >
		<div class="text-white w-full px-4">
			<h1 class="text-left text-base md:text-3xl font-light text-white mb-3 w-15rem md:w-24rem">Experience Comfort, Embrace Elegance
				<br><span class="text-xs md:text-sm font-light">Stay with Rhactus House in Alexandria.</span>
			</h1>
		</div>
	</Banner>
	<Section title="Our Amenities" >
		<Amenities></Amenities>
	</Section>
	<Section title="Room Types" >
		<RoomTypes></RoomTypes>
	</Section>
	<Banner class bannerImage="/IMG_3583.webp" >
		<div class="text-white w-full px-4">
			<h1 class="text-left text-base md:text-3xl font-light text-white mb-3 w-15rem md:w-24rem">Our Nearby Locations!
				<br><span class="text-xs md:text-sm font-light">Stay with Rhactus House in Alexandria.</span>
			</h1>
			<Button label="Explore" severity="contrast" class="px-2 md:px-4"></Button>
		</div>
	</Banner>
	<Section title="Our Location" >
		<Map class="w-full"></Map>
	</Section>
</template>

<style>
.separator{
	margin: auto;
	height: 2px;
	background-color: rgba(0, 0, 0, 0.135);
	width: 75%;
}
</style>