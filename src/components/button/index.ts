// src/components/button/index.ts
import { App, Plugin } from 'vue'

import BeeButton from './bee-button.vue'

export default {
    install(Vue: App) {
        Vue.component(BeeButton.name, BeeButton)
    }
} as Plugin

export {
    BeeButton
}
