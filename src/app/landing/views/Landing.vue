<script setup lang="ts">
import Section from '../components/Section.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/common/stores/global';
import Banner from '../components/Banner.vue';
import Map from '../components/Map.vue';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import AppImage from '@/common/components/AppImage.vue';
import Amenities from '../components/Amenities.vue';
const globalStore = useGlobalStore()
const images = ref([
	{
		image: 'https://r4.wallpaperflare.com/wallpaper/436/861/297/sunset-landscape-nature-structure-wallpaper-b9a0f81d214aed1b86d7e87f2031664d.jpg'
	},
	{
		image: 'https://r4.wallpaperflare.com/wallpaper/436/861/297/sunset-landscape-nature-structure-wallpaper-b9a0f81d214aed1b86d7e87f2031664d.jpg'
	},
	{
		image: 'https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg'
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
	<section class="banner">
		<div class="banner-content">
			<h1>Escape to Luxury</h1>
			<h3> Your Dream Stay Awaits</h3>
			<p>Discover a world where comfort meets elegance. At Rhactus San Hotel, we offer you an
				unforgettable experience with luxurious rooms, stunning views, and unparalleled
				service.
				Whether you're here for relaxation or adventure, we ensure that every moment of
				your
				stay is pure bliss.</p>
			<div class="actions">

				<Button size="large" icon="pi pi-phone" label="Contact"></Button>
				<Button size="large" icon="pi pi-key" outlined label="Units"></Button>

			</div>
		</div>
		<video width="100%" height="auto" preload="auto" autoplay muted loop>
			<source src="../../../assets/alex2.webm" type="video/webm">
		</video>

	</section>
	<Section :title="`About ${globalStore.websiteFindResponse.property.propertyName}`">
		<Carousel :value="globalStore.websiteFindResponse.property.images" :numVisible="3" :numScroll="1"
			:responsiveOptions="responsiveOptions" circular :autoplayInterval="3000">
			<template #item="slotProps">
				<div class="mb-4">
					<div class="relative mx-auto">
						<AppImage :src="slotProps.data" :size="{ width: 200 }"></AppImage>
					</div>
				</div>
			</template>
		</Carousel>
	</Section>
	<Section title="Our Amenities">
		<Amenities></Amenities>
	</Section>
	<Section title="Our Location">
		<Map class="w-full"></Map>
	</Section>
</template>
<style>
.banner {
	height: 100vh;
	min-height: 60rem;
	transform: translateY(var(--top-bar-height-minus));

	& video {
		min-height: 100%;
		object-fit: cover;
	}

	& .banner-content {
		position: absolute;
		top: 50%;
		left: 50%;
		color: #fff;
		transform: translate(-50%, -50%);

		& h1,
		h3,
		p {

			color: white;
		}

		& .actions {
			margin-top: 3rem;
			display: flex;
			gap: 1rem;

			& span {

				font-size: 1.5rem;
				color: white
			}

		}

		/*	& h1 {*/
		/*		font-size: 3rem;*/
		/*		line-height: 4rem;*/
		/*		font-weight: bold;*/
		/*	}*/
		/**/
		/*	& p {*/
		/*		font-size: 2rem;*/
		/*		margin-top: 3rem;*/
		/*	}*/
		/**/
		/*	& .actions {*/
		/*		margin-top: 3rem;*/
		/*		display: flex;*/
		/*		gap: 1rem;*/
		/**/
		/*		& span {*/
		/**/
		/*			font-size: 1.5rem;*/
		/*			color: white*/
		/*		}*/
		/*	}*/
	}
}
</style>
