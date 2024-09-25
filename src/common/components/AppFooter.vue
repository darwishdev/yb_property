<script lang="ts" setup>
import { ref } from 'vue';
import AppNav from './AppNav.vue';
// Store contact information in a Vue object
const contact = ref({
	phone: '1234567890',
	email: 'company@email.com',
	location: '100 Smart Street, LA, USA'
});
</script>
<template>
	<footer class="app-footer darker">
		<div class="container pt-8">
			<div class="show-desktop mb-4">
				<div class="grid">
					<div class="logo">
						<app-image src="images/logo.webp" />
						<p v-t="'about_us_footer'" class="mt-6" />
					</div>
					<div class="nav">
						<h3 v-t="'comppany'" class="mb-4" />
						<AppNav class="flex-column" />
					</div>
					<div class="contact">
						<h3 v-t="'contacts'" class="mb-4" />
						<p>
							<span v-t="'phone'"></span>: {{ contact.phone }}
						</p>
						<p>
							<span v-t="'email'"></span>: {{ contact.email }}
						</p>
						<p>
							<span v-t="'location'"></span>: {{ contact.location }}
						</p>
					</div>

				</div>
			</div>
			<p class="text-center copyright" v-t="'copyright'" />
		</div>
	</footer>
</template>
<style lang="scss">
.app-footer {

	.copyright {
		padding-block: 1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem;
	}
}
</style>
