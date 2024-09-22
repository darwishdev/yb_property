<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Suspense } from 'vue'
</script>

<template>
	<h2>Applayout</h2>
	<nav>
		nav goes here better be on a component
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
