import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: '#BC955C',
			100: '#8c734B',
			200: '#8c734B',
			300: '#8c734B',
			400: '#8c734B',
			500: '#8c734B',
			600: '#8c734B',
			700: '#8c734B',
			800: '#8C734B',
			900: '#8C734B',
			950: '#8C734B'
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
