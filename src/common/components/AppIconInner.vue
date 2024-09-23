<script lang="ts">
const loadIcon = async (props: AppIconProps): Promise<string> => {
	return new Promise((resolve) => {
		if (typeof props.icon == 'string' && props.iconType == 'primevue') {
			resolve(props.icon)
		}
		const columnName = typeof props.icon == 'string' ? 'iconName' : 'iconId'
		db.icons.where(columnName).equals(props.icon).first().then((icon: any) => {
			if (icon) {
				resolve(icon?.iconContent)
			}
			resolve('')
		}).catch((_) => resolve(''))

	})
}
</script>
<script setup lang="ts">
import { h, useAttrs } from 'vue';
import type { AppIconProps } from '@/common/types/types'
import db from '@/common/db/db'
const props = defineProps<AppIconProps>();
const icon = await loadIcon(props)
const renderIcon = () => {
	return props.iconType == 'primevue' ? h('span', {
		class: `pi pi-${icon}`,
	}) : h('span', {
		class: `app-icon ${props.size} `,
		attrs: props.color,
		innerHTML: icon,
	},)
}
</script>

<template>
	<component :is="renderIcon" />
</template>

<style lang="scss">
.app-icon {
	display: inline-block;
	height: 25px;
	width: 25px;

	& svg {
		width: 25px;
		height: 25px;
	}


	&.large {
		height: 3rem;
		width: 3rem;

		& svg {
			height: 3rem;
			width: 3rem;
		}
	}

	&.small {
		height: 1rem;
		width: 1rem;

		& svg {
			height: 1rem;
			width: 1rem;
		}
	}
}
</style>
