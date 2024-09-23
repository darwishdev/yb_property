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
		}
	},
	colorScheme: {
		light: {
			primary: {
				color: '{zinc.950}',
				inverseColor: '#ffffff',
				hoverColor: '{zinc.900}',
				activeColor: '{zinc.800}'
			},
			highlight: {
				background: '{zinc.950}',
				focusBackground: '{zinc.700}',
				color: '#ffffff',
				focusColor: '#ffffff'
			}
		},
		dark: {
			primary: {
				color: '{zinc.50}',
				inverseColor: '{zinc.950}',
				hoverColor: '{zinc.100}',
				activeColor: '{zinc.200}'
			},
			highlight: {
				background: 'rgba(250, 250, 250, .16)',
				focusBackground: 'rgba(250, 250, 250, .24)',
				color: 'rgba(255,255,255,.87)',
				focusColor: 'rgba(255,255,255,.87)'
			}
		}
	}
});


export const config = {
	theme: {
		preset: MyPreset,
		options: {
			darkModeSelector: '.p-dark',
		}
	}
}
