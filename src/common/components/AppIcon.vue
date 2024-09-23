<script setup lang="ts">
import type { AppIconProps, AppIconSlots } from '@/common/types/types'
import AppIconIconInner from '@/common/components/AppIconInner.vue';
import Skeleton from 'primevue/skeleton';
import { useAttrs } from 'vue';
const props = defineProps<AppIconProps>();
const slots = defineSlots<AppIconSlots>();
const attrs = useAttrs()

</script>

<template>
	<Suspense timeout="0">
		<template #default>
			<div class="app-icon" v-if="typeof slots.top == 'function'">
				<div class="top">
					<component :is="slots.top"></component>
				</div>
				<AppIconIconInner :icon="props.icon" :color="props.color" :size="props.size" />
			</div>

			<AppIconIconInner v-else @click="props.click" :class="attrs.class" :icon="props.icon"
				:color="props.color" :size="props.size" />
		</template>
		<template #fallback>
			<div class="loading">
				<Skeleton width="2rem" class="mb-2"></Skeleton>
			</div>
		</template>
	</Suspense>

</template>
