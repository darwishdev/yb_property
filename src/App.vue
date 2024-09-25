<script setup lang="ts">
import { RouterView } from 'vue-router'
import DynamicDialog from 'primevue/dynamicdialog';
</script>

<template>
	<div id=progress></div>
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
	<DynamicDialog />

</template>
