import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', () => {
	const toggleDarkMode = () => {
		const element = document.querySelector('html');
		element!.classList.toggle('my-app-dark');
	}
	return {
		toggleDarkMode
	}
})

