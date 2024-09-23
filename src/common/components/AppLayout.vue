<script lang="ts">
import db from '@/common/db/db';
import apiClient from '@/common/api/ApiClient';
import AppNav from './AppNav.vue';

const initIcons = (): Promise<void> => {
	return new Promise((resolve, reject) => {
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
</script>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
import { useThemeStore } from '../stores/theme';
const themStore = useThemeStore()
await initIcons()


const changeTheme = () => {

	console.log('togllge')
	themStore.toggleDarkMode()
}
</script>

<template>
	<h2  @click="changeTheme">Applayout</h2>
	<nav>
		{{ $t('hello') }}
		<AppNav />

		<app-icon icon="moon" @click="changeTheme"></app-icon>
		<app-image src="images/logo.webp"/>
	</nav>
	<RouterView v-slot="{ Component }">
		<template v-if="Component">
			<Transition mode="out-in">
				<KeepAlive>
					<Suspense>
						<!-- main content -->
						<component :is="Component"></component>

						<!-- loading state -->
						<template #fallback>
							Loading...
						</template>
					</Suspense>
				</KeepAlive>
			</Transition>
		</template>
	</RouterView>
	<footer>
		Footer goes here better be on a component
	</footer>

</template> 