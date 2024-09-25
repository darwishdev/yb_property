<script setup lang="ts">
import Section from '../components/Section.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/common/stores/global';
import Banner from '../components/Banner.vue';
import Map from '../components/Map.vue';
import Button from 'primevue/button';
import Amenities from '../components/Amenities.vue';
import Slider from '../components/partials/Slider.vue';
import RoomTypes from '../components/RoomTypes.vue';
const globalStore = useGlobalStore()

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
await globalStore.websiteFind()

</script>
<template>
	<!-- <h2>la</h2> -->
	<section class="video-banner ">
		<div class="container">

			<div class="banner-content">
				<h1>Escape to Luxury</h1>
				<h4> Your Dream Stay Awaits</h4>
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
		</div>
		<video width="100%" height="auto" preload="auto" autoplay muted loop>
			<source :src="globalStore.websiteFindResponse.website.bannerVideo" type="video/webm">
		</video>

	</section>

	<Section :title="`About`" dark>
		<Slider></Slider>
		<div class="separator my-5"></div>
		<h3 class="text-center text-base md:text-lg px-1 md:px-5 md:py-3 reveal">{{
			globalStore.websiteFindResponse.property.propertyDescription }}</h3>
	</Section>
	<Banner class bannerImage="https://www.rhactushotel.com/images/uploads/2022319588257.jpg">
		<div class="container">
			<div class="text-white w-full">

				<h1 class="text-white">
					Experience Comfort, <br /> Embrace Elegance
					<br><span class="text-xs md:text-sm font-light">Stay with Rhactus House in
						Alexandria.</span>
				</h1>
			</div>

		</div>
	</Banner>
	<div class="py-8 px-8 darker">
		<h2 class="reveal">Amenities</h2>
		<hr class="short">

		<Amenities></Amenities>
	</div>
	<Section title="Room Types">
		<RoomTypes></RoomTypes>
	</Section>
	<Banner class bannerImage="/IMG_3583.webp">
		<div class="container">
			<div class="text-white w-full px-4">
				<h1
					class="text-left text-base md:text-3xl font-light text-white mb-3 w-15rem md:w-24rem">
					Our
					Nearby Locations!
					<br><span class="text-xs md:text-sm font-light">Stay with Rhactus House in
						Alexandria.</span>
				</h1>
				<Button label="Explore" severity="contrast" class="px-2 md:px-4"></Button>
			</div>
		</div>
	</Banner>
	<Section title="Our Location">
		<Map class="w-full"></Map>
	</Section>
</template>

<style lang="scss">
.separator {
	margin: auto;
	height: 2px;
	background-color: rgba(0, 0, 0, 0.135);
	width: 75%;
}

@keyframes fade-out {
	100% {
		opacity: 0
	}
}

@keyframes header-video-animation {
	25% {
		opacity: 1
	}

	85%,
	100% {
		opacity: 0;
		scale: 3;
	}
}


.video-banner {
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: end;
	padding: 3rem 2rem;
	min-height: 20rem;
	position: relative;


	& video {
		min-height: 100%;
		object-fit: cover;
		animation: header-video-animation linear forwards;
		animation-timeline: view();
		animation-range: exit;
		inset: 0;
		transform-origin: bottom;

		position: absolute;
		opacity: .8;
		top: 0;
		left: 0;
		width: 100%;
		z-index: -1;

	}

	& .banner-content {
		animation: fade-out linear;
		animation-timeline: view();
		animation-range: exit -24rem;
		z-index: 2;

		& h1,
		h4,
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
