import en from './locals/en'
import ar from './locals/ar'
import es from './locals/es'
import de from './locals/de'
import fr from './locals/fr'

const messages = {
    en,
    ar,
    de,
    es,
    fr
}

import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages
})

export default i18n;
