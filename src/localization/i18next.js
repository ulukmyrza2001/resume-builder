import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.use(Backend)
	.init({
		debug: true,
		supportedLngs: ['ru', 'en'],
		fallbackLng: 'en',
		detection: {
			order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
			caches: ['localStorage'],
		},
		interpolation: {
			escapeValue: true,
		},
		backend : {
			loadPath : '/assets/locales/{{lng}}/translation.json'
		},
	})
export default i18n
