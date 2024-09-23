<script lang="ts">
import db from '@/common/db/db';
import apiClient from '@/common/api/ApiClient';
import AppNav from './AppNav.vue';
import { ThemeDefaults } from '../db/types';
import { useThemeStore } from '../stores/theme';
import { h } from 'vue';
import Loading from './Loading.vue';

const initIcons = (): Promise<void> => {
	return new Promise((resolve) => {
		db.icons.count().then(count => {
			count == 0 ? apiClient.iconsInputList({}).then((response) => {
				db.icons.clear()
				db.icons.bulkAdd(response.icons)
				resolve()
			}).catch((err) => {
				console.log('cannot load icons', err)
			}) : resolve()
		})

	})
}
const loadThemeDefaults = async (): Promise<ThemeDefaults> => {
	const theme = await db.theme.toArray()
	if (theme.length) {
		return theme[0]
	}
	const newTheme = await db.theme.add({
		darkMode: false,
		preferedLocale: 'en',
	})
	return newTheme
}


const initTheme = async () => {
	const theme = await loadThemeDefaults()
	if (theme.darkMode) document.documentElement.classList.toggle('my-app-dark');
	const dir = theme.preferedLocale == 'ar' ? 'rtl' : 'en'
	document.documentElement.setAttribute('dir', dir)
	return theme
}
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { RouterView } from 'vue-router'
const i18n = useI18n()
await initIcons()
const theme = await initTheme()
const themeStore = useThemeStore()
if (theme.preferedLocale) i18n.locale.value = theme.preferedLocale

const toggleDarkMode = () => {
	console.log(document.documentElement);
	console.log(document.documentElement.classList);
	
	theme.darkMode = !theme.darkMode
	db.theme.update(theme.id, theme)
	document.documentElement.classList.toggle('my-app-dark')
}

const toggleLocale = () => {
	theme.preferedLocale = theme.preferedLocale == 'ar' ? 'en' : "ar"
	const dir = theme.preferedLocale == 'ar' ? 'rtl' : 'en'
	db.theme.update(theme.id, theme)
	document.documentElement.setAttribute('dir', dir)
	i18n.locale.value = theme.preferedLocale
}
</script>

<template>
	<div class="container">

		<div class="navigation z-5">
			<!-- <app-image src="images/logo.webp" /> -->
			 <img src="/rhactus-logo.png" class="max-w-4rem" alt="">
			<AppNav />
			<div class="icons">
				<div @click="toggleLocale">
					<app-icon icon="globe"></app-icon>
				</div>
				<div @click="toggleDarkMode">
					<app-icon icon="moon"></app-icon>
				</div>
			</div>
		</div>

	</div>
	<RouterView v-slot="{ Component }">
		<template v-if="Component">
			<KeepAlive>
				<Suspense>
					<!-- main content -->
					<component :is="Component"></component>
						<!-- loading state -->
						<template #fallback>
							<div class="h-screen flex justify-content-center align-items-center">
								<Loading></Loading>
							</div>
						</template>
					</Suspense>
				</KeepAlive>
		</template>
	</RouterView>
	<footer>
		<!-- Footer goes here better be on a component -->
	</footer>

</template>
<style lang="scss">
.navigation {
	position: fixed;
	top: 15px;
	left: 0;
	width: 100%;
	padding: 0 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& .icons {
		display: flex;
		align-items: center;
		background-color: var('--p-content-background');
		border: 1px solid var(--p-menubar-border-color);
		padding: 1rem;
		gap: 1rem;
		border-radius: var(--p-menubar-border-radius);

	}
}
</style>
