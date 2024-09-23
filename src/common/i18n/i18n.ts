import { nextTick } from 'vue'
import { createI18n, I18n, IntlDateTimeFormat, IntlNumberFormat } from 'vue-i18n';
import ar from './locales/ar.json'
import en from './locales/en.json'
import { Router } from 'vue-router'
type MessageSchema = typeof en | typeof ar
export type I18N_TYPE = I18n<{
	en: MessageSchema;
	ar: MessageSchema;
}, {
	en: IntlDateTimeFormat;
	ar: IntlDateTimeFormat;
}, {
	en: IntlNumberFormat;
	ar: IntlNumberFormat;
}, string, true>
export const SUPPORTED_LOCALES = ['en', 'ar']
export type SUPPORTED_LOCALES_TYPE = 'en' | 'ar'

export function setupI18n(options = { locale: "en" }, router: Router) {
	const i18n = createI18n<[MessageSchema], SUPPORTED_LOCALES_TYPE>({ fallbackLocale: 'en', legacy: false, ...options, messages: { en, ar } })

	setI18nLanguage(i18n, <SUPPORTED_LOCALES_TYPE>options.locale)
	
	return i18n
}

export function setI18nLanguage(i18n: I18N_TYPE, locale: SUPPORTED_LOCALES_TYPE) {
	i18n.global.locale = locale
	/**
	 * NOTE:
	 * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
	 * The following is an example for axios.
	 *
	 * axios.defaults.headers.common['Accept-Language'] = locale
	 */
	document.querySelector('html')!.setAttribute('lang', locale)
}

export async function loadLocaleMessages(i18n: I18N_TYPE, locale: SUPPORTED_LOCALES_TYPE) {
	// load locale messages with dynamic import
	const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `./locales/${locale || 'en'}.json`
	)

	// set locale and locale message
	i18n.global.setLocaleMessage(locale, messages.default)

	return nextTick()
}

