import { createI18n, I18n, IntlDateTimeFormat, IntlNumberFormat } from 'vue-i18n';
import ar from './locales/ar.json'
import en from './locales/en.json'
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
const i18n = createI18n<[MessageSchema], SUPPORTED_LOCALES_TYPE>({ fallbackLocale: 'en', locale: 'en', legacy: false, messages: { en, ar } })
export const SUPPORTED_LOCALES = ['en', 'ar']
export type SUPPORTED_LOCALES_TYPE = 'en' | 'ar'
export default i18n
