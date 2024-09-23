import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '{indigo.50}',
			100: '{indigo.100}',
			200: '{indigo.200}',
			300: '{indigo.300}',
			400: '{indigo.400}',
			500: '{indigo.500}',
			600: '{indigo.600}',
			700: '{indigo.700}',
			800: '{indigo.800}',
			900: '{indigo.900}',
			950: '{indigo.950}'
		},
		content: {
			background: 'red'
		},
	},
	navigation: {
		item: {
			background: 'red' // Use your custom CSS variable
		}
	},
	colorScheme: {
		light: {
			formField: {
				hoverBorderColor: '{primary.color}'
			}
		},
		dark: {
			formField: {
				hoverBorderColor: '{primary.color}'
			}
		}
	}
});


export const config = {
	theme: {
		preset: MyPreset,
		options: {
			darkModeSelector: '.my-app-dark',
		}
	}
}
