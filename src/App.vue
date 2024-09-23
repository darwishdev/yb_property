<script setup lang="ts">
import { RouterView } from 'vue-router'
import DynamicDialog from 'primevue/dynamicdialog';
</script>

<template>
	<RouterView v-slot="{ Component }">
		<template v-if="Component">
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
		</template>
	</RouterView>
	<DynamicDialog />
</template>
