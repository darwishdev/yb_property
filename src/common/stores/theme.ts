import { defineStore } from 'pinia'
import { useDialog } from 'primevue/usedialog';
import { VNode } from 'vue';
export const useThemeStore = defineStore('theme', () => {

	const dialog = useDialog();

	const showDialog = (cmp: VNode) => {
		console.log("dialog", dialog)
		dialog.open(cmp, {
			props: {
				style: {
					width: '50vw',
				},
				breakpoints: {
					'960px': '75vw',
					'640px': '90vw'
				},
				modal: true,
				dismissableMask: true
			},
			onClose: (options) => {
				console.log('options', options)
			}

		});
	}
	return {
		showDialog
	}
})

