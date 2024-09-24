<script setup lang="ts">
import Galleria from 'primevue/galleria';
import Section from '../components/Section.vue';
import { ref } from 'vue';
import { useGlobalStore } from '@/common/stores/global';
import Banner from '../components/Banner.vue';
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
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);

const data = await globalStore.websiteFind()

</script>
<template>
	<!-- <h2>la</h2> -->
	<video width="100%" height="auto" preload="auto" autoplay muted loop>
		<source src="../../../assets/alex2.webm" type="video/webm">
	</video>
	<!-- <div>
		<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
		:showItemNavigators="true">
			<template #item="slotProps">
				<img :src="slotProps.item.image" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
			</template>
		</Galleria>
	</div> -->
	<Banner  bannerImage="https://www.rhactushotel.com/images/uploads/2022319588257.jpg" >
		<div class="text-white w-full">
			<h2>slogan</h2>
		</div>
	</Banner>
	<Section title="About Rhactus" >
		heeeey
	</Section>
</template>
