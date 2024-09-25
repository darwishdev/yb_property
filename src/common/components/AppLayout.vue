<script lang="ts">
import db from '@/common/db/db';
import apiClient from '@/common/api/ApiClient';
import { ThemeDefaults } from '../db/types';
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
import AppFooter from './AppFooter.vue';
import AppNav from './AppNav.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router'
import Drawer from 'primevue/drawer';
const isMenuOpenedRef = ref(false)
const i18n = useI18n()
await initIcons()
const theme = await initTheme()
if (theme.preferedLocale) i18n.locale.value = theme.preferedLocale
const toggleDarkMode = () => {
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
const toggleMenu = () => {
	console.log('toggle menu')
	isMenuOpenedRef.value = !isMenuOpenedRef.value
}

</script>

<template>


	<div class="top-bar glass">
		<div class="container">

			<div class="navigation">
				<!-- <app-image src="images/logo.webp" /> -->
				<img src="/rhactus-logo.png" class="max-w-3rem" />
				<AppNav class="show-desktop" />
				<div class="icons">
					<app-icon icon="moon" :click="toggleDarkMode"></app-icon>
					<app-icon icon="globe" :click="toggleLocale"></app-icon>

					<app-icon icon="menu" :click="toggleMenu" class="hide-desktop"></app-icon>
				</div>
				<Drawer v-model:visible="isMenuOpenedRef" position="right" :header="$t('menu')">
					<AppNav />
				</Drawer>


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
	<AppFooter />
</template>
<style lang="scss">
.top-bar {


	overflow: hidden;
	position: fixed;
	top: 0;
	width: 100%;
	height: var(--top-bar-height);
	z-index: 99;
	transition: all .3s ease-in-out;
	overflow: hidden;
	position: -webkit-sticky;
	position: -moz-sticky;
	position: -ms-sticky;
	position: -o-sticky;
	border-bottom: 1px solid var(--border-color);

}

.navigation {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: var(--top-bar-height);

	& .icons {
		display: flex;
		align-items: center;
		background-color: var('--p-content-background');
		border: 1px solid var(--p-menubar-border-color);
		padding: 1rem;
		gap: 1rem;
		border-radius: var(--p-menubar-border-radius);
		background: var(--p-color-glass);
		border-radius: 3rem;
	}
}
</style>
