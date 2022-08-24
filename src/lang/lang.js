import Vue from 'vue'
import VueI18n from 'vue-i18n'

import th from './th.json'

Vue.use(VueI18n)

const messages = {
    th : th
}

const i18n = new VueI18n({
    locale: 'th',
    messages
})
export default i18n