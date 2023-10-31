import { App, Plugin } from 'vue'

import Textbox from './textbox.vue'

export default {
    install(Vue: App, ) {
        Vue.component(Textbox.name, Textbox)
    }
} as Plugin

export {
    Textbox as BeeTextbox
}
