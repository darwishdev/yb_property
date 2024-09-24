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
	<footer class="app-footer">
		<div class="container">
			<div class="show-desktop">
				<div class="grid">
					<div class="logo">
						<app-image src="images/logo.webp" />
						<p v-t="'about_us_footer'" />
					</div>
					<div class="nav">
						<h3 v-t="'comppany'" />
						<AppNav class="flex-column" />
					</div>
					<div class="contact">
						<h3 v-t="'contacts'" />
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
			<p class="text-center" v-t="'copyright'" />
		</div>
	</footer>
</template>
<style lang="scss">
.app-footer {
	padding: 1rem 0;

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 5rem;
	}
}
</style>
