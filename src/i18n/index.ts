import { createI18n } from 'vue-i18n'
import en from './en.json'
import ua from './ua.json'

const messages = {
  en,
  ua,
}

const i18n = createI18n({
  locale: 'ua',
  fallbackLocale: 'en',
  messages,
})

export default i18n
