<script setup lang="ts">
import type { AppIconProps, AppIconSlots } from '@/common/types/types'
import AppIconIconInner from '@/common/components/AppIconInner.vue';
import Skeleton from 'primevue/skeleton';
const props = defineProps<AppIconProps>();
const slots = defineSlots<AppIconSlots>();


</script>

<template>
	<Suspense timeout="0" >
		<template #default>
			<div class="app-icon" @click="props.click" v-if="typeof slots.top == 'function'">
				<div class="top">
					<component :is="slots.top"></component>
				</div>
				<AppIconIconInner  :icon="props.icon" :color="props.color" :size="props.size" />
			</div>
			<AppIconIconInner v-else  @click="props.click"  :icon="props.icon" :color="props.color" :size="props.size" />
		</template>
		<template #fallback>
			<div class="loading">
				<Skeleton width="2rem" class="mb-2"></Skeleton>
			</div>
		</template>
	</Suspense>

</template>
